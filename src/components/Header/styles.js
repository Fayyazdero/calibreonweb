import styled from "styled-components";
import Link from "next/link";
import { NavDropdown, Navbar } from "react-bootstrap";

export const StyledLink = styled(Link)`
  font-family: "Hind Madurai";
  font-style: normal;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.quotes};
  color: ${({ theme: { colors } }) => colors.grey} !important;
  padding-bottom: 10px;
  margin-top:16px;
  &.active {
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.semi_bold};
    margin-top:0;
    border-bottom: 4px solid #f05b25;
    transition: 0.1s ease;
  }
  
  &:hover {
    color: ${({ theme: { colors } }) => colors.grey};
  }
}`;

export const StyledDropdownLink = styled(NavDropdown.Item)`
  // @media (max-width: 991px) {
  //   display: none !important;
  // }
`;
export const StyledNavDropdown = styled(NavDropdown)`
  display: flex;
  align-items: center;
  a {
    font-family: "Hind Madurai";
    font-style: normal;
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.normal};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.xl};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.quotes};
    color: ${({ theme: { colors } }) => colors.grey} !important;
    margin-top: 0;
    padding: 0;
    &.active {
      font-weight: ${({ theme: { fontWeights } }) => fontWeights.semi_bold};
      margin-top: 0;
      border-bottom: 4px solid #f05b25;
      transition: 0.1s ease;
    }

    &:hover {
      color: ${({ theme: { colors } }) => colors.grey};
    }

    &::after {
      content: "";
      display: none;
    }
  }

  @media (max-width: 991px) {
    display: none !important;
  }
`;

export const LinksWrapperMobile = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
  @media (max-width: 991px) {
    margin-bottom: 16px;
    margin-top: 14px;
    & a {
      padding-bottom: 0;
    }
  }
`;

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
  }import { StyledLink } from './styles';

`;

export const NavButtonsWrapperForMobile = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
  @media (max-width: 991px) {
    position: absolute;
    bottom: 110px;
  }

  & button {
    padding: 8px 20px;
    font-size: 6px
  }
`;
export const NavButtonsWrapper = styled.div`
display: flex;
  @media (max-width: 991px) {
    position: absolute;
    bottom: 110px;
  }

  & button {
    padding: 8px 20px;
    font-size: 14px
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

  .dropdown {
    &.active {
      > a:first-child {
        font-weight: ${({ theme: { fontWeights } }) => fontWeights.semi_bold};
        margin-top: 0;
        border-bottom: 4px solid #f05b25;
        transition: 0.1s ease;
      }
    }
  }
  & .dropdown-menu {
    padding: 26px !important;
    width: 233px;
    border-radius: 22px;
    a {
      font-family: "Hind Madurai";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
      line-height: 23px;
      display: flex;
      align-items: center;
      padding-bottom: 8px;
      color: #000000;
      margin: 0 !important;
      &.active {
        background: transparent !important;
      }
    }
    a:hover {
      background: transparent;
      font-weight: 700;
    }
  }
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
