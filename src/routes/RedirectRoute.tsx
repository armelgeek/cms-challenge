import React from 'react';
import {Route, Redirect, Link} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
// @ts-ignore
const RedirectRoute = ({ component: Component, ...rest }) => {
    const {isAuthenticated} = useAuth();
    return (
        <>
            <Route
                {...rest}
                render={(props: any) =>
                    !isAuthenticated ? <Component {...props} /> : <Redirect to="/"/>
                }
            />
        </>
    );
};

export default RedirectRoute;
