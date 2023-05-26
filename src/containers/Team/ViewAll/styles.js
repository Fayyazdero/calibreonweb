import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

export const StyledRow = styled(Row)`
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledCol = styled(Col)`
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LoadingWrapper = styled("div")`
  display: flex;
  justify-content: center;
  height: 80vh;
  align-items: center;
`;
