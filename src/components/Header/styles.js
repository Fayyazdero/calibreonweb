import styled from "styled-components";
import Link from "next/link";
import { Navbar } from "react-bootstrap";

export const StyledLink = styled(Link)`
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #4d4d4d;
  padding-bottom: 10px;
  margin-top:16px;
  &.active {
    font-weight: 600;
    margin-top:0;
    border-bottom: 4px solid #f05b25;
    transition: 0.1s ease;
  }

  &:hover {
    color: #4d4d4d;
  }
}`;
export const ToggleButton = styled(Navbar.Toggle)`
z-index: 3;
&:focus{
  box-shadow:none;
}
}`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 200vh;
  left: -100%;
  top: 0;
  z-index: 0;
  background: grey;
  opacity: 0.6;
  transition: opacity 0.3s ease-in-out;
  @media (min-width: 991px) {
    display: none !important;
  }
`;

export const NavButtonsWrapper = styled.div`
  @media (max-width: 991px) {
    position: absolute;
    left: 21px;
    bottom: 110px;
    margin-right: 20px;
  }
`;
export const LinksWrapper = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 16px;
    margin-top: 14px;
    & a {
      padding-bottom: 0;
    }
  }
`;

export const StyledNavbarCollapse = styled(Navbar.Collapse)`
  z-index: 2;
  @media (max-width: 991px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 60%;
    background: #f5f5f5;
    height: 100%;
    z-index: 999;
    transition: 0.3s ease-in-out;
    padding-top: 61px;
    padding-left: 28px;
    &.show {
      right: 0;
    }
    & .styled-link {
      margin-bottom: 40px;
    }
  }
`;
export const SocialWrapper = styled.div`
  display: none;
  @media (max-width: 991.98px) {
    display: block;
    position: absolute;
    bottom: 30px;
  }
`;
export const SocialTitle = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #4d4d4d;
  margin: 0;
  text-transform: capitalize;
`;
export const SocialIcons = styled.div`
  @media (max-width: 991.98px) {
    margin-top: 10px;
    display: flex;
    & svg {
      margin-right: 15px;
    }
  }
`;
export const NavbarIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 34px;
  margin-right: 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 991.98px) {
    display: block;
  }
`;
