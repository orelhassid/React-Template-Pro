import React from "react";
import Joi from "joi";
import Form from "../FormsParts/Form";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";

const fields = [
  {
    label: "Email",
    placeholder: "example@domain.com",
    name: "email",
    type: "email",
  },
  {
    label: "Password",
    placeholder: "i.e 1234 just kidding, choose a strong password",
    name: "password",
    type: "password",
  },
];

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const options = {
  formTitle: "Register",
  submitLabel: "Register",
};

export default function CreateUserForm() {
  const { setAlert } = useAlert();
  const authHook = useAuth();
  const onSubmit = async (userInfo) => {
    console.log("Form Submit", userInfo);
    await authHook.register(userInfo);
    setAlert({
      message: "Submit!",
    });
  };
  return (
    <Form
      onSubmit={onSubmit}
      options={options}
      fields={fields}
      schema={schema}
    />
  );
}
