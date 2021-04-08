import React from "react";
import Joi from "joi";

import Form from "../FormsParts/Form";
import useAuth from "../../hooks/useAuth";

const fields = [
  {
    label: "Name",
    placeholder: "Your Name",
    name: "name",
  },
  {
    label: "Email",
    placeholder: "Your Email Address",
    name: "email",
  },
];

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
});

const options = {
  formTitle: "Account Settings",
  submitLabel: "Save",
};

export default function UpdateUserForm() {
  const authHook = useAuth();

  const onSubmit = async (userInfo) => {
    await authHook.update(userInfo);
  };
  return (
    <Form
      onSubmit={onSubmit}
      options={options}
      fields={fields}
      schema={schema}
      newData={authHook.user}
    />
  );
}
