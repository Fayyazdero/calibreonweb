import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

export const TopHeadingWrapper = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "30px",
    paddingTop: "30px",
    alignItems: "center",
    [`@media screen and (max-width: ${xs}px)`]: {
      paddingTop: "46px",
      paddingBottom: "24px",
    },
  };
});
export const TeamDetailsHeadingWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const xs = breakPoints.xs;

    return {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "39px",
      alignItems: "center",
      [`@media screen and (max-width: ${xs}px)`]: {
        paddingTop: "46px",
      },
    };
  }
);

export const TeamDetailsWrapper = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    "& .newTypo": {
      marginBottom: "29px"
    }
  };
});

export const TeamDetailsContainer = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    display: "flex",
    justifyContent: "space-between",

    [`@media screen and (max-width: ${xs}px)`]: {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const TeamDetailsImageWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const xs = breakPoints.xs;

    return {
      marginTop: "20px",
      "& img": {
        width: "308px",
        height: "308px",
      },
      [`@media screen and (max-width: ${xs}px)`]: {
        alignItems: "center",
        width: "208px",
        height: "208px",
        "& img": {
          width: "208px",
          height: "208px",
        },
      },
    };
  }
);

export const TeamDetailsInfoWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const xs = breakPoints.xs;

    return {
      marginLeft: "20px",

      [`@media screen and (max-width: ${xs}px)`]: {
        marginLeft: "0",
      },
    };
  }
);

export const TeamDetailsDescWrapper = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    textAlign: "justify",

  };
});

export const TeamTimelineWrapper = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0 30px 0",

    [`@media screen and (max-width: ${xs}px)`]: {
      flexDirection: "column",
    },
  };
});

export const TeamProgressContainer = styled.div(
  ({ theme: { breakPoints } }) => {
    const xs = breakPoints.xs;

    return {
      width: "50%",
      "& h2": {
        marginBottom: "21px",
      },
      [`@media screen and (max-width: ${xs}px)`]: {
        width: "100%",
        marginBottom: "40px",
      },
    };
  }
);

export const ContainerOuter = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    [`@media screen and (max-width: ${xs}px)`]: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: "30px",
    },
  };
});
export const LineContainer = styled.div`
  margin-right: 40px;
`;

export const TimeLineContainer = styled.div(() => {
  return {
    width: "100%",
    "& p": {
      marginBottom: "0",
    },
  };
});
export const LineWrapper = styled.div`
  border: 2px solid #f05b25;
`;

export const VerticalLine = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    borderLeft: "6px solid #f05b25",
    height: "115px",
    width: "6px",
    marginLeft: "7px",

    [`@media screen and (max-width: ${xs}px)`]: {
      borderLeft: "6px solid #f05b25",
      height: "85px",
      width: "6px",
      marginLeft: "7px",
    },
  };
});
export const DotContainer = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background: #f05b25;
`;

export const ProgressWrapper = styled.div(
  ({ theme: { breakPoints, colors } }) => {
    const xs = breakPoints.xs;

    return {
      padding: "0 50px 10px 0",
      "& .progress": {
        backgroundColor: colors.grey,
      },
      "& p": {
        marginBottom: "8px",
      },

      [`@media screen and (max-width: ${xs}px)`]: {
        padding: 0,
        "& .progress": {
          backgroundColor: colors.grey,
        },
      },
    };
  }
);

export const TeamTimelineContainer = styled.div(
  ({ theme: { breakPoints } }) => {
    const xs = breakPoints.xs;

    return {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& h2": {
        marginBottom: "36px",
      },

      [`@media screen and (max-width: ${xs}px)`]: {
        width: "100%",
      },
    };
  }
);
export const TeamUserListWrapper = styled.div`
  background-color: #f05b25;
  margin-bottom: 50px;
`;
export const SpacerContainer = styled.div`
  height: 37px;
`;

export const DescWrapper = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    display: "flex",
    marginBottom: "22px",

    [`@media screen and (max-width: ${xs}px)`]: {
      display: "none",
    },
  };
});

export const ProfileTitle = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 0",
    [`@media screen and (max-width: ${xs}px)`]: {
      alignItems: "center",
      "& h2": {
        padding: "30px",
      },
    },
  };
});

export const Certification = styled.div(({ theme: { breakPoints } }) => {
  const xs = breakPoints.xs;

  return {
    width: "267px",
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
    [`@media screen and (max-width: ${xs}px)`]: {
      justifyContent: "center",
    },
  };
});

export const SubTitle = styled("h4")(({ fontSize }) => ({
  fontFamily: "Inter",
  color: "#4d4d4d",
  fontStyle: "italic",
  fontWeight: "500",
  fontSize: fontSize ? `${fontSize}px` : "12px",
  letterSpacing: "-2.2%",
  margin: "0",
}));

export const VerifiedLogo = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "18px",
  width: "18px",
  marginLeft: "10px",
});

export const StyledProgressBar = styled(ProgressBar)`
  & .bg-danger {
    background-color: #f05b25 !important;
  }
`;
