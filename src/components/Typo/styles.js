import styled from "styled-components";

export const Text = styled.p(({ variant, theme: { typo } }) => ({
  color: `${typo[variant].color}`,
  fontSize: `${typo[variant].fontSize}`,
  fontWeight: `${typo[variant].fontWeight}`,
  margin: "0",
}));
