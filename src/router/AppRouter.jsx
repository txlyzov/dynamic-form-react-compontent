import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import routes from './Routes';
import MainPage from '../ui/pages/main/MainPage';

function AppRouter() {
    return (
        <Routes>
            {routes.map((route) =>
                <Route
                    key={uuidv4()}
                    path={route.path}
                    element={route.element}
                    exact={route.exact} />
            )}
            <Route path="*" element={<MainPage />} />
        </Routes>
    );
}

export default AppRouter;
