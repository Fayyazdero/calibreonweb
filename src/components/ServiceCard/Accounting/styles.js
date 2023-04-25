import styled from "styled-components";

const Wrapper = styled("div")(({ theme: { colors }, variant }) => ({
  background: colors[variant] || colors.primary,
  border: `2px solid ${colors[variant] || colors.primary}`,
  display: "flex",
  height: "304px",
  borderRadius: "20px",
  alignItems: "center",
  cursor: "pointer",
  transition: ".3s ease",
  "@media(max-width: 991px)": {
    flexDirection: "column",
    marginTop: "192px",
    background: colors[variant] || colors.primary,
  },
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
  left: "41px",
  bottom: "26.7%",
  "@media(max-width: 991px)": {
    width: "526px",
    position: "relative",
    maxWidth: " calc(100% - 58px)",
    height: "294px",
    left: " 0",
    bottom: "unset",
    marginTop: "-144px",
    marginBottom: "24px",
  },
});
export const HeadingWrapper = styled("div")({
  "@media(max-width: 991px)": {
    h2: {
      fontSize: "33px",
    },
    display: "flex",
    justifyContent: "center",
    margin: "0",
  },
});
export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "120px",
  marginRight: "14px",
  "@media(max-width: 991px)": {
    marginLeft: "0",
    marginRight: "0",
  },
});
export const CategoryTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: "9px",
    marginLeft: "26px",
  },
  "@media(max-width: 991px)": {
    display: "none",
  },
});

export default Wrapper;
