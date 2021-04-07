import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@material-ui/core";

import FieldWrapper from "../FieldWrapper";

export default function SwitchField({ onChange, value, field, ...rest }) {
  const handleChange = ({ target }) => {
    onChange({ target: { name: target.name, value: target.checked } });
  };
  return (
    <FieldWrapper field={field} {...rest} disableLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={value}
              onChange={handleChange}
              name={field.name}
              color="primary"
            />
          }
          label={field.label}
        />
      </FormGroup>
    </FieldWrapper>
  );
}
