import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

export const ServicesHeadingWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const xs = breakPoints.xs;

    return {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 0,
      paddingTop: 0,
      alignItems: "center",
      [`@media screen and (max-width: ${xs}px)`]: {
        paddingTop: 0,
      },
    };
  }
);
export const TopHeadingWrapper = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "39px",
    paddingTop: "39px",
    alignItems: "center",
    "& p:nth-child(2)": {
      cursor: "pointer",
    },
    [`@media screen and (max-width: ${xs}px)`]: {
      paddingTop: "46px",
      paddingBottom: "24px",
    },
  };
});
export const TeamDetailsWrapper = styled.div``;