import { Box, Fade, Grid, Typography } from "@material-ui/core";
import React from "react";
import usePosts from "../../hooks/usePosts";
import Post from "./Post";

export default function Posts() {
  const { posts } = usePosts();

  return (
    <Box>
      <Typography variant="h2">Posts List</Typography>
      <Grid container spacing={2} width="100%">
        {posts.map((post) => {
          return (
            <Fade in key={post.id}>
              <Grid item xs={12} sm={3}>
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
