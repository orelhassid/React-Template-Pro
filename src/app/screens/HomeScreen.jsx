import { Typography } from "@material-ui/core";
import React from "react";
import { SEO, Header } from "../components";
import AuthForm from "../components/Forms/AuthForm";

import Screen from "../components/Screen/Screen";
import useAuth from "../hooks/useAuth";
import usePosts from "../hooks/usePosts";

export default function HomeScreen() {
  const { isReady } = usePosts();
  const { user } = useAuth();

  return (
    <Screen isReady={isReady} center>
      <SEO title="Home" />
      <Header
        title="Build your first website with Notion"
        subTitle="Themes, RTL Support, Domain name and more"
        center
      />
      <Typography>Example Websites</Typography>
      <AuthForm />
    </Screen>
  );
}
