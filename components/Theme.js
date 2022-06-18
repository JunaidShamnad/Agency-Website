import styled from "styled-components";

export const theme = {

  colors: {
    text: "#333",
    background: "#fff",
    primary: "#783396",
    secondary: "#767676",
    accent: "#d396c3",
    muted: "#efefef",
  },

  fontSizes: {
    xl: "4rem",
    l: "2rem",
    m: "1rem",
    s: "0.9rem",
    xs: "0.75rem",
  },

  buttons: {
    primary: {
      color: "white",
      backgroundColor: "orange",
    },
    secondary: {
      color: "white",
      backgroundColor: "black",
    },
  },

  mobile: {
    fontSize: 12,
    margin: "4px",
    color: "red",
  },

  breakpoints: {
    mobile: "768px", // 768px
    tablet: "992px", // 992px
    laptop: "1200px", // 1200px
    desktop: "1400px", // 1400px
    desktopL: "1600px", // 1600px
  },

  fontWeights: {
    light: 200,
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },
  borders: {
    none: "none",
    thin: "1px solid",
  },

  radii: {
    none: 0,
    base: "0.25em",
    round: "99999em",
  },
  
  space: [
    0, // [0]
    "0.125rem", // 2px [1]
    "0.25rem", // 4px [2]
    "0.5rem", // 8px [3]
    "1rem", // 16px [4]
    "2rem", // 32px [5]
    "4rem", // 64px [6]
    "8rem", // 128px [7]
    "16rem", // 256px [8]
  ],
};
