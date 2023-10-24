
import 'pace-js'
import 'pace-js/themes/purple/pace-theme-flash.css'
import "./styles/app.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './routes';
import AppStoreProvider from "./store/Provider/Provider";
import {AuthProvider} from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <AuthProvider>
        <AppStoreProvider>
        <Routes/>
        </AppStoreProvider>
    </AuthProvider>
);
