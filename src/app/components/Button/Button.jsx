import React from "react";
import { Button as MUIButton, makeStyles } from "@material-ui/core";

import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  containedPrimary: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
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
