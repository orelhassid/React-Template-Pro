import React from "react";
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
};

export default function CreatePostForm() {
  const { setAlert } = useAlert();
  const { createPost } = usePosts();
  const onSubmit = async (postInfo) => {
    console.log("Form Submit", postInfo);
    await createPost(postInfo);
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
