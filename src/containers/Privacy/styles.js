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

export const NavWrapper = styled("div")(
  ({ theme: { spacing, fontWeights } }) => {
    return {
      borderRight: "1px solid #F05B25",
      paddingRight: `${spacing * 5}px`,
      marginTop: `${spacing * 39}px`,
      "& a": {
        padding: "0",
        marginBottom: `${spacing * 14}px`,
      },
      "& .nav-link.active": {
        fontWeight: fontWeights.normal,
        backgroundColor: "inherit",
      },
    };
  }
);
export const TitleWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginBottom: `${spacing * 17}px`,
    marginLeft: `${spacing * 34}px`,
  };
});
export const ContentWrapper = styled("div")(({ theme: { spacing } }) => {
  return {
    marginLeft: `${spacing * 34}px`,
  };
});
