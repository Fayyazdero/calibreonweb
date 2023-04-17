import styled from "styled-components";

const Wrapper = styled("div")({
  background: "#6622CC",
  display: "flex",
  height: "304px",
  borderRadius: "20px",
  alignItems: "center",
  marginBottom: "3rem",
  marginTop: "210px",
});

export const ImageWrapper = styled("div")({
  width: "526px",
  height: "467px",
  position: "relative",
  left: "41px",
  bottom: "26.7%",
});
export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "120px",
});
export const CategoryTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: "9px",
  },
});

export default Wrapper;
