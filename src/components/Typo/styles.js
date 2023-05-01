import styled from "styled-components";

export const Text = styled.p(({ variant, theme: { typo, breakPoints } }) => {
  const xs = breakPoints.xs;
  const xsfontSize = typo[variant].xs.fontSize;
  const lineHeight = typo[variant].xs.lineHeight;

  const lg = breakPoints.lg;
  const lgfontSize = typo[variant]["lg"].fontSize;
  return {
    color: `${typo[variant].color}`,
    fontSize: `${typo[variant].fontSize}`,
    fontWeight: `${typo[variant].fontWeight}`,
    margin: "0",
    [`@media screen and (min-width:${lg})`]: {
      lgfontSize,
      lineHeight,
      marginBottom: "10px",
      color: "red",
      display: "none",
    },
    [`@media screen and (min-width:${xs})`]: {
      xsfontSize,
      lineHeight,
      marginBottom: "10px",
      display: "none",
    },
  };
});
