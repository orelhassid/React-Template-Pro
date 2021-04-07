import { Box } from "@material-ui/core";
import React, { useEffect } from "react";

import AppLoading from "../AppLoading/AppLoading";
import Navigation from "../Navigation/Navigation";

export default function Screen({ isReady, center, children }) {
  return (
    <Box>
      <Navigation />
      <Box
        component="main"
        display="flex"
        justifyContent={center ? "center" : "flex-start"}
        // textAlign={center ? "center" : "left"}
        flexDirection="column"
      >
        {isReady ? children : <AppLoading />}
      </Box>
    </Box>
  );
}
