import React  from "react";
import ReactDOMClient from "react-dom/client";
import AppRoute from "./AppRoutes";
import  './index.css'


const root =  ReactDOMClient.createRoot(document.getElementById("root"));

root.render(<React.StrictMode>
    <AppRoute />
</React.StrictMode>);