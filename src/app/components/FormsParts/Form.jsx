import React, { useEffect, useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import Fields from "./Fields";
import Button from "../Button/Button";
import useStyles from "./style";

export default function Form({
  fields,
  schema,
  onSubmit,
  options,
  newData,
  reset,
  children,
}) {
  const { formTitle, buttons, submitLabel, submitDisabled } = options;

  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const [isReady, setIsReady] = useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    setData(getInitialValues());
    setIsReady(true);
  }, []);

  useEffect(() => {
    reset && setData(getInitialValues());
  }, [reset]);

  const getInitialValues = () => {
    let state = {};
    fields.forEach(({ name, defaultValue }) => {
      if (newData) {
        state[name] = newData[name];
      } else {
        state[name] = defaultValue !== undefined ? defaultValue : "";
      }
    });
    return state;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (!isValid) return;

    setErrors({});
    onSubmit(data);
  };

  const handleChange = ({ target: input }) => {
    setData((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const handleValidation = () => {
    const { error } = schema.validate(data, { abortEarly: false });
    if (!error) return true;

    console.log("📕 Input Validation Error", error);

    let errorsMessages = {};
    error.details.forEach(
      (item) => (errorsMessages[item.path[0]] = item.message)
    );

    setErrors(errorsMessages || {});
    return false;
  };

  return (
    <Box
      className={classes.formContainer}
      mx={options.center ? "auto" : "inherit"}
    >
      {formTitle && (
        <Box pb={2}>
          <Typography variant="h3">{formTitle}</Typography>
        </Box>
      )}

      {isReady && (
        <form onSubmit={handleSubmit}>
          <Fields
            fields={fields}
            onChange={handleChange}
            values={data}
            errors={errors}
          />
          <Box py={2} textAlign="center">
            <Button
              label={submitLabel}
              type="submit"
              variant="contained"
              color="primary"
              textColor="#fff"
              disabled={submitDisabled}
            />
            <Box py={1}>
              {buttons?.map(({ button, ...rest }, index) =>
                button ? (
                  <React.Fragment key={index}>{button}</React.Fragment>
                ) : (
                  <Button key={index} {...rest} />
                )
              )}
            </Box>
            {children}
          </Box>
        </form>
      )}
    </Box>
  );
}

Form.defaultProps = {
  reset: false,
  options: {
    buttons: [],
    submitLabel: "Submit",
    submitDisabled: false,
  },
  fields: [
    {
      label: "Default Field",
      name: "default",
      help: "[ { label, help, placeholder } ]",
      placeholder: "Pass the fields prop to the <Form> Component",
    },
  ],
};
