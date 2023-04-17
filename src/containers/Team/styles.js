import Image from "next/image";
import styled from "styled-components";

export const ServicesHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;
export const ProfileCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 30px;
`;
export const TeamDetailsWrapper = styled.div``;
export const TeamDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TeamDetailsImageWrapper = styled.div`
  // height: 308px;
  // width: 308px;
  margin-top: 20px;
`;
export const TeamDetailsInfoWrapper = styled.div`
  // height: 363px;
  // width: 73%;
  margin-left: 20px;
`;
export const TeamDetailsDescWrapper = styled.div`
  // margin-top: 20px;
`;
export const DescWrapper = styled.div`
  display: flex;
`;
export const ViewAll = styled.p`
  display: flex;
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  cursor: pointer;
  & svg {
    padding-left: 20px;
    margin-top: 6px;
  }
`;
export const ServicesWrapper = styled.div`
  //   background: ${({ theme: { colors } }) => colors.grey};
  padding-top: 56px;
  padding-bottom: 36px;
`;
export const Banner = styled.div`
  padding-bottom: 110px;
`;
export const ArrowsBg = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 50px;
  background: ${({ theme: { colors } }) => colors.primary};
  margin-left: 15px;
  cursor: pointer;
`;
export const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SliderArrow = styled("div")(({ theme: { colors } }) => ({
  display: "flex",
  background: `${colors.primary}`,
}));

export const ProfileHeader = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});
export const ProfileTitle = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "0 0 0 0",
});
export const ProfileImage = styled("div")({
  width: "161px",
  height: "161px",
  paddingTop: "21px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});
export const Title = styled("h2")({
  fontFamily: "Montserrat",
  fontWeight: "700",
  fontSize: "46px",
  letterSpacing: "-2.3%",
  margin: "0",
});
export const Certification = styled("div")({
  width: "267px",
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
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

export const Content = styled("div")({
  paddingTop: "21px",
  paddingLeft: "26px",
  paddingRight: "26px",
});
