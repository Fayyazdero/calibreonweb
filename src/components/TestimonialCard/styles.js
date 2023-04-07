const { default: styled } = require("styled-components");

const Wrapper = styled("div")({
  background: "#F05B25",
  borderRadius: "19px",
  width: "734px",
  height: "280px",
  padding: "28px",
  color: "#FFFF",
});
export const Content = styled("p")({});
export const LogoWrapper = styled("div")({
  width: "109px",
  height: "26px",
  display: "flex",
  maxHeight: "100%",
  justifyContent: "start",
  alignItems: "center",
  "& img": {
    width: "100%",
    height: "100%",
  },
});

export default Wrapper;
