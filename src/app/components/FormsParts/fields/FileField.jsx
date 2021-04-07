import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Button from "../../Button/Button";
import FieldWrapper from "../FieldWrapper";
import FileBase from "react-file-base64";

// import { useDropzone } from "react-dropzone";
const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    "& input": {
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      height: 0,
      width: 0,
    },
  },
  imageContainer: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left",
  },
}));

export default function FileField(props) {
  const { field, value, onChange, error } = props;
  const { label, name, multiline, labelSub, className, ...rest } = field;

  const classes = useStyles();
  const handleChange = (base64) => {
    onChange({ target: { name, value: base64 } });
  };

  return (
    <FieldWrapper field={field} error={error} hideLabel>
      <Box className={classes.container}>
        <Button variant="outlined" component="label">
          {label}
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => handleChange(base64)}
          ></FileBase>
        </Button>
      </Box>
      {value && (
        <Box
          className={classes.imageContainer}
          my={1}
          style={{
            backgroundImage: `url(${value})`,

            height: 200,
          }}
        ></Box>
      )}
    </FieldWrapper>
  );
}
// <MUITextField></MUITextField>
// <Input field={field} onChange={onChange} value={value}></Input>
// <Box>
//   <Button variant="text" component="label">
//     Upload File
//     <input type="file" hidden onChange={onChange} value={value} />
//   </Button>
// </Box>
