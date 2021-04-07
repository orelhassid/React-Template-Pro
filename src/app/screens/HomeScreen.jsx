import React from "react";
import AuthForm from "../components/Forms/AuthForm";
import CreateUserForm from "../components/Forms/CreateUserForm";
import Header from "../components/Header/Header";

import Screen from "../components/Screen/Screen";
import useAuth from "../hooks/useAuth";
import usePosts from "../hooks/usePosts";

export default function HomeScreen() {
  const { isReady } = usePosts();
  const { user } = useAuth();

  return (
    <Screen isReady={isReady} center>
      <Header title="Home Screen" subTitle={`Hi ${user.email}`} />
      <AuthForm />
      <CreateUserForm />
    </Screen>
  );
}
