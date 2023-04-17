import styled from "styled-components";

const Wrapper = styled("div")(({ theme }) => ({
  background: theme.colors.grey,
  display: "flex",
  height: "304px",
  borderRadius: "20px",
  flexDirection: "row-reverse",
  marginTop: "4rem",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ImageWrapper = styled("div")({
  width: "526px",
  height: "467px",
  position: "relative",
  bottom: "26.7%",
});
export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: "36px",
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
