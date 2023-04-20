import React from "react";

import { PATH_VARIBLES } from "../utils/Constants";
import MainPage from "../ui/pages/main/MainPage";
import FormPreviewPage from "../ui/pages/form/FormPreviewPage";

const routes = [
  { path: PATH_VARIBLES.FORM_PAGE, element: <FormPreviewPage />, exact: true },
  { path: PATH_VARIBLES.MAIN, element: <MainPage />, exact: true },
];

export default routes;
