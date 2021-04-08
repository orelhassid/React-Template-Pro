import React from "react";

import UpdateUserForm from "../../components/Forms/UpdateUserForm";
import Header from "../../components/Header/Header";

import Screen from "../../components/Screen/Screen";
import useAuth from "../../hooks/useAuth";

export default function AccountScreen() {
  const { user } = useAuth();

  return (
    <Screen center>
      <Header title={`Welcome ${user.name}`} />

      <UpdateUserForm />
    </Screen>
  );
}
