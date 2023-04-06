import styled from "styled-components";

const StyledSection = styled("div")({
  background: "#4D4D4D",
});
export const SocialIcons = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "16px",
  "& svg": {
    marginRight: "27px",
  },
});
export const Title = styled("h2")({
  fontFamily: "Montserrat",
  fontWeight: "700",
  color: "#FFFF",
  fontSize: "26px",
  marginTop: "85px",
});
export const NavLinks = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0",
  "& a": {
    fontFamily: "Poppins",
    textDecoration: "none",
    color: "#FFFF",
    fontSize: "16px",
    fontWeight: "500",
    margin: "0",
    marginTop: "13px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordWrap: "break-word",
  },
});
export const LogoWrapper = styled("div")({
  marginTop: "20px",
  "& img": {
    width: "60%",
    height: "100%",
  },
});
export const CopyRightContent = styled("h4")({
  fontFamily: "Poppins",
  fontWeight: "500",
  fontSize: "16px",
  textAlign: "center",
  marginTop: "46px",
  marginBottom: "32px",
  color: "#FFFF",
});

export default StyledSection;
