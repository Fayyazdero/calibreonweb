import { Form } from "react-bootstrap";
import styled from "styled-components";

export const StyledInput = styled(Form.Control)(
  ({ variant, theme: { colors } }) => ({
    borderRadius: 0,
    border: "none",
    background: "transparent",
    borderBottom: `2px solid ${
      variant === "contact" ? colors.white : colors.primary
    }`,
    "&::placeholder ": {
      color: variant === "contact" ? colors.white : colors.grey,
    },
    color: `${variant === "contact" ? colors.white : colors.grey} !important`,

    ":focus": {
      borderBottom: `2px solid ${
        variant === "contact" ? colors.white : colors.primary
      }`,
      boxShadow: "none",
      background: "transparent",
    },
  })
);
