import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  margin-bottom: 59px;
  @media (max-width: 767px) {
    .heading {
      text-align: -webkit-center;
    }
  }
`;

export const HeadingWrapper = styled.div`
  margin-bottom: 27px;
`;
