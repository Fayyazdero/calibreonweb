const { default: styled } = require("styled-components");

const TestimonialWrapper = styled("div")(({ theme: { colors } }) => ({
  background: `${colors.primary}`,
  borderRadius: "19px",
  padding: "28px",
  color: `${colors.white}`,
}));
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
