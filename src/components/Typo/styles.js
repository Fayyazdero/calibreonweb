import styled from "styled-components";

export const Text = styled.p(({ variant, theme: { typo, breakPoints } }) => {
  const lg = breakPoints.lg;
  const fontSize = typo[variant].lg.fontSize;
  return {
    color: `${typo[variant].color}`,
    fontSize: `${typo[variant].fontSize}`,
    fontWeight: `${typo[variant].fontWeight}`,
    margin: "0",
    [`@media screen and (min-width:${lg})`]: {
      fontSize,
      color: "red",
      display: "none",
    },
  };
});
