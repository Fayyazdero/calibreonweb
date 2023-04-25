export const theme = {
  container: {
    width: 1280,
  },
  breakPoints: {
    xs: 768,
    sm: 992,
    md: 1024,
    lg: 1360,
    xl: 1920,
  },
  colors: {
    primary: "#F05B25",
    white: "#ffffff",
    black: "#000000",
    grey: "#4d4d4d",
    deepPurple: "#6622CC",
    cyan: "#17BEBB",
    yellow: "#FBBC05",
    blue: "#0A66C2",
    maroon: "#7D1128",
  },
  fontSizes: {
    title: "5rem" /* 80px */,
    serviceTitle: "4.25rem" /* 68px */,
    heading: "4rem" /* 64px */,
    userTitle: "2.87rem" /* 46px */,
    contactTitle: "3.58rem" /* 57.28px */,
    formTitle: "1.5625rem" /* 25px */,
    "6xl": "2.43rem" /* 39px */,
    "5xl": "2.06rem" /* 33px */,
    "4xl": "2rem" /* 32px */,
    "3xl": "1.18rem" /* 29px */,
    "2xl": "1.37rem" /* 22px */,
    xl: "1.25rem" /* 20px */,
    lg: "1.125rem" /* 18px */,
    md: "1rem" /* 16px */,
    xs: "0.95rem" /* 15px */,
    sm: ".875rem" /* 14px */,
  },
  fontWeights: {
    black: 900,
    bolder: 800,
    bold: 700,
    semi_bold: 600,
    normal: 500,
    regular: 400,
    light: 300,
  },
  lineHeights: {
    title: "83px",
    secTitle: "78px",
    faqTitle: "27px",
    quotes: "29px",
    subTitle: "48px",
    desc: "22px",
    userTitle: "150%",
    mainDesc: "43px",
    tabTypo: "26px",
    "1xl": "20px",
    "2xl": "24px",
    "5xl": "40px",
    base: "33px",
    xm: "18px",
  },
};

export const getTheme = (value) => {
  const theme = { ...value };
  const variants = {
    button: {
      outlined: {
        fontSize: theme.fontSizes.btn,
        background: theme.colors.white,
        color: theme.colors.primary,
        border: theme.colors.primary,
        hover: {
          background: theme.colors.primary,
          color: theme.colors.white,
          border: theme.colors.white,
        },
      },

      contained: {
        fontSize: theme.fontSizes.btn,
        background: theme.colors.primary,
        color: theme.colors.white,
        border: theme.colors.primary,
        hover: {
          background: theme.colors.white,
          color: theme.colors.primary,
          border: theme.colors.primary,
        },
      },
    },

    heading: {
      mainHeading: {
        fontSize: theme.fontSizes.title,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.black,
        lineHeight: theme.lineHeights.title,
        xs: {
          fontSize: theme.fontSizes["5xl"],
          lineHeight: theme.lineHeights.base,
        },
      },

      subHeading: {
        fontSize: theme.fontSizes["6xl"],
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.black,
        lineHeight: theme.lineHeights.subTitle,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.subTitle,
        },
      },
      sectionHeading: {
        fontSize: theme.fontSizes.heading,
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.secTitle,
        xs: {
          fontSize: theme.fontSizes["4xl"],
          lineHeight: theme.lineHeights["6xl"],
        },
      },
      faqHeading: {
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.bolder,
        lineHeight: theme.lineHeights.faqTilte,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      serviceTitle: {
        fontSize: theme.fontSizes.serviceTitle,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bolder,
        lineHeight: theme.lineHeights.title,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights["3xl"],
        },
      },
      contactTitle: {
        fontSize: theme.fontSizes.contactTitle,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.subTitle,
        color: theme.colors.grey,
        xs: {
          fontSize: theme.fontSizes["5xl"],
          lineHeight: theme.lineHeights.subTitle,
        },
      },
      formTitle: {
        fontSize: theme.fontSizes.formTitle,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.subTitle,
        color: theme.colors.white,
        md: {
          fontSize: theme.fontSizes["2xl"],
          lineHeight: theme.lineHeights.subTitle,
        },
      },

      quotes: {
        fontSize: theme.fontSizes["3xl"],
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.black,
        lineHeight: theme.lineHeights.quotes,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      userHeading: {
        fontSize: theme.fontSizes.userTitle,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.userTitle,
        xs: {
          fontSize: theme.fontSizes.userTitle,
          lineHeight: theme.lineHeights.base,
        },
      },
    },

    typo: {
      mainTypo: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.normal,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      subTypo: {
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      descTypo: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.normal,
        lineHeight: theme.lineHeights.desc,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      newDescTypo: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.regular,
        lineHeight: theme.lineHeights.desc,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      userDesc: {
        fontSize: theme.fontSizes.xs,
        color: theme.colors.blue,
        fontWeight: theme.fontWeights.regular,
        lineHeight: theme.lineHeights.desc,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      mainDesc: {
        fontSize: theme.fontSizes["4xl"],
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.semi_bold,
        lineHeight: theme.lineHeights.desc,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      seviceTypo: {
        fontSize: theme.fontSizes.xl,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.light,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      headingTypo: {
        fontSize: theme.fontSizes.xl,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.semi_bold,
        lineHeight: theme.lineHeights.faqTitle,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      subHeadingTypo: {
        fontSize: theme.fontSizes["4xl"],
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.normal,
        lineHeight: theme.lineHeights.mainDesc,
        xs: {
          fontSize: theme.fontSizes["2xl"],
          lineHeight: theme.lineHeights.base,
        },
      },
      highlightedTypo: {
        fontSize: theme.fontSizes["4xl"],
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.normal,
        lineHeight: theme.lineHeights.mainDesc,
        xs: {
          fontSize: theme.fontSizes["2xl"],
          lineHeight: theme.lineHeights.base,
        },
      },
      tabTypo: {
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.grey,
        xs: {
          fontSize: theme.fontSizes["2xl"],
          lineHeight: theme.lineHeights.base,
        },
      },
      mainDescHighlightedTypo: {
        fontSize: theme.fontSizes.userTitle,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.userTitle,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      subDescHighlightedTypo: {
        fontSize: theme.fontSizes.xl,
        fontWeight: theme.fontWeights.semi_bold,
        color: theme.colors.white,
        lineHeight: theme.lineHeights.quotes,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      privacyTypo: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.regular,
        xs: {
          fontSize: theme.fontSizes["2xl"],
          lineHeight: theme.lineHeights.regular,
        },
      },
      subDesTypo: {
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.bold,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      newSubDesTypo: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.bold,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      accountingTypo: {
        fontSize: theme.fontSizes["3xl"],
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bolder,
        lineHeight: theme.lineHeights.xm,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      subAccountingTypo: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.regular,
        lineHeight: theme.lineHeights["2xl"],
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
      newSubAccountingTypo: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.desc,
        xs: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.base,
        },
      },
    },
  };
  return {
    ...value,
    ...variants,
  };
};
