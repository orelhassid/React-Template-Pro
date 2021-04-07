import { useContext } from "react";

import AlertContext from "../contexts/alert";

export const useAlert = () => {
  const { open, setOpen, setAlertSettings, initialAlert } = useContext(
    AlertContext
  );

  const setAlert = ({ message, type, ...rest }) => {
    setAlertSettings((prev) => ({
      ...initialAlert,
      message,
      severity: type,
      ...rest,
    }));
    open ? openTimeout() : setOpen(true);
  };

  const openTimeout = () => {
    setOpen(false);
    setTimeout(() => {
      setOpen(true);
    }, 1000);
  };

  return { open, setOpen, setAlert };
};
export default useAlert;
