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
    xxxxl: "9rem", //114px
    xxxl: "8rem",
    xxl: "7rem", //112px
    xl: "6rem", //96px
    l: "5rem",  //80px
    m: "3.94rem", //63.04px
    s: "2.88rem", // 46.08px
    xs: "2.3rem", //36.8px
    xxs: "1.65rem", //26.4px
    xxxs: "1.069rem", //17.104px
    xxxxs: "0.99rem", //15.84px
    xxxxxs: "0.85rem", //13.6px
    xxxxxxs: "0.75rem", //12px
  },

  buttons: {
    primary: {
      color: "#000000",
      boxSizing:"border-box",
      backgroundColor: "#FFD338",
      display: "inline-block",
      border:'none',
      textDecoration: "none",
      borderRadius: "3px",
      padding: "13.5px 32px",
      fontSize: "1.199rem",
      fontWeight: "500",
      textAlign:"center",
      letterSpacing: "0.8px",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      mediaQuery: {
        tablet: {
          fontSize: "0.999rem",
          padding: "11px 26px",
          fontWeight: "500",
        },
        mobile: {
          fontSize: "0.875rem",
          padding: "8px 22x",
          fontWeight: "500",
        },
      },


    },
    secondary: {
      color: "#FFFFFF",
      boxSizing:"border-box",
      backgroundColor: "#1D1A26",
      display: "inline-block",
      textDecoration: "none",
      border: "none",
      borderRadius: "3px",
      padding: "13.5px 32px",
      fontSize: "1.199rem",
      fontWeight: "500",
      textAlign:"center",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      mediaQuery: {
        tablet: {
          fontSize: "0.999rem",
          padding: "11px 26px",
          fontWeight: "500",
        },
        mobile: {
          fontSize: "0.875rem",
          padding: "8px 22x",
          fontWeight: "500",
        },
      }
    },
    teritary: {
      color: "#000",
      textDecoration: "underline",
      boxSizing:"border-box",
      display: "inline-block",
      backgroundColor: 'transparent',
      border: "none",
      padding: "13.5px 32px",
      fontSize: "1.199rem",
      fontWeight: "500",
      textAlign:"center",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      mediaQuery: {
        tablet: {
          fontSize: "0.999rem",
          padding: "11px 26px",
          fontWeight: "500",
        },
        mobile: {
          fontSize: "0.875rem",
          padding: "8px 22x",
          fontWeight: "500",
        },
      }
    },
    quaternary: {
      color: "#fff",
      backgroundColor: 'transparent',
      display: "inline-block",
      boxSizing:"border-box",
      textDecoration: "none",
      borderRadius: "3px",
      border: "2px solid #FFD338",
      padding: "13.5px 32px",
      fontSize: "1.199rem",
      textAlign:"center",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      mediaQuery: {
        tablet: {
          fontSize: "0.999rem",
          padding: "11px 26px",
          fontWeight: "500",
        },
        mobile: {
          fontSize: "0.875rem",
          padding: "8px 22x",
          fontWeight: "500",
        },
    }
  }
  },

  mobile: {
    fontSize: "0.75rem",
    margin: "4px",
    color: "#000",
  },

  breakpoints: {
    extraSmallMobile:"395px", //395px
    smallestMobile: "530px", //530px
    smallMobile:"662px", //662px
    mobile: "785px", //785px
    smallTablet: "895px", // 895px
    tablet: "1100px", // 1100px
    laptop: "1250px", // 1250px
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

  transition: {
    base: "all 0.2s ease-in-out",
    short: "all 0.1s ease-in-out",
    long: "all 0.3s ease-in-out",
  }
}
