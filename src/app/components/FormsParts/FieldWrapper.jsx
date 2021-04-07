import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { Box, FormControl, FormHelperText } from "@material-ui/core";
import useStyles from "./style";

export default function FieldWrapper({ field, children, error, disableLabel }) {
  const { label, name, help, labelId, type } = field;

  const classes = useStyles();

  const isSelect = type === "select";

  return (
    <FormControl fullWidth error={!!error}>
      {!disableLabel && (
        <InputLabel
          shrink
          htmlFor={isSelect ? "" : name}
          id={isSelect ? name : ""}
          classes={{
            focused: classes.labelFocused,
          }}
        >
          {label}
        </InputLabel>
      )}
      <Box py={3} width="100%">
        {children}
      </Box>
      <FormHelperText id="my-helper-text">{error || help}</FormHelperText>
      {/* <InputAdornment /> */}
    </FormControl>
  );
}

FieldWrapper.defaultProps = {
  field: {},
};
