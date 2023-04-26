import styled from "styled-components";

export const Text = styled.p(({ variant, theme: { typo, breakPoints } }) => {
  const xs = breakPoints.xs;
  const fontSize = typo[variant].xs.fontSize;
  const lineHeight = typo[variant].xs.lineHeight;

  return {
    color: `${typo[variant].color}`,
    fontSize: `${typo[variant].fontSize}`,
    fontWeight: `${typo[variant].fontWeight}`,
    [`@media screen and (max-width: ${xs}px)`]: {
      fontSize,
      lineHeight,
      marginBottom: "10px",
    },
  };
});
