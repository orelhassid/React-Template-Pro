import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";
import {
  POST_RT,
  POSTS_RT,
  ACCOUNT_RT,
  HOME_RT,
  LOGOUT_RT,
} from "../config/routes";
import HomeScreen from "../screens/HomeScreen";
import PostSettingsScreen from "../screens/PostSettingsScreen";
import PostsScreen from "../screens/posts/PostsScreen";
import AccountScreen from "../screens/account/AccoutScreen";
import useAuth from "../hooks/useAuth";
import LogoutScreen from "../screens/auth/LogoutScreen";

export default function RouterApp() {
  return (
    <Switch>
      <ProtectedRoute path={ACCOUNT_RT} component={AccountScreen} />
      <Route path={LOGOUT_RT} component={LogoutScreen} />
      <Route path={POST_RT} component={PostSettingsScreen} />
      <Route path={POSTS_RT} component={PostsScreen} />
      <Route path="/" component={HomeScreen} />
    </Switch>
  );
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { status } = useAuth();
  const location = useLocation();

  return status.isLogin ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: HOME_RT,
        state: { from: location },
      }}
    />
  );
};

const RedirectAuthRoute = ({ component: Component, ...rest }) => {
  const { status } = useAuth();
  const location = useLocation();

  console.log("Status", status);

  return !status.isLogin ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: ACCOUNT_RT,
        state: { from: location },
      }}
    />
  );
};
