// import client from "./client";
import firebase from "../firebase/firebase";

// const getPosts = () => client.get("/posts");

const getPosts = async () => {
  let posts = [];
  await firebase
    .firestore()
    .collection("posts")
    .get()
    .then((data) => {
      data.forEach((doc) => posts.push({ ...doc.data(), id: doc.id }));
    })
    .catch(console.error);

  return {
    data: posts,
  };
};
const createPost = async (postInfo) => {
  await firebase
    .firestore()
    .collection("posts")
    .doc()
    .set(postInfo)
    .then((data) => {
      // console.log("Create Post API", data);
    });
  return {
    data: postInfo,
  };
};
const savePost = async (postInfo) => {
  await firebase.firestore().collection("posts").doc(postInfo.id).set(postInfo);
  return {
    data: postInfo,
  };
};

const deletePost = async (postInfo) => {
  await firebase.firestore().collection("posts").doc(postInfo.id).delete();
  return {
    data: postInfo,
  };
};

export default {
  getPosts,
  createPost,
  savePost,
  deletePost,
};
