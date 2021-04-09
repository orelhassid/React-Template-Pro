import React from "react";
import { Box, Button as MUIButton, makeStyles } from "@material-ui/core";

// import { NavLink as RouterLink } from "react-router-dom";
import { NavLink as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    "&.active": {
      color: "red !important",
    },
  },
  containedPrimary: {
    color: "white",
  },
  label: {
    textTransform: "capitalize",
  },
  navLink: {
    color: "white",
  },
  navLinkActive: {
    color: "red",
  },
});

function ButtonLink({
  label,
  to,
  color,
  variant,
  textColor,
  Icon,
  children,
  ...rest
}) {
  const { navLink, navLinkActive } = useStyles();
  const location = useLocation();
  console.log({
    location: location.pathname.split("/")[1],
    to,
  });

  const isActive = location.pathname.split("/")[1] === to;
  const boxClassname = isActive ? navLinkActive : navLink;
  return (
    <MUIButton
      // color={color}
      variant={variant}
      startIcon={Icon || null}
      component={to ? RouterLink : "button"}
      to={to}
      {...rest}
      className={boxClassname}
      // classes={classes}
      // style={{
      //   color: textColor,
      // }}
    >
      {children || label}
    </MUIButton>
  );
}

export default ButtonLink;
// <MUIButton
//   startIcon={Icon || null}
//   component={to ? RouterLink : "button"}
//   to={to}
//   {...rest}
//   classes={classes}
// >
//   {children || label}
// </MUIButton>
