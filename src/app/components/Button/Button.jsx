import React from "react";
import { Button as MUIButton, makeStyles } from "@material-ui/core";

import { NavLink as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  containedPrimary: {
    color: "white",
  },
  label: {
    textTransform: "capitalize",
  },
});

export default function Button({
  label,
  to,
  color,
  variant,
  textColor,
  Icon,
  children,
  ...rest
}) {
  const classes = useStyles();

  return (
    <MUIButton
      color={color}
      variant={variant}
      startIcon={Icon || null}
      component={to ? RouterLink : "button"}
      to={to}
      {...rest}
      classes={classes}
      style={{
        color: textColor,
      }}
    >
      {children || label}
    </MUIButton>
  );
}
Button.defaultProps = {
  color: "primary",
  label: "BUTTON",
  variant: "contained",
};
