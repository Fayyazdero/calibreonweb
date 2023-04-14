export const theme = {
  colors: {
    primary: "#F05B25",
    white: "#ffffff",
    black: "#000000",
    grey: "#4d4d4d",
    cyan: '#17BEBB'
  },

  fontSizes: {
    title: "5rem" /* 80px */,
    heading: "4rem" /* 64px */,
    "2xl": "5rem" /* 22px */,
    xl: "5rem" /* 20px */,
    lg: "1.125rem" /* 18px */,
    md: "1rem" /* 16px */,
    sm: ".875rem" /* 14px */,
    xs: "0.95rem" /* 15px */,
  },

  fontWeights: {
    black: 900,
    bold: 700,
    semi_bold: 600,
    normal: 400,
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
        fontSize: theme.fontSizes.xl,
        color: theme.colors.black,
        fontWeight: theme.fontWeights.bold,
      },
      subHeading: {
        fontSize: theme.fontSizes.sm,
        color: theme.colors.black,
        fontWeight: theme.fontWeights.semi_bold,
      },
      sectionHeading: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.black,
        fontWeight: theme.fontWeights.semi_bold,
      },
    },
  };
  return {
    ...value,
    ...variants,
  };
};
