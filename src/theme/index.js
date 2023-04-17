export const theme = {
  colors: {
    primary: "#F05B25",
    white: "#ffffff",
    black: "#000000",
    grey: "#4d4d4d",
  },

  fontSizes: {
    title: "5rem" /* 80px */,
    heading: "4rem" /* 64px */,
    "5xl": "2.43rem" /* 39px */,
    "4xl": "2.06rem" /* 33px */,
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
    bold: 700,
    semi_bold: 600,
    normal: 500,
  },

  lineHeights: {
    title: "83px",
    secTitle: "78px",
    quotes: "29px",
    subTitle: "48px",
    "1xl": "20px",
    "2xl": "24px",
    "5xl": "40px",
    base: "33px",
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
        "768px": {
          fontSize: theme.fontSizes["4xl"],
          lineHeight: theme.lineHeights.base,
        },
      },
      subHeading: {
        fontSize: theme.fontSizes["5xl"],
        color: theme.colors.white,
        fontWeight: theme.fontWeights.semi_bold,
        lineHeight: theme.lineHeights.subTitle,
        "768px": {
          fontSize: theme.fontSizes.xl,
          lineHeight: theme.lineHeights["2xl"],
        },
      },
      sectionHeading: {
        fontSize: theme.fontSizes.heading,
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        lineHeight: theme.lineHeights.secTitle,
        "768px": {
          fontSize: theme.fontSizes["4xl"],
          lineHeight: theme.lineHeights["5xl"],
        },
      },
      quotes: {
        fontSize: theme.fontSizes["3xl"],
        color: theme.colors.grey,
        fontWeight: theme.fontWeights.black,
        lineHeight: theme.lineHeights.quotes,
        "768px": {
          fontSize: theme.fontSizes["4xl"],
          lineHeight: theme.lineHeights.base,
        },
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
    },
  };
  return {
    ...value,
    ...variants,
  };
};
