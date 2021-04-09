import React from "react";
import { useHistory } from "react-router";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import useAuth from "../../hooks/useAuth";
import useDevice from "../../hooks/useDevice";
import { app } from "../../config";
import Drawer from "./Drawer";
import Button from "../Button/Button";
import navigation from "./links";
import useStyles from "./styles";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import NavLinks from "./NavLinks";

export default function Navigation({ back }) {
  const classes = useStyles();
  const history = useHistory();
  const { isMobile } = useDevice();
  const { user, status } = useAuth();

  const links = navigation.getLinks(user, status);

  return (
    <AppBar
      position="static"
      className={classes.root}
      // elevation={0}
    >
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
          className={classes.logoContainer}
        >
          <Box display="flex" alignItems="center">
            <Logo fill="inherit" className={classes.logoIcon} />
            <Typography variant="h6" className={classes.title}>
              {app.name}
            </Typography>
            <Typography
              variant="caption"
              style={{ opacity: 0.8, marginLeft: 5 }}
            >
              {app.version}
            </Typography>
          </Box>
        </Box>
        {isMobile ? (
          <Box>
            {back && (
              <IconButton color="inherit" onClick={() => history.goBack()}>
                <ArrowBackIcon color="inherit" />
              </IconButton>
            )}

            <Drawer />
          </Box>
        ) : (
          <NavLinks links={links} />
        )}
      </Toolbar>
    </AppBar>
  );
}
