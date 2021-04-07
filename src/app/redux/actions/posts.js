import postsApi from "../../api/posts";
import { postsTypes } from "../types";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await postsApi.getPosts();
    return dispatch({ type: postsTypes.fetch, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = (postInfo) => async (dispatch) => {
  try {
    const { data } = await postsApi.createPost(postInfo);
    return dispatch({ type: postsTypes.create, payload: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const updatePost = (postInfo) => async (dispatch) => {
  console.log("Actions: updatePost", postInfo);

  try {
    const { data } = await postsApi.savePost(postInfo);
    dispatch({ type: postsTypes.update, payload: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePost = (postInfo) => async (dispatch) => {
  console.log("Actions: deletePost", postInfo);

  try {
    const { data } = await postsApi.deletePost(postInfo);
    dispatch({ type: postsTypes.delete, payload: data });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
