import styled from "styled-components";

export const ImageWrapper = styled.div`
position: relative;
margin: 26px 0;

& .cover-img {
    width: 100%;
    height: 266px;
}`;

export const BlogTitle = styled("div")({
    // marginLeft: "19px",
    marginTop: "65px",
    marginBottom: "41px",
    width: "100%",
    '@media(max-width: 992px)': {
      // marginLeft: "16px",
    }
  });

  export const TypoWrapper = styled("div")({
    marginBottom: "60px",
    textAlign: "justify"
  });

  export const Title = styled("h2")({
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: "44px",
    letterSpacing: "-2.3%",
    margin: "0",
    borderBottom: "4px solid #4D4D4D",
    width: "auto",
    display: "inline-block",
    // minWidth: "70%",
    '@media(max-width: 992px)': {
      fontSize: "32px",
      width: "100%",
      minWidth: "100%", 
    }
  });

  export const SubTitle = styled("h4")({
    fontSize: "32px",
    fontFamily: "Inter",
    fontStyle: "oblique",
    fontWeight: "500",
    fontSize: "12px",
    letterSpacing: "-2.2%",
    margin: "0",
    textTransform: "uppercase",
    marginTop: "6px",
  });

export const UserImage   = styled.div`
position: absolute;
bottom: -70px;
left: 26px;

& img {
    height: 166px;
    width: 166px;
}`