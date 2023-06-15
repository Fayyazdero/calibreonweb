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

export const TopHeadingWrapper = styled.div(
  ({ theme: { breakPoints, fontWeights, lineHeights, fontSizes, spacing } }) => {
    const sm = breakPoints.sm;

    return {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: `${spacing * 20}px`,
      paddingTop: `${spacing * 20}px`,
      alignItems: "center",
      "& p:nth-child(2)": {
        cursor: "pointer",
      },
      [`@media screen and (max-width: ${sm}px)`]: {
        paddingTop: `${spacing * 24}px`,
        paddingBottom: `${spacing * 14}px`,
        "& p": {
          fontWeight: fontWeights.semi_bold,
          lineHeight: lineHeights.tabTypo,
          fontSize: fontSizes.md,
        },
      },
    };
  }
);
