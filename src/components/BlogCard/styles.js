const { default: styled } = require("styled-components");

const Wrapper = styled("div")({
  width: "558.25px",
  height: "496px",
  borderRadius: "19px",
  marginLeft: "2rem",
  color: "#4D4D4D",
});
export const BlogeHeader = styled("div")({
  display: "flex",
});
export const BlogTitle = styled("div")({
  marginTop: "33px",
  marginLeft: "19px",
});
export const LogoWrapper = styled("div")({
  width: "161px",
  height: "161px",
  paddingTop: "16px",
  paddingLeft: "21px",
  marginBottom: "18px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});
export const Title = styled("h2")({
  fontFamily: "Montserrat",
  fontWeight: "700",
  fontSize: "44px",
  letterSpacing: "-2.3%",
  margin: "0",
  borderBottom: "4px solid #4D4D4D",
  width: "304px",
});
export const SubTitle = styled("h4")({
  fontFamily: "Inter",
  fontStyle: "oblique",
  fontWeight: "500",
  fontSize: "12px",
  letterSpacing: "-2.2%",
  margin: "0",
  textTransform: "uppercase",
  marginTop: "6px",
});

export const Content = styled("div")({
  paddingLeft: "26px",
  paddingRight: "26px",
  fontFamily: "Hind Madurai",
  fontWeight: "500",
  fontSize: "15px",
});
export const ViewAll = styled("div")({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  padding: "0 21px",
  marginTop: "38px",
  "& h4": {
    margin: "0",
    fontWeight: "600",
    fontFamily: "Hind Madurai",
    fontSize: "19px",
  },
  "& svg": {
    margin: "0",
    marginLeft: "24px",
    marginBottom: "4px",
  },
});

export default Wrapper;
