import React, { useEffect } from "react";
import usePosts from "../hooks/usePosts";
import { getPosts } from "../redux/actions/posts";

export function PostsContextProvider({ children, setIsReady }) {
  const { dispatch } = usePosts();

  const restore = async () => {
    await dispatch(getPosts());
    setIsReady(true);
  };

  useEffect(() => {
    restore();
  }, []);

  return <>{children}</>;
}
