import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  &.styled-link {
    font-family: "Hind Madurai";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #4d4d4d;
    padding-bottom: 10px;
  }
  &.active {
    font-weight: 600;
    border-bottom: 4px solid #f05b25;
    transition: 0.1s ease;
  }

  &:hover {
    color: #4d4d4d;
  }
`;

export const NavButtonsWrapper = styled.div``;
export const LinksWrapper = styled.div``;
