import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function LogoutScreen() {
  const { logout } = useAuth();
  useEffect(() => {
    console.log("Logout Screen");
    logout();
  }, []);
  return null;
}
