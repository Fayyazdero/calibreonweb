import styled from "styled-components";

const Wrapper = styled("div")(({ theme: { colors } }) => ({
  background: colors.blue,
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  boxSizing: "border-box",
  height: "100%",
}));

export const ImageWrapper = styled("div")({
  alignItems: "center",
  marginLeft: "51px",
  marginRight: "52px",
  transform: "translateY(-32%)",
  minHeight: "498px",

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
  marginLeft: "41px",
  marginBottom: "56px",
});
export const CategoryTitle = styled("div")({
  display: "flex",
  "& svg": {
    marginRight: "9px",
    marginLeft: "26px",
  },
});

export default Wrapper;
