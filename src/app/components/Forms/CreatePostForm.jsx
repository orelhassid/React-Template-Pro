import React, { useState } from "react";
import Joi from "joi";
import Form from "../FormsParts/Form";
import useAlert from "../../hooks/useAlert";
import usePosts from "../../hooks/usePosts";

const fields = [
  {
    label: "Title",
    placeholder: "Post Title",
    name: "title",
  },
  {
    label: "Body",
    placeholder: "Post Body",
    name: "body",
  },
];

const schema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().optional().allow(""),
});

const options = {
  formTitle: "CreatePostForm",
  submitLabel: "Create",
  center: true,
};

export default function CreatePostForm() {
  const { createPost } = usePosts();
  const [clear, setClear] = useState(false);
  const onSubmit = async (postInfo) => {
    await createPost(postInfo);
    setClear(true);
  };
  return (
    <Form
      onSubmit={onSubmit}
      options={options}
      fields={fields}
      schema={schema}
      reset={clear}
    />
  );
}
