import React from "react";
import { Grid } from "@material-ui/core";

import TextField from "./fields/TextField";
import SelectField from "./fields/SelectField";
import SwitchField from "./fields/SwitchField";
import FileField from "./fields/FileField";

export default function Fields({ fields, onChange, values, errors }) {
  const renderFields = (field, value, error) => {
    switch (field?.type) {
      case "select":
        return (
          <SelectField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );
      case "switch":
        return (
          <SwitchField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );
      case "file":
        return (
          <FileField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );

      default:
        return (
          <TextField
            field={field}
            onChange={onChange}
            value={value}
            error={error}
          />
        );
    }
  };
  return (
    <>
      <Grid container>
        {fields.map((field) => {
          const value = values[field.name];
          const error = errors[field.name];
          const size = field?.xs || 12;
          return (
            <Grid item xs={size} key={field.name}>
              {renderFields(field, value, error)}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
