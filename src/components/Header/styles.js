import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.quotes};
  color: ${({ theme: { colors } }) => colors.grey};
  padding-bottom: 10px;
  &.active {
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semi_bold};
    border-bottom: 4px solid #f05b25;
    transition: 0.1s ease;
  }
  
  &:hover {
    color: ${({ theme: { colors } }) => colors.grey};
  }
}`;

export const NavButtonsWrapper = styled.div``;
export const LinksWrapper = styled.div``;
