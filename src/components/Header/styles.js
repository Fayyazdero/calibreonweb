import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #4d4d4d;

  &.active {
    font-weight: 600;
    border-bottom: 4px #f05b25;
  }

  &:hover {
    color: #4d4d4d;
  }
`;

export const NavButtonsWrapper = styled.div`
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #4d4d4d;

  &.active {
    font-weight: 600;
    border-bottom: 4px #f05b25;
  }
  & a {
    color: red;
  }
  &:hover {
    color: #4d4d4d;
  }
`;
export const LinksWrapper = styled.div``;
