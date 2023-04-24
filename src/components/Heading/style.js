import styled from "styled-components";

export const StyledHeading = styled.h2(
  ({ variant, theme: { heading, breakPoints } }) => {
    const sm = breakPoints.sm;
    const fontSize = heading[variant]["xs"]
      ? heading[variant]["xs"].fontSize
      : heading[variant].fontSize;
    const lineHeight = heading[variant]["xs"]
      ? heading[variant]["xs"].fontSize
      : heading[variant].fontSize;

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
        textAlign: `${variant === "mainHeading" && "center"}`,
      },
    };
  }
);

export const ColouredHeading = styled.span(({ theme: { colors } }) => ({
  color: colors.primary,
}));

export const SubHeadingWrapper = styled.div`
  margin: auto;
  width: max-content;
  margin-bottom: 10px;
  font-weight: 900;
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.primary};
`;
