import styled from "styled-components";

export const MainWrapper = styled("div")({
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#4D4D4D",
});
const Wrapper = styled("div")({
  background: "#6622CC",
  display: "flex",
  height: "230px",
  width: "70%",
  borderRadius: "20px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});
export const ImageWrapper = styled("div")({
  width: "380px",
  height: "345px",
  position: "relative",
  top: "-25%",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
export const ContentWrapper = styled("div")({});
export const Title = styled("h1")({
  fontFamily: "Montserrat",
  fontWeight: "800",
  fontSize: "45px",
  color: "#FFFF",
});
export const CategoryTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginBottom: "2px",
    fontWeight: "800",
  },
  "& h4": {
    color: "#FFFF",
    margin: "0",
    marginLeft: "6px",
    fontWeight: "300",
    fontSize: "13px",
  },
});

export default Wrapper;
