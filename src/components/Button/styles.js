import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)(
  ({ variant, theme: { button, breakPoints } }) => {
    const xs = breakPoints.xs;
    return {
      fontSize: `${button[variant].fontSize}`,
      color: `${button[variant].color}`,
      border: `1px solid ${button[variant].border}`,
      background: `${button[variant].background}`,
      borderRadius: "6px",
      "&:focus": {
        boxShadow: "inherit",
      },
      ":hover": {
        background: `${button[variant].hover.background}`,
        color: `${button[variant].hover.color}`,
        border: `1px solid ${button[variant].hover.border}`,
      },

      [`@media screen and (max-width: ${xs}px)`]: {
        padding: "1px 26px",
      },
    };
  }
);
