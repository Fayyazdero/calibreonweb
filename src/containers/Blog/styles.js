import styled from "styled-components";

export const Wrapper = styled.div`
    column-count: 2;
    column-gap: 68px;
    column-fill: balance;
    @media(max-width:992px){
        column-count: 1;
    }
`;
export const Item = styled.div`
    display: inline-block;
    margin: 0 0 84px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    width: 100%;
    @media(max-width:992px){
        margin: 0 0 54px;
    }
`
export const Title = styled.div`
    margin-bottom: 72px;
    width: 292px;
    div {
        width: 100%;
    }
    @media(max-width:992px){
        width: max-content;
        margin: 0 auto;
        margin-bottom: 24px;
        div {
            text-align: center;
            width: 100%;
            h2 {
                padding: 24px;
            }

        }
    }
`