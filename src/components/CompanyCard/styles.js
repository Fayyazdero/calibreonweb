import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

export const ServicesHeadingWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: 0,
      paddingTop: 0,
      alignItems: "center",
      "& h2": {
        marginTop: "54px",
      },
      [`@media screen and (max-width: ${sm}px)`]: {
        paddingTop: 0,
      },
    };
  }
);
export const TopHeadingWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "40px",
    paddingTop: "40px",
    alignItems: "center",
    "& p:first-child": {
      margin: 0,
    },
    [`@media screen and (max-width: ${sm}px)`]: {
      paddingTop: "46px",
      paddingBottom: "24px",
    },
  };
});

export const TestimonialWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    backgroundColor: "#4d4d4d",
    width: "413px",
    height: "387px",
    boxShadow: "0px 0px 5.73407px rgba(0, 0, 0, 0.05)",
    borderRadius: "34px",
    padding: "34px 34px 44px 34px",
    "& p": {
      margin: 0,
    },

    [`@media screen and (max-width: ${sm}px)`]: {
      width: "100%",
      height: "100%",
      "& p:first-child": {
        margin: 0,
      },
    },
  };
});

export const CertificationWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    paddingTop: "40px",
    paddingBottom: "40px",

    [`@media screen and (max-width: ${sm}px)`]: {
      width: "100%",
      textAlign: "center",
    },
  };
});
export const ListWrapper = styled.div`
  line-height: 21px;
`;

export const VideoWrapper = styled.div(() => {
  return {
    lineHeight: "21px",
    "& .firstTypo": {
      marginTop: "28px",
      marginBottom: "6px",
    },
  };
});

export const StyledVideoDiv = styled.video(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    backgroundColor: "#D9D9D9",
    width: "372px",
    height: "283px",
    borderRadius: "27px",
    marginTop: "20px",
    [`@media screen and (max-width: ${sm}px)`]: {
      width: "100%",
    },
  };
});
export const StyledTestimonialVideoDiv = styled.video(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      backgroundColor: "#D9D9D9",
      width: "345px",
      height: "255px",
      borderRadius: "27px",
      marginTop: "34px",
      [`@media screen and (max-width: ${sm}px)`]: {
        width: "100%",
        marginTop: "24px",
      },
    };
  }
);

export const InfoWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    backgroundColor: "#f05b25",
    width: "413px",
    height: "387px",
    boxShadow: "0px 0px 5.73407px rgba(0, 0, 0, 0.05)",
    borderRadius: "20px",
    padding: "33px",

    [`@media screen and (max-width: ${sm}px)`]: {
      width: "100%",
    },
  };
});

export const TeamDetailsImageWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      marginTop: "20px",
      "& img": {
        width: "196px",
        height: "196px",
      },
      [`@media screen and (max-width: ${sm}px)`]: {
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
export const InnerInfoWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    padding: "16px",
    "& p": {
      margin: 0,
    },

    [`@media screen and (max-width: ${sm}px)`]: {
      padding: "16px",
    },
  };
});

export const SpacerInfoWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    marginBottom: "28px",

    [`@media screen and (max-width: ${sm}px)`]: {
      marginBottom: "28px",
    },
  };
});

export const TeamDetailsInfoWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      paddingTop: "58px",
      paddingBottom: "30px",
      display: "flex",
      [`@media screen and (max-width: ${sm}px)`]: {
        marginLeft: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    };
  }
);

export const TeamDetailsDescWrapper = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      "& h2": {
        marginBottom: "30px",
      },
      "& p": {
        marginBottom: "30px",
      },
      [`@media screen and (max-width: ${sm}px)`]: {
        "& h2": {
          textAlign: "center",
        },
        "& p": {
          textAlign: "justify",
        },
      },
    };
  }
);
export const NewTeamDetailsDescWrapper = styled.div(() => {
  return {
    "& p:first-child": {
      marginBottom: "8px",
    },
    "& .desHeading": {
      marginTop: "40px",
    },
  };
});

export const TeamTimelineWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",
    justifyContent: "space-between",
    margin: "30px 0 30px 0",

    [`@media screen and (max-width: ${sm}px)`]: {
      flexDirection: "column",
    },
  };
});

export const TeamProgressContainer = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      width: "60%",
      "& h2:first-child": {
        marginBottom: "8px",
      },

      [`@media screen and (max-width: ${sm}px)`]: {
        width: "100%",
        marginBottom: "40px",
        "& h2:first-child": {
          textAlign: "center",
        },
      },
    };
  }
);

export const TeamTimelineContainer = styled.div(
  ({ theme: { breakPoints } }) => {
    const sm = breakPoints.sm;

    return {
      width: "40%",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",

      [`@media screen and (max-width: ${sm}px)`]: {
        width: "100%",
        alignItems: "center",
      },
    };
  }
);

export const DescWrapper = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    display: "flex",

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
    padding: "20px 0px 0px 20px",
    "& p": {
      margin: 0,
    },
    [`@media screen and (max-width: ${sm}px)`]: {
      alignItems: "center",
      "& h2": {
        padding: 0,
      },
    },
  };
});

export const TypoContainer = styled.div(({ theme: { breakPoints } }) => {
  const sm = breakPoints.sm;

  return {
    marginTop: "27px",
    marginBottom: "13px",
    [`@media screen and (max-width: ${sm}px)`]: {
      marginTop: "10px",
      display: "none",
    },
  };
});

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