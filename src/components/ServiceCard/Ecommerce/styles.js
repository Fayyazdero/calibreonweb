import styled from "styled-components";

const Wrapper = styled("div")(({ theme }) => ({
  background: theme.colors.cyan,
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  boxSizing: "border-box",
  height: "auto",
}));

export const ImageWrapper = styled("div")({
  alignItems: "center",
  marginLeft: "51px",
  marginRight: "52px",
  transform: "translateY(-28%)",
  minHeight: "500px",

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
  marginLeft: "36px",
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
