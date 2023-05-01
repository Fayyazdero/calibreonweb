import styled from "styled-components";

const Wrapper = styled("div")(({ theme: { colors }, variant }) => ({
  background: colors.grey,
  display: "flex",
  height: "304px",
  borderRadius: "20px",
  flexDirection: "row-reverse",
  marginTop: "4rem",
  justifyContent: "space-between",
  alignItems: "center",
  transition: ".3s ease",
  cursor: "pointer",
  border: `2px solid ${colors[variant] || colors.primary}`,
  "&:hover": {
    color: `${colors[variant] || colors.primary}`,
    background: "transparent",
    h2: {
      color: `${colors[variant] || colors.primary}`,
    },
    p: {
      color: `${colors[variant] || colors.primary}`,
    },
    "svg path": {
      fill: `${colors[variant] || colors.primary}`,
    },
  },
}));

export const ImageWrapper = styled("div")({
  width: "526px",
  height: "467px",
  position: "relative",
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
