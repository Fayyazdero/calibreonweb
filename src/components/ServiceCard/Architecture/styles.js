import styled from "styled-components";

const Wrapper = styled("div")(({ theme }) => ({
  background: theme.colors.maroon,
  display: "flex",
  height: "304px",
  borderRadius: "20px",
  alignItems: "center",
  justifyContent: "space-between",

  "@media screen and (max-width: 768px)": {
    flexDirection: "column",
  },
}));

export const ImageWrapper = styled("div")({
  width: "100%",
  minHeight: "421px",
  position: "relative",
  bottom: "19%",

  "@media screen and (max-width: 768px)": {
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
  padding: "0 25px",
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
