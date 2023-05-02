import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

export const TopHeadingWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "30px",
    paddingTop: "30px",
    alignItems: "center",
    [`@media screen and (max-width: ${sm}px)`]: {
      paddingTop: "46px",
      paddingBottom: "24px",
    },
  };
});
export const TeamDetailsHeadingWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "39px",
      alignItems: "center",
      [`@media screen and (max-width: ${sm}px)`]: {
        paddingBottom: "9px"
      },
    };
  }
);

export const TeamDetailsWrapper = styled.div(({ theme: { breakPoints, fontWeights, lineHeights, fontSizes } }) => {
  const sm = breakPoints.sm;

  return {
    "& .newTypo": {
      marginBottom: "29px",
      [`@media screen and (max-width: ${sm}px)`]: {
        textAlign: "center",
        fontWeight: fontWeights.semi_bold,
        lineHeight: lineHeights.desc,
        fontSize: fontSizes.md
      },
    },
  };
});

export const TeamDetailsContainer = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    justifyContent: "space-between",

    [`@media screen and (max-width: ${sm}px)`]: {
      flexDirection: "column",
      alignItems: "center",
    },
  };
});

export const TeamDetailsImageWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {  
      marginTop: "20px",
      "& img": {
        width: "308px",
        height: "308px",
        border: "8px solid #4D4D4D",
        boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2)",
        filter:
          "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.08)) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1))",
        borderRadius: "4px",
      },
      [`@media screen and (max-width: ${sm}px)`]: {
        alignItems: "center",
        width: "208px",
        height: "208px",
        "& img": {
          width: "208px",
          height: "208px",
          border: "8px solid #4D4D4D",
          boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2)",
          filter:
            "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.08)) drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.1))",
          borderRadius: "4px",
        },
      },
    };
  }
);

export const TeamDetailsInfoWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      marginLeft: "20px",

      [`@media screen and (max-width: ${sm}px)`]: {
        marginLeft: "0",
      },
    };
  }
);

export const TeamDetailsDescWrapper = styled.div(
  () => {

    return {
      textAlign: "justify",
    };
  }
);

export const TeamTimelineWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    justifyContent: "space-between",
    margin: "60px 0",

    [`@media screen and (max-width: ${sm}px)`]: {
      flexDirection: "column",
    },
  };
});

export const TeamProgressContainer = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      width: "50%",
      "& h2": {
        marginBottom: "21px",
      },
      [`@media screen and (max-width: ${sm}px)`]: {
        width: "100%",
        marginBottom: "21px",
        "& h2": {
          marginBottom: "21px",
          marginTop: "24px"
        },
      },
    };
  }
);

export const ContainerOuter = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    [`@media screen and (max-width: ${sm}px)`]: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
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
  const sm = breakPoints.sm;

  return {
    borderLeft: "6px solid #f05b25",
    height: "115px",
    width: "6px",
    marginLeft: "7px",

    [`@media screen and (max-width: ${sm}px)`]: {
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
    const sm = breakPoints.sm;

    return {
      padding: "0 50px 10px 0",
      "& .progress": {
        backgroundColor: colors.grey,
      },
      "& p": {
        marginBottom: "8px",
      },

      [`@media screen and (max-width: ${sm}px)`]: {
        padding: 0,
        marginBottom: "7.34px",
        "& .progress": {
          backgroundColor: colors.grey,
        },
        "& p": {
          marginBottom: "5.8px",
        },
      },
    };
  }
);

export const TeamTimelineContainer = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      "& h2": {
        marginBottom: "36px",
      },

      [`@media screen and (max-width: ${sm}px)`]: {
        width: "100%",
        "& h2": {
          marginBottom: "26px",
        },
      },
    };
  }
);
export const TeamUserListWrapper = styled.div`
  background-color: #f05b25;
  margin-bottom: 50px;
`;

export const SpacerContainer = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    height: "38px",

    [`@media screen and (max-width: ${sm}px)`]: {
      height: "28px",
    },
  };
});

export const DescWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    marginBottom: "22px",

    [`@media screen and (max-width: ${sm}px)`]: {
      display: "none",
    },
  };
});

export const ProfileTitle = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 0",
    [`@media screen and (max-width: ${sm}px)`]: {
      alignItems: "center",
      "& h2": {
        padding: "30px",
      },
    },
  };
});

export const Certification = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

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
    [`@media screen and (max-width: ${sm}px)`]: {
      justifyContent: "center",
    },
  };
});

export const SubTitle = styled.div(({ theme: { breakPoints }, fontSize }) => {
  const sm = breakPoints.sm;

  return {
    fontFamily: "Inter",
    color: "#4d4d4d",
    fontStyle: "italic",
    fontWeight: "500",
    fontSize: fontSize ? `${fontSize}px` : "12px",
    letterSpacing: "-2.2%",
    margin: "0",
    [`@media screen and (max-width: ${sm}px)`]: {
      lineHeight: "150%"
    },
  };
});

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
