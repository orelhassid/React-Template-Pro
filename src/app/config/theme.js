import { createMuiTheme } from "@material-ui/core/styles";
import { font, fontBody, fontBodyName, fontName } from "./fonts";

const FONTS = [
  fontName,
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const theme = createMuiTheme({
  typography: {
    fontFamily: FONTS.join(","),

    h1: {
      fontSize: "2.8rem",
      fontWeight: 600,
      fontFamily: fontBodyName,
    },
    h2: {
      fontSize: "1.7rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      lineHeight: "23px",
      letterSpacing: "0.15px",
    },
    body2: {
      textTransform: "capitalize",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "16px",
      letterSpacing: "0.75px",
      textAlign: "left",
    },
  },
  palette: {
    text: {
      primary: "#3F3F3F",
      secondary: "#848484",
    },
    primary: {
      main: "#334E5C",
    },
    secondary: {
      main: "#FCD462",
    },
    background: {
      default: "#fff",
      1: "#FBFBFB",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root": {
          height: "100%",
        },
        "@font-face": [font],
        "@font-face": [fontBody],
      },
    },
  },
});
export default theme;
