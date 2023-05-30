import { Col, ProgressBar, Row } from "react-bootstrap";
import styled from "styled-components";

export const ServicesHeadingWrapper = styled.div(
  ({ theme: { breakPoints, lineHeights } }) => {
    const sm = breakPoints.sm;

    return {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 0,
      paddingTop: 0,
      alignItems: "center",
      [`@media screen and (max-width: ${sm}px)`]: {
        paddingTop: 0,
        span: {
          lineHeight: lineHeights["1xl"],
        },
      },
    };
  }
);
export const TopHeadingWrapper = styled.div(
  ({ theme: { breakPoints, fontWeights, lineHeights, fontSizes } }) => {
    const sm = breakPoints.sm;

    return {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "39px",
      paddingTop: "39px",
      alignItems: "center",
      "& p:nth-child(2)": {
        cursor: "pointer",
      },
      [`@media screen and (max-width: ${sm}px)`]: {
        paddingTop: "48px",
        paddingBottom: "28px",
        "& p": {
          fontWeight: fontWeights.semi_bold,
          lineHeight: lineHeights.tabTypo,
          fontSize: fontSizes.md,
        },
      },
    };
  }
);
export const TeamDetailsWrapper = styled.div``;
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
