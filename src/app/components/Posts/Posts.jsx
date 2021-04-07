import { Box, Fade, Grid } from "@material-ui/core";
import React from "react";
import usePosts from "../../hooks/usePosts";
import Post from "./Post";

export default function Posts() {
  const { posts } = usePosts();

  return (
    <Box>
      <h1>Posts List</h1>
      <Grid container spacing={2} width="100%">
        {posts.map((post) => {
          return (
            <Fade in key={post.id}>
              <Grid item xs={12} sm={4}>
                <Post key={post.title} post={post} />
              </Grid>
            </Fade>
          );
        })}
      </Grid>
    </Box>
  );
}

Posts.defaultProps = {
  // posts: [],
};
