import styled from "styled-components";

export const ImageWrapper = styled.div`
position: relative;
margin: 26px 0;

& .cover-img {
    width: 100%;
    height: 266px;
}`;

export const BlogTitle = styled("div")(({ theme: { spacing }}) => {
  return {
    marginTop: `${spacing * 33}px`,
    marginBottom: `${spacing * 20}px`,
    width: "100%",
  }
});

  export const TypoWrapper = styled("div")(({ theme: { spacing }}) => {
    return {
      marginBottom: `${spacing * 30}px`,
      textAlign: "justify"
    }
  });

  export const Title = styled("h2")(({ theme: { fontWeights, fontSizes }}) => {
    return {
      fontFamily: "Montserrat",
      fontWeight: fontWeights.bold,
      fontSize: fontSizes.h2Title,
      letterSpacing: "-2.3%",
      margin: "0",
      borderBottom: "4px solid #4D4D4D",
      width: "auto",
      display: "inline-block",
      '@media(max-width: 992px)': {
        fontSize: fontSizes["4xl"],
        width: "100%",
        minWidth: "100%", 
      }
    }
  });

  export const SubTitle = styled("h4")(({ theme: { spacing, fontSizes, fontWeights }}) => {
    return {
      fontFamily: "Inter",
      fontStyle: "oblique",
      fontWeight: fontWeights.normal,
      fontSize: fontSizes.small,
      letterSpacing: "-2.2%",
      margin: "0",
      textTransform: "uppercase",
      marginTop: `${spacing * 3}px`,
    }
  });

export const UserImage   = styled.div`
position: absolute;
bottom: -70px;
left: ${({ theme: { spacing } }) => spacing * 13}px;

& img {
    height: 166px;
    width: 166px;
}`