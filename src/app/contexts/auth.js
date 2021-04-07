import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export function AuthContextProvider({ children, setIsReady }) {
  const { restore } = useAuth();

  useEffect(() => {
    restore();
  }, []);

  return <>{children}</>;
}
