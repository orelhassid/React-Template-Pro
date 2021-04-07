import React from "react";

import CreatePostForm from "../../components/Forms/CreatePostForm";
import Header from "../../components/Header/Header";

import Posts from "../../components/Posts/Posts";
import Screen from "../../components/Screen/Screen";
import usePosts from "../../hooks/usePosts";

export default function PostsScreen() {
  const { posts, isReady } = usePosts();

  return (
    <Screen isReady={isReady} center>
      <Header title="Home Screen" />

      <CreatePostForm />
      <Posts posts={posts} />
    </Screen>
  );
}
