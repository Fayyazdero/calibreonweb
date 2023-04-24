import styled from "styled-components";

export const FaqWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const Wrapper = styled.div((props) => {
  return {

    [`@media screen and (max-width: ${props.theme.breakPoints.xs}px)`]: {
      "& p": {
        textAlign: "justify"
      }
    },
  };
});
