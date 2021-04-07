import { useMediaQuery } from "@material-ui/core";

const useDevice = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return {
    isMobile,
  };
};

export default useDevice;
