import {
  Box,
  CircularProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(
  () => ({
    container: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }),
  []
);
export default function AppLoading() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Box>
  );
}
