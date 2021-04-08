import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function Header({ title, subTitle, center }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign={center && "center"}
      mx={center && "auto"}
      p={2}
      maxWidth={640}
    >
      <Typography component="h1" variant="h1">
        {title}
      </Typography>
      <Typography component="p" variant="subtitle1">
        {subTitle}
      </Typography>
    </Box>
  );
}
