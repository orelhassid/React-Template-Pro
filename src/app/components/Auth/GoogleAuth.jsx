import React from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../Button/Button";

export default function GoogleAuth() {
  const { authGoogle } = useAuth();
  const handleSubmit = async () => {
    await authGoogle();
  };

  return <Button label="Google Auth" onClick={handleSubmit} />;
}
