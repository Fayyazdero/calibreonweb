import styled from "styled-components";

export const Text = styled.p(({ variant, theme: { typo, breakPoints } }) => {
  const sm = breakPoints.sm;
  return {
    color: `${typo[variant].color}`,
    fontSize: `${typo[variant].fontSize}`,
    fontWeight: `${typo[variant].fontWeight}`,
    margin: "0",
    [`@media screen and (max-width:${sm}px)`]: {
      fontSize: typo[variant].xs.fontSize,
      lineHeight: typo[variant].xs.lineHeight,
      marginBottom: "10px",
    },
  };
});
