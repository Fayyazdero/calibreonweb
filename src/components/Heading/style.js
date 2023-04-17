import styled from "styled-components";

export const StyledHeading = styled.h2(({ variant, theme: { heading } }) => ({
  fontSize: `${heading[variant].fontSize}`,
  color: `${heading[variant].color}`,
  fontWeight: `${heading[variant].fontWeight}`,
  fontFamily: "Montserrat",
  fontStyle: "normal",
  lineHeight: `${heading[variant].lineHeight}`,
  borderBottom: `3px solid ${heading[variant].borderBottom}`,
  textAlign: `${variant === "quotes" && "center"}`,
}));

export const ColouredHeading = styled.span(({ theme: { colors } }) => ({
  color: `${colors.primary}`,
}));

export const SubHeadingWrapper = styled.div`
  width: max-content;
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.primary};
`;
