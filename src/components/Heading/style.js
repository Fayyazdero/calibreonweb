import styled from "styled-components";

export const StyledHeading = styled.h2(({ variant, theme: { heading } }) => ({
  fontSize: `${heading[variant].fontSize}`,
  color: `${heading[variant].color}`,
  fontWeight: `${heading[variant].fontWeight}`,
  fontFamily: "Montserrat",
  fontStyle: "normal",
  lineHeight: `${heading[variant].lineHeight}`,
  textAlign: `${variant === "quotes" && "center"}`,

  "&.center-text": {
    textAlign: "center",
  },
  "@media screen and (max-width: 768px)": {
    fontSize: `${heading[variant]["768px"].fontSize}`,
    lineHeight: `${heading[variant]["768px"].lineHeight}`,
  },
}));

export const ColouredHeading = styled.span(({ theme: { colors } }) => ({
  color: `${colors.primary}`,
}));

export const SubHeadingWrapper = styled.div`
  width: max-content;
  border-bottom: 3px solid ${({ theme: { colors } }) => colors.primary};
`;
