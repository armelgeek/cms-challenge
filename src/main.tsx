
import "./styles/app.scss";
import 'react-fontpicker-ts/dist/index.css'
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './routes';
import AppStoreProvider from "./store/Provider/Provider";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <AppStoreProvider>
        <Routes/>
        </AppStoreProvider>
);
