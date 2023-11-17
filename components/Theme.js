export const theme = {
  colors: {
    primaryText: "#000000",
    primaryInvertedText: "#fff",
    secondaryText: "#FFFFFF",
    primaryBackground: "#5928e5",
    secondaryBackground: "#fcef6d",
    accentBackground: "#6368E5",
    primary: "#FFFDF6",
    secondary: "#FEE33A",
    teritory:"#1D1A26",
    accent: "#6368E5",
  },

  fontSizes: {
    xxxxxxxl:"18.75rem",//300px
    xxxxxxl:"12.5rem",//200px
    xxxxxl:"9.375rem",//150px
    xxxxl: "9rem", //114px
    xxxl: "8rem",
    xxl: "7rem", //112px
    xl: "6rem", //96px
    l: "5rem",  //80px
    m: "3.94rem", //63.04px
    ms: "3.1rem",//49px
    s: "2.88rem", // 46.08px
    xs: "2.3rem", //36.8px
    xxs: "1.75rem", //28px
    xxxs: "1.069rem", //17.104px
    xxxxs: "0.99rem", //15.84px
    xxxxxs: "0.85rem", //13.6px
    xxxxxxs: "0.75rem", //12px
  },
  width: [
    "10%",//[0]
    "20%",//[1]
    "30%",//[2]
    "40%",//[3]
    "50%",//[4]
    "60%",//[5]
    "70%",//[6]
    "80%",//[7]
    "90%",//[8]
    "95%",//[9]
    "100%",//[10]
  ],
  height:[
    "10vh",//[0]
    "20vh",//[1]
    "30vh",//[2]
    "40vh",//[3]
    "50vh",//[4]
    "60vh",//[5]
    "70vh",//[6]
    "80vh",//[7]
    "90vh",//[8]
    "100vh",//[9]
  ],
  buttons: {
    primary: {
      color: "#1D1A26",
      width: "fit-content",
      boxSizing:"border-box",
      backgroundColor: "#FFD338",
      display: "inline-block",
      border:'none',
      textDecoration: "none",
      borderRadius: "10px",
      padding: "16px 62px",
      fontSize: "22px",
      fontWeight: "600",
      textAlign:"center",
      fontFamily: '\"Plus Jakarta Sans\", sans-serif',
      letterSpacing: "0.8px",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      mediaQuery: {
        tablet: {
          fontSize: "0.999rem",
          padding: "11px 26px",
          fontWeight: "600",
        },
        mobile: {
          fontSize: "0.875rem",
          padding: "8px 22x",
          fontWeight: "600",
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
      padding: "13.5px 50px",
      fontSize: "1.199rem",
      fontWeight: "600",
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
      color: "#000",
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
    "1.5rem",// 24px [9]
    "3rem",// 48px[10]
    "5rem",//75px[11]
    "18.75rem",//300px[12]
    "9.375rem",//150px[13]
    "12.5rem",//200px[14]
    "6.25rem",//100px[15]

  ],

  transition: {
    base: "all 0.2s ease-in-out",
    short: "all 0.1s ease-in-out",
    long: "all 0.3s ease-in-out",
  }
}
