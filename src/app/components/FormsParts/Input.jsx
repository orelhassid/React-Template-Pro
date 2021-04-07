import { fade, withStyles } from "@material-ui/core";
import React from "react";
import InputBase from "@material-ui/core/InputBase";

import InputAdornment from "@material-ui/core/InputAdornment";
import FieldWrapper from "./FieldWrapper";

export const CustomInput = withStyles((theme) => ({
  root: {
    width: "100%",
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background[1],
    // border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function Input({ field, value, onChange, error }) {
  const { name, type, placeholder, multiline } = field;
  return (
    <CustomInput
      placeholder={placeholder}
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      multiline={multiline}
    />
  );
}
