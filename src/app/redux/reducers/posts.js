import { postsTypes } from "../types";
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const posts = (posts = initialState, action) => {
  // console.log("Posts Reducer", { posts, action });
  switch (action.type) {
    case postsTypes.fetch:
      return {
        posts: action.payload,
        status: "ready",
      };

    case postsTypes.create:
    case postsTypes.update:
      return {
        posts: [...posts.posts, action.payload],
        status: "ready",
      };
    case postsTypes.delete:
      return {
        posts: posts.posts.filter((post) => post.id !== action.payload.id),
        status: "ready",
      };

    default:
      return posts;
  }
};

export default posts;

// return {
//   posts: action.payload.map((post) => ({
//     ...post,
//     slug: makeSlug(post.title),
//   })),
//   status: "ready",
// };
