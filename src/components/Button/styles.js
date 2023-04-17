import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)(
  ({ variant, theme: { button } }) => ({
    fontSize: `${button[variant].fontSize}`,
    color: `${button[variant].color}`,
    border: `1px solid ${button[variant].border}`,
    background: `${button[variant].background}`,
    // padding: `${button[variant].search} 8px 52px`,

    ":hover": {
      background: `${button[variant].hover.background}`,
      color: `${button[variant].hover.color}`,
      border: `1px solid ${button[variant].hover.border}`,
    },
  })
);
