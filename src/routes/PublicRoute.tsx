import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { MdDateRange, MdOutlineQueue } from "react-icons/md";
import { FaEllipsis, FaRankingStar } from "react-icons/fa6";
import Navbar from "../components/header/Navbar";
import { useLocation } from "react-use";
import { BsList } from "react-icons/bs";
// @ts-ignore
const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <>
            <Navbar />
            <div className="main">
        
                <Route
                    {...rest}
                    render={(props: any) => <Component {...props} />}
                />
            </div>
        </>
    );
};

export default PublicRoute;
