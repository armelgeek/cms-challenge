
import "./styles/app.scss";
import 'react-fontpicker-ts/dist/index.css';
import 'unsplash-image-picker/dist/index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './routes';
import AppStoreProvider from "./store/Provider/Provider";
import {AuthProvider} from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <AppStoreProvider>
        <Routes/>
        </AppStoreProvider>
);
