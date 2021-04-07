import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postsActions from "../redux/actions/posts";
import useAlert from "./useAlert";

const usePosts = (postId) => {
  const posts = useSelector((store) => store.posts);
  const [currentPost, setCurrentPost] = useState({});
  const { setAlert } = useAlert();

  const dispatch = useDispatch();

  const isReady = posts.status === "ready";

  useEffect(() => {
    if (!isReady) return;
    setCurrentPost(posts.posts.find((post) => post.id === postId));
  }, [postId, posts]);

  const getPostById = (id) => {
    return posts.posts.find((post) => post.id === id);
  };

  const updatePost = async (postInfo) => {
    try {
      await dispatch(postsActions.updatePost(postInfo));
      setAlert({
        message: "Submit!",
      });
    } catch (error) {
      console.error(error);
    }
  };
  const createPost = async (postInfo) => {
    await dispatch(postsActions.createPost(postInfo));

    // try {
    //   dispatch(createPost)
    //   await postsApi.createPost(postInfo);
    // } catch (error) {

    // }
  };
  const deletePost = async (postInfo) => {
    try {
      await dispatch(postsActions.deletePost(postInfo));
      setAlert({
        message: `Delete ${postInfo.title} Successfuly`,
      });
    } catch (error) {
      setAlert({
        message: `Delete failed.`,
      });
    }
  };

  return {
    posts: posts.posts,
    isReady,
    currentPost,
    dispatch,
    createPost,
    updatePost,
    getPostById,
    deletePost,
    // restore,
  };
};
export default usePosts;
