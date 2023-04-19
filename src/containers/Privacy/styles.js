import { Container } from "react-bootstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  margin-bottom: 162px;
  @media (max-width: 767px) {
    .col {
      display: none;
    }

    .title-wrapper {
      margin-left: 0;
      text-align: -webkit-center;
    }

    .content-wrapper {
      margin-left: 0;
    }
  }
`;

export const NavWrapper = styled("div")({
  borderRight: "1px solid #F05B25",
  paddingRight: "10px",
  marginTop: "77px",
  "& a": {
    padding: "0",
    marginBottom: "27px",
  },
  "& .nav-link.active": {
    fontWeight: "500",
    backgroundColor: "inherit",
  },
});
export const TitleWrapper = styled("div")({
  marginBottom: "34px",
  marginLeft: "67px",
});
export const ContentWrapper = styled("div")({
  marginLeft: "67px",
});
