import { Form } from "react-bootstrap";
import styled from "styled-components";

export const StyledInput = styled(Form.Control)(({ theme: { colors } }) => ({
  borderRadius: 0,
  border: "none",
  borderBottom: `2px solid ${colors.primary}`,
  ":focus": {
    borderBottom: `2px solid ${colors.primary}`,
    boxShadow: "none",
  },
}));
