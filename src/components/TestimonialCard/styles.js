import styled from "styled-components";

const TestimonialWrapper = styled("div")(({ theme: { colors } }) => ({
  background: `${colors.primary}`,
  borderRadius: "19px",
  padding: "28px",
  color: `${colors.white}`,
  zIndex: "2",
  "@media screen and (max-width: 992px)": {
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
  "@media (max-width: 992px)": {
    display: "none",
  },
});
export const LogoImage = styled("div")({
  width: "109px",
  height: "26px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});

export const UserWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 24px;
  padding-bottom: 16px;
  @media (min-width: 992px) {
    display: none !important;
  }
`;
export const Details = styled.div`
  font-family: "Hind Madurai";
  font-style: normal;
  width: 100%;
  text-align: right;
  margin-right: 6px;
`;
export const UserName = styled.h2`
  border-bottom: 1px solid #ffffff;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
`;
export const Role = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
export const UserImage = styled.div``;

export default TestimonialWrapper;
