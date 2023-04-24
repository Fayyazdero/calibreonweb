import styled from "styled-components";

export const Wrapper = styled.div`
    column-count: 2;
    column-gap: 68px;
    column-fill: balance;
`;
export const Item = styled.div`
    display: inline-block;
    margin: 0 0 40px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    width: 100%;
`
export const Title = styled.div`
    margin-bottom: 72px;
    width: 292px;
    div {
        width: 100%;
    }
`