import styled from "styled-components";

export const FaqWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const Wrapper = styled.div``;

// export const SubHeadingWrapper = styled.div`
//   width: 292px;
//   padding: 20px 0 10px 0;
//   @media (max-width: 768px) {
//     width: 192px;
//     padding: 10px 0 30px 0;
//     text-align: center;
//     margin: auto;
//     font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
//   }
// `;

export const SubHeadingWrapper = styled.div(({ variant, theme: { heading}}) => ({
  width: "292px",
  padding: "20px 0 10px 0",
  "@media screen and (max-width: 768px)": {
    width: "192px",
    padding: "10px 0 30px 0",
    textAlign: "center",
    margin: "auto",
    fontSize: `${heading[variant]["768px"].fontSize}`,
  },
}))
