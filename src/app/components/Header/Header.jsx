import { Box, Typography } from "@material-ui/core";
import React from "react";

export default function Header({ title, subTitle }) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography component="h1" variant="h1">
        {title}
      </Typography>
      <Typography component="p" variant="subtitle1">
        {subTitle}
      </Typography>
    </Box>
  );
}
