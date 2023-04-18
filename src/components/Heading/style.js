import styled from "styled-components";

export const StyledHeading = styled.h2(
  ({ variant, theme: { heading, breakPoints } }) => {
    const xs = breakPoints.xs;
    const fontSize = heading[variant][xs]
      ? heading[variant][xs].fontSize
      : heading[variant].fontSize;
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

export const SubHeadingWrapper = styled.div`
  width: max-content;
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.primary};
`;
