import React, { createContext } from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const AlertContext = createContext();

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const initialAlert = {
  severity: "success",
  message: "This is a success message!",
  anchorOrigin: { vertical: "bottom", horizontal: "center" },
  autoHideDuration: 6000,
  button: {},
};

export const AlertContextProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const [alertSettings, setAlertSettings] = React.useState(initialAlert);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleButton = (event, reason) => {
    handleClose(event, reason);
    button.onClick();
  };

  const {
    autoHideDuration,
    anchorOrigin,
    severity,
    message,
    button,
  } = alertSettings;

  return (
    <AlertContext.Provider
      value={{ open, setOpen, setAlertSettings, initialAlert }}
    >
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={autoHideDuration}
        anchorOrigin={anchorOrigin}
        message={message}
        action={
          <React.Fragment>
            {button.label && (
              <Button color="secondary" size="small" onClick={handleButton}>
                {button.label}
              </Button>
            )}

            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
