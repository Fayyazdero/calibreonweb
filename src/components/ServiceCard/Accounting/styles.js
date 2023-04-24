import styled from "styled-components";

const Wrapper = styled("div")(({ theme }) => ({
  background: theme.colors.deepPurple,
  display: "flex",
  height: "304px",
  borderRadius: "20px",
  alignItems: "center",

  "@media screen and (max-width: 992px)": {
    flexDirection: "column",
  },
}));

export const ImageWrapper = styled("div")({
  width: "526px",
  height: "467px",
  position: "relative",
  left: "41px",
  bottom: "26.7%",

  "@media screen and (max-width: 992px)": {
    width: "100%",
    height: "100%",
    position: "relative",
    left: "0",
  },
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
    marginLeft: "26px",
  },
});

export default Wrapper;
