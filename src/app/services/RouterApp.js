import React from "react";
import { Route, Switch } from "react-router";
import { POST_RT, POSTS_RT } from "../config/routes";
import HomeScreen from "../screens/HomeScreen";
import PostSettingsScreen from "../screens/PostSettingsScreen";
import PostsScreen from "../screens/posts/PostsScreen";

export default function RouterApp() {
  return (
    <Switch>
      <Route path={POSTS_RT} component={PostsScreen} />
      <Route path={POST_RT} component={PostSettingsScreen} />
      <Route path="/" component={HomeScreen} />
    </Switch>
  );
}
