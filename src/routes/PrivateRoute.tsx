import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import AppContainer from "../components/admin/AppContainer";
import BodyWrapper from "../components/admin/BodyWrapper";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <AppContainer>
      <BodyWrapper>
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
      </BodyWrapper>
    </AppContainer>
  );
};

export default PrivateRoute;
