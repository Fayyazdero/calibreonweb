import styled from "styled-components";

export const ImageWrapper = styled.div`
position: relative;
margin: 26px 0;

& .cover-img {
    width: 100%;
    height: 266px;
}`;

export const UserImage   = styled.div`
position: absolute;
bottom: -70px;
left: 26px;

& img {
    height: 166px;
    width: 166px;
}`