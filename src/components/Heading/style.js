import styled from "styled-components";

export const StyledHeading = styled.h2(({ variant, theme: { heading } }) => ({
  fontSize: `${heading[variant].fontSize}`,
  color: `${heading[variant].color}`,
  fontWeight: `${heading[variant].fontWeight}`,
}));

// export const StyledHeading = styled.h2`
//   ${({ theme }) => console.log({ theme }, "sdsd")}
// `;
export const ColouredHeading = styled.span`
  color: #f05b25;
`;
