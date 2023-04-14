import styled from "styled-components";

export const StyledHeading = styled.h2(({ variant, theme: { heading } }) => ({
  fontSize: `${heading[variant].fontSize}`,
  color: `${heading[variant].color}`,
  fontWeight: `${heading[variant].fontWeight}`,
  fontFamily: "Montserrat",
  fontStyle: "normal",
  lineHeight: `${heading[variant].lineHeight}`,
  borderBottom: `3px solid ${heading[variant].borderBottom}`,
}));

// export const StyledHeading = styled.h2`
//   ${({ theme, variant }) => console.log(theme, variant, "vr")}
// `;
export const ColouredHeading = styled.span(({ theme: { colors } }) => ({
  color: `${colors.primary}`,
}));
