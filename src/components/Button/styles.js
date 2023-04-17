import styled from "styled-components";
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)(
  ({ variant, padding, theme: { button } }) => ({
    fontSize: `${button[variant].fontSize}`,
    color: `${button[variant].color}`,
    border: `1px solid ${button[variant].border}`,
    background: `${button[variant].background}`,
    padding: padding,

    "&:focus": {
      boxShadow: "inherit",
    },
    ":hover": {
      background: `${button[variant].hover.background}`,
      color: `${button[variant].hover.color}`,
      border: `1px solid ${button[variant].hover.border}`,
    },
  })
);
