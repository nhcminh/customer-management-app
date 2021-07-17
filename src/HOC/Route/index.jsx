import React from "react";
import { Redirect, Route } from "react-router";

const createRoute = (condition) => {
  return class extends React.Component {
    render() {
      const { path, exact, Component, redirectPath } = this.props;
      return (
        <Route
          path={path}
          exact={exact}
          render={(props) => {
            if (condition()) {
              return <Component {...props} />;
            }
            return <Redirect to={redirectPath} />;
          }}
        />
      );
    }
  };
};

export const AuthRoute = createRoute(() => !localStorage.getItem("token"));
export const PrivateRoute = createRoute(() => localStorage.getItem("token"));
