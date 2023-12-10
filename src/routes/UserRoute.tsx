import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { useLocation } from "react-use";
import { BsList } from "react-icons/bs";
import Navbar from "../components/header/Navbar";
// @ts-ignore
const UserRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();
    return (
        <>
            <Navbar />
            <div className="mx-44 grid grid-cols-9 max-[828px]:mx-20 max-[711px]:mx-10 max-[675px]:mx-20 max-[591px]:mx-16 max-[528px]:mx-4 max-[474px]:h-24 max-[474px]:pb-10">
                <main className="col-span-12">
                    <Route
                        {...rest}
                        render={(props: any) => <Component {...props} />}
                    />
                </main>
            </div>
        </>
    );
};

export default UserRoute;
