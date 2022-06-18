export const theme = {
  colors: {
    text: "#333",
    primaryBackground: "#fff",
    secondaryBackground: "#fafafa",
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
      border:'none',
      borderRadius: "0.5rem",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "orange",
        color: "white",
        borderColor: "orange",
      },

    },
    secondary: {
      color: "white",
      backgroundColor: "black",
      border: "none",
      borderRadius: "0.5rem",
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        border: "none",
      },
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

  shadows: {
    none: "none",
    base: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
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
