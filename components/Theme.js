export const theme = {
  colors: {
    primaryText: "#000000",
    primaryInvertedText: "#fff",
    secondaryText: "#FFFFFF",
    primaryBackground: "#FFFDF6",
    secondaryBackground: "#FEE33A",
    accentBackground: "#6368E5",
    primary: "#FFFDF6",
    secondary: "#FEE33A",
    teritory:"#1D1A26",
    accent: "#6368E5",
  },

  fontSizes: {
    xl: "6rem", //96px
    l: "5rem",  //80px
    m: "3.9rem", //62.4px
    s: "2.8rem", // 44.8px
    xs: "2.1rem", //33.6px
  },

  buttons: {
    primary: {
      color: "#000000",
      backgroundColor: "#FFD338",
      border:'none',
      borderRadius: "5px",
      padding: "11px 36px",
      fontSize: "1.1rem",
      fontWeight: "500",
      letterSpacing: "0.8px",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",

    },
    secondary: {
      color: "#FFFFFF",
      backgroundColor: "#1D1A26",
      border: "none",
      borderRadius: "5px",
      padding: "1rem 1.6rem",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
    },
    teritory: {
      color: "#000",
      textDecoration: "underline",
      backgroundColor: 'none',
      border: "none",
      padding: "1rem 1.6rem",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
    },
    fourth: {
      color: "#fff",
      backgroundColor: 'none',
      border: "2px solid #FFD338",
      padding: "1rem 1.6rem",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
    },
  },

  mobile: {
    fontSize: "0.75rem",
    margin: "4px",
    color: "#000",
  },

  breakpoints: {
    mobile: "768px", // 768px
    tablet: "992px", // 992px
    laptop: "1200px", // 1200px
    desktop: "1400px", // 1400px
    desktopL: "1600px", // 1600px
  }, 
  fontWeights: {
    thin: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    bolder: 800,
    black: 900
  },


  lineHeights: {
    body: 1.5,
    heading: 1.1,
  },

  borders: {
    none: "none",
    thin: "1px solid",
    thick: "3px solid",
  },

  radii: {
    none: 0,
    base: "5px",
    round: "50px",
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
