export const theme = {
  colors: {
    primary: "#F05B25",
    white: "#ffffff",
    black: "#000000",
    grey: "#4d4d4d",
  },

  fontSizes: {
    title: "5rem" /* 80px */,
    serviceTitle: "4.25rem", //68px
    heading: "4rem" /* 64px */,
    pageHeading: "2.4375rem ", //39px
    "4xl": "2.43rem" /* 39px */,
    "3xl": "1.18rem" /* 29px *
    "2xl": "1.37rem" /* 22px */,
    xl: "1.25rem" /* 20px */,
    lg: "1.125rem" /* 18px */,
    md: "1rem" /* 16px */,
    sm: ".875rem" /* 14px */,
    xs: "0.95rem" /* 15px */,
  },

  fontWeights: {
    black: 900,
    bolder: 800,
    bold: 700,
    semi_bold: 600,
    normal: 500,
    light: 300,
  },

  lineHeights: {
    title: "83px",
    secTitle: "78px",
    quotes: "29px",
    subTitle: "48px",
  },
  border: {
    borderBottom: "3px solid #F05B25",
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
          border: theme.colors.primary,
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
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.title,
      },
      pageHeading: {
        fontSize: theme.fontSizes.pageHeading,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.black,
        lineHeight: theme.lineHeights.subTitle,
        borderBottom: theme.border.borderBottom,
      },
      subHeading: {
        fontSize: theme.fontSizes["4xl"],
        color: theme.colors.white,
        fontWeight: theme.fontWeights.semi_bold,
        lineHeight: theme.lineHeights.subTitle,
      },
      sectionHeading: {
        fontSize: theme.fontSizes.heading,
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.secTitle,
      },
      serviceTitle: {
        fontSize: theme.fontSizes.serviceTitle,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bolder,
        lineHeight: theme.lineHeights.title,
      },
      quotes: {
        fontSize: theme.fontSizes["3xl"],
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.black,
        lineHeight: theme.lineHeights.quotes,
      },
    },

    typo: {
      mainTypo: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.normal,
      },

      subTypo: {
        fontSize: theme.fontSizes["2xl"],
        color: theme.colors.white,
        fontWeight: theme.fontWeights.bold,
      },
      seviceTypo: {
        fontSize: theme.fontSizes.xl,
        color: theme.colors.white,
        fontWeight: theme.fontWeights.light,
      },
    },
  };
  return {
    ...value,
    ...variants,
  };
};
