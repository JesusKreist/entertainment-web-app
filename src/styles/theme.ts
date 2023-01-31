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
  headingL: {
    "font-size": { base: "1.25rem", md: "2rem", lg: "2.5vw" },

    fontWeight: "light",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: { base: "-0.31px", md: "-0.5px" },
    paragraphSpacing: "1px",
  },

  headingM: {
    "font-size": { base: "1rem", md: "1.5rem", xl: "2vw" },
    fontWeight: "light",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },
  headingS: {
    "font-size": { base: "0.9375rem", md: "1.5rem", lg: "1.5rem", xl: "1.4vw" },

    fontWeight: "medium",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },
  headingXS: {
    // "font-size": "1.125rem",
    "font-size": { base: "0.875rem", md: "1.125rem", xl: "5vw" },
    fontWeight: "medium",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },

  paragraphMedium: {
    "font-size": { base: "0.75rem", md: "0.9375rem", "2xl": "0.9vw" },
    fontWeight: "light",
    fontFamily: "Outfit",
    lineHeight: "auto",
    letterSpacing: "0px",
    paragraphSpacing: "1px",
  },
  paragraphSmall: {
    // "font-size": "0.8125rem",
    "font-size": { base: "0.6875rem", md: "0.8125rem", "2xl": "9vw" },
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
