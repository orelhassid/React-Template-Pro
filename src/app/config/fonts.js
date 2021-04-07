// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';
// import Asap from "../assets/fonts/Asap-Regular.ttf";
import FontRegular from "../assets/fonts/montserrat/Montserrat-Regular.ttf";
import FontBody from "../assets/fonts/asap/Asap-Regular.ttf";

export const fontName = "custom-font";
export const fontBodyName = "custom-body-font";

export const font = {
  fontFamily: fontName,
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local(${fontName}),
    local('${fontName}-Regular'),
    url(${FontRegular}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const fontBody = {
  fontFamily: fontBodyName,
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local(${fontBodyName}),
    local('${fontBodyName}-Regular'),
    url(${FontBody}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};
