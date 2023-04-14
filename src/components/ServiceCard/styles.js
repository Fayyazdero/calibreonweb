import { Col, Row } from "react-bootstrap";
import styled, { css } from "styled-components";
export const Background = styled.div`
  background: #6622CC;
  border-radius: 20px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(Row)({
  display: "flex",
  height: "auto",
  display: "flex",
  gap: '80px',
});
export const Media = styled(Col)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
})
export const ImageWrapper = styled("div")({
  position: 'absolute',
  display: 'block',
  width: "100%",
  height: "100%",
  transform: 'translateY(-163px)',
  left: 0,
  top: 0,
});
export const ContentWrapper = styled(Col)({
  position: 'relative',
  zIndex: '2',
});
export const Title = styled("h1")({
  fontFamily: "Montserrat",
  fontWeight: "800",
  fontSize: "45px",
  color: "#FFFF",
});
export const CategoryTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginBottom: "2px",
    fontWeight: "800",
  },
  "& h4": {
    color: "#FFFF",
    margin: "0",
    marginLeft: "6px",
    fontWeight: "300",
    fontSize: "13px",
  },
});
export const CardWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 36px;
  ${({direction, variant, top, size, theme:{colors}}) => css`
    margin-top : ${top || 0};
    min-height: ${direction !== 'column' ? '304px': '675px'};
    ${Wrapper} {
      flex-direction: ${direction}
    }
    ${ImageWrapper} {
      
    }
    ${ContentWrapper} {
      margin-top: ${direction === 'column' ? '333px' : '48px'};
    }
    ${Background} {
      background: ${colors[variant]}
    }
  `}
`
export default Wrapper;
