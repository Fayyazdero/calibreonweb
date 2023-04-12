const { default: styled } = require("styled-components");

const TestimonialWrapper = styled("div")({
  background: "#F05B25",
  borderRadius: "19px",
  padding: "28px",
  color: "#FFFF",
});
export const Content = styled("p")({
  fontFamily: "Hind Madurai",
  fontWeight: "700",
  fontSize: "19px",
});
export const LogoWrapper = styled("div")({
  display: "flex",
  justifyContent: "end",
});
export const LogoImage = styled("div")({
  width: "109px",
  height: "26px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});

export default TestimonialWrapper;
