export const theme = {
  colors: {
    primary: "#F05B25",
    white: "#ffffff",
    black: "#000000",
    grey: "#4d4d4d",
  },

  fontSizes: {
    xl: "5rem" /* 80px */,
    lg: "4rem" /* 64px */,
    md: "2.87rem" /* 46px */,
    sm: "2.43rem" /* 39px */,
    btn: "0.95rem" /* 15px */,
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
      },
      subHeading: {
        fontSize: theme.fontSizes.sm,
        color: theme.colors.black,
      },
      sectionHeading: {
        fontSize: theme.fontSizes.lg,
        color: theme.colors.black,
      },
    },
  };
  return {
    ...value,
    ...variants,
  };
};
