import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppContainer from "../components/admin/AppContainer";
import BodyWrapper from "../components/admin/BodyWrapper";
import Navbar from "../components/header/Navbar";
import { FaArrowLeft } from 'react-icons/fa';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <Navbar />
        <Route
          {...rest}
          render={(props: any) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
    </div>
  );
};

export default PrivateRoute;
