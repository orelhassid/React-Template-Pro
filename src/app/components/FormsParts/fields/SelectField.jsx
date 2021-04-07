import { fade, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";

import FieldWrapper from "../FieldWrapper";
import { CustomInput } from "../Input";

const useStyles = makeStyles((theme) => ({
  input: {
    padding: "10px 12px",
    borderRadius: 4,
    width: "100%",
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background[1],
    transition: theme.transitions.create(["border-color", "box-shadow"]),

    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function SelectField({ onChange, value, field, ...rest }) {
  const classes = useStyles();
  return (
    <FieldWrapper field={field} {...rest}>
      <Select
        disableUnderline
        labelId={field.name}
        id={field.name}
        name={field.name}
        value={value}
        onChange={onChange}
        classes={{
          root: classes.input,
        }}
      >
        {/* <MenuItem value={""}>{field.placeholder || "Select"}</MenuItem> */}
        {field.options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FieldWrapper>
  );
}
