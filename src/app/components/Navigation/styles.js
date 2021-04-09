import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // App Bar
  appBar: {
    // flexGrow: 1,
    color: "#fff",
    fill: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoContainer: {
    color: "inherit",
    fill: "inherit",
  },
  logoIcon: {
    marginRight: theme.spacing(1),
    maxWidth: 34,
    height: "inherit",
  },

  // Drawer
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    "& > span": {
      color: "#fff",
    },
  },

  // NavBar
  linkItem: {
    // color: "red",
  },
  linkItemFocused: {},
}));
export default useStyles;
