import './MainPage.scss'
import React from 'react';
import { Link } from 'react-router-dom';
import { PATH_VARIBLES } from '../../../utils/Constants';
import Button from '../../components/button/Button';

function MainPage() {
    return (
        <div className='main wrapper'>
            <div className="main__elements-block">
                <Link to={PATH_VARIBLES.FORM_PAGE}>
                    <Button>
                        Form Page
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default MainPage;
