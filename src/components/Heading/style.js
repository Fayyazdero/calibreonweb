import styled from "styled-components";

export const StyledHeading = styled.h2(
  ({ variant, theme: { heading, breakPoints } }) => {
    const sm = breakPoints.sm;
    const fontSize = heading[variant]["xs"]
      ? heading[variant]["xs"].fontSize
      : heading[variant].fontSize;
    const lineHeight = heading[variant]["xs"]
      ? heading[variant]["xs"].lineHeight
      : heading[variant].lineHeight;

    return {
      fontSize: `${heading[variant].fontSize}`,
      color: `${heading[variant].color}`,
      fontWeight: `${heading[variant].fontWeight}`,
      fontFamily: "Montserrat",
      fontStyle: "normal",
      lineHeight: `${heading[variant].lineHeight}`,
      textAlign: `${variant === "quotes" && "center"}`,

      [`@media screen and (max-width: ${sm}px)`]: {
        fontSize,
        lineHeight,
      },
    };
  }
);

export const ColouredHeading = styled.span(({ color, theme: { colors } }) => ({
  fontFamily: 'Montserrat',
  color: `${color ? color : colors.primary}`,
}));

export const SubHeadingWrapper = styled.div(
  ({ variant, theme: { breakPoints, colors, heading } }) => {
    const sm = breakPoints.sm;
    const fontSize = heading[variant]["xs"]
      ? heading[variant]["xs"].fontSize
      : heading[variant].fontSize;

    const lineHeight = heading[variant]["xs"]
      ? heading[variant]["xs"].lineHeight
      : heading[variant].lineHeight;

    return {
      fontSize: `${heading[variant].fontSize}`,
      fontWeight: `${heading[variant].fontWeight}`,
      lineHeight: `${heading[variant].lineHeight}`,
      width: "max-content",
      borderBottom: `3px solid ${colors.primary}`,
      [`@media screen and (max-width: ${sm}px)`]: {
        width: "max-content",
        textAlign: "center",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        marginBottom: "9px",
        borderBottom: `3px solid ${colors.primary}`,
        fontWeight: "900",
        fontSize,
        lineHeight,
      },
    };
  }
);
