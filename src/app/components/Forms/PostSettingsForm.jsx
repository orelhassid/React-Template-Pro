import React, { useEffect, useState } from "react";
import Joi from "joi";
import Form from "../FormsParts/Form";
import useAlert from "../../hooks/useAlert";
import usePosts from "../../hooks/usePosts";
import { useParams } from "react-router";

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
  {
    label: "Image",
    placeholder: "Post Body",
    name: "image",
    type: "file",
  },
];

const schema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().optional().allow(""),
});

const options = {
  formTitle: "Settings",
  submitLabel: "Save",
};

export default function PostSettingsForm() {
  const { id } = useParams();
  const { updatePost, currentPost, getPostById } = usePosts(id);
  const [post, setPost] = useState(() => getPostById(id));

  const onSubmit = async (postInfo) => {
    console.log("Form Submit", postInfo);
    await updatePost(postInfo);
    setPost({});
  };
  return (
    <Form
      onSubmit={onSubmit}
      options={options}
      fields={fields}
      schema={schema}
      newData={post}
    />
  );
}
