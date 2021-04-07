import React from "react";
import Joi from "joi";
import Form from "../FormsParts/Form";
import useAlert from "../../hooks/useAlert";
import postsApi from "../../api/posts";

const fields = [
  {
    label: "Name",
    placeholder: "Post Name",
    name: "name",
  },
];

const schema = Joi.object({
  name: Joi.string().required(),
});

const options = {
  formTitle: "CreatePostForm",
  submitLabel: "Create",
};

export default function FormTemplate() {
  const { setAlert } = useAlert();
  const onSubmit = async (postInfo) => {
    console.log("Form Submit", postInfo);
    await postsApi.createPost(postInfo);
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
