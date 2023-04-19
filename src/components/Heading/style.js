import styled from "styled-components";

export const StyledHeading = styled.h2(
  ({ variant, theme: { heading, breakPoints } }) => {
    const xs = breakPoints.xs;
    const fontSize = heading[variant].xs.fontSize;
    const lineHeight = heading[variant][xs]
      ? heading[variant][xs].fontSize
      : heading[variant].fontSize;
    return {
      fontSize: `${heading[variant].fontSize}`,
      color: `${heading[variant].color}`,
      fontWeight: `${heading[variant].fontWeight}`,
      fontFamily: "Montserrat",
      fontStyle: "normal",
      lineHeight: `${heading[variant].lineHeight}`,
      textAlign: `${variant === "quotes" && "center"}`,

      [`@media screen and (max-width: ${xs}px)`]: {
        fontSize,
        lineHeight,
      },
    };
  }
);

export const ColouredHeading = styled.span(({ theme: { colors } }) => ({
  color: colors.primary,
}));

export const SubHeadingWrapper = styled.div(
  ({ theme: { breakPoints, colors } }) => {
    const xs = breakPoints.xs;

    return {
      width: "max-content",
      borderBottom: `3px solid ${colors.primary}`,
      [`@media screen and (max-width: ${xs}px)`]: {
        width: "87px",
        textAlign: "center",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        marginBottom: "9px",
        paddingTop: "46px",
        borderBottom: `1.25px solid ${colors.primary}`,
      },
    };
  }
);
