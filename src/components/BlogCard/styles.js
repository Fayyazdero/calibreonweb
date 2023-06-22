import styled from "styled-components";

const Wrapper = styled("div")(({theme: {colors}})=>({
  width: "100%",
  height: "auto",
  color: colors.grey,
}));
export const BlogeHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "18px",
  cursor: "pointer",
  '@media(max-width: 992px)': {
    marginBottom: "8px",
  }
});
export const BlogTitle = styled("div")({
  marginLeft: "19px",
  width: "100%",
  '@media(max-width: 992px)': {
    marginLeft: "16px",
  }
});
export const LogoWrapper = styled("div")({
  position: 'relative',
  width: "161px",
  height: "161px",
  minWidth: "161px",
  minHeight: "161px",
  '@media(max-width: 992px)': {
    width: "110px",
    height: "110px",
    minWidth: "110px",
    minHeight: "110px", 
  }
});
export const Title = styled("h2")({
  fontFamily: "Montserrat",
  fontWeight: "700",
  fontSize: "44px",
  letterSpacing: "-2.3%",
  margin: "0",
  borderBottom: "4px solid #4D4D4D",
  width: "auto",
  display: "inline-block",
  minWidth: "70%",
  '@media(max-width: 992px)': {
    fontSize: "32px",
    width: "100%",
    minWidth: "100%", 
  }
});
export const SubTitle = styled("h4")({
  fontSize: "32px",
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
  paddingLeft: "12px",
  paddingRight: "12px",
  fontFamily: "Hind Madurai",
  fontWeight: "500",
  fontSize: "15px",
  transition: '0.3s all ease',
  "& p": {
    textAlign: "justify"
  }
});
export const ViewAll = styled("div")({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  padding: "0 21px",
  marginTop: "24px",
  cursor: "pointer",
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
  '@media(max-width: 992px)': {
    marginTop: "28px",
  }
});

export default Wrapper;
