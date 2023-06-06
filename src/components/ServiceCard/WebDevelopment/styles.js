import styled from "styled-components";

const Wrapper = styled("div")(({ theme: { colors }, variant }) => ({
  background: colors.yellow,
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  boxSizing: "border-box",
  height: "auto",
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
  position: "relative",
  maxWidth: " calc(100% - 58px)",
  height: "498.12px",
  left: "32px",
  bottom: "unset",
  marginTop: "-144px",
  marginBottom: "24px",
});
export const ContentWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "58px",
  marginLeft: "41px",
  marginBottom: "56px",
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
