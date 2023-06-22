import styled from "styled-components";

const TestimonialWrapper = styled("div")(({ theme: { colors } }) => ({
  background: `${colors.primary}`,
  borderRadius: "19px",
  padding: "28px",
  color: `${colors.white}`,
  zIndex: "2",
  "@media screen and (max-width: 992px)": {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: "60% !important",
    height: "220px",
  },
}));
export const Content = styled("p")({
  fontFamily: "Hind Madurai",
  fontWeight: "700",
  fontSize: "19px",
  "@media screen and (max-width: 992px)": {
    height: "80px",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
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
