import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1440px",
};

const colors = {
  brand: {
    red: "#FC4747",
    darkBlue: "#10141E",
    greyishBlue: "#5A698F",
    semiDarkBlue: "#161D2F",
  },
};

// const textStyles = {
//   h2: {
//     fontSize: { xl: "2rem" },
//     fontWeight: "light",
//     fontFamily: "Outfit",
//     lineHeight: "auto",
//     letterSpacing: { xl: "-0.5px" },
//     paragraphSpacing: { xl: "1px" },
//   },

//   h3: {
//     fontSize: { xl: "1.5rem" },
//     fontWeight: "light",
//     fontFamily: "Outfit",
//     lineHeight: "auto",
//     letterSpacing: { xl: "0px" },
//     paragraphSpacing: { xl: "1px" },
//   },
//   h4: {
//     fontSize: { xl: "1.5rem" },
//     fontWeight: "medium",
//     fontFamily: "Outfit",
//     lineHeight: "auto",
//     letterSpacing: { xl: "0px" },
//     paragraphSpacing: { xl: "1px" },
//   },
//   h5: {
//     fontSize: { xl: "1.125rem" },
//     fontWeight: "medium",
//     fontFamily: "Outfit",
//     lineHeight: "auto",
//     letterSpacing: { xl: "0px" },
//     paragraphSpacing: "1px",
//   },

//   paragraphMedium: {
//     fontSize: { xl: "0.9375rem" },
//     fontWeight: "light",
//     fontFamily: "Outfit",
//     lineHeight: "auto",
//     letterSpacing: { xl: "0px" },
//     paragraphSpacing: "1px",
//   },
//   paragraphSmall: {
//     fontSize: { xl: "0.8125rem" },
//     fontWeight: "light",
//     fontFamily: "Outfit",
//     lineHeight: "auto",
//     letterSpacing: { xl: "0px" },
//     paragraphSpacing: "1px",
//   },
// };

const textStyles = {
  h2: {
    fontSize: "2rem",
    fontWeight: "light",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "-0.5px",
    paragraphSpacing: "1px",
  },

  h3: {
    fontSize: "1.5rem",
    fontWeight: "light",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: "medium",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },
  h5: {
    fontSize: "1.125rem",
    fontWeight: "medium",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },

  paragraphMedium: {
    fontSize: "0.9375rem",
    fontWeight: "light",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },
  paragraphSmall: {
    fontSize: "0.8125rem",
    fontWeight: "light",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },
};

const theme = extendTheme({
  textStyles,
  breakpoints,
  colors,
});

export default theme;
