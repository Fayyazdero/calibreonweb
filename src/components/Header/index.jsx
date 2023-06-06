import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/public/logo.svg";
import { useEffect, useState } from "react";
import {
  LinksWrapper,
  NavButtonsWrapper,
  NavbarIconWrapper,
  SocialIcons,
  SocialTitle,
  SocialWrapper,
  StyledLink,
  StyledNavbarCollapse,
  Overlay,
  ToggleButton,
  NavbarWrapper,
} from "./styles";
import Button from "../Button";
import { useRouter } from "next/router";
import { CrossIcon, Facebook, Instagram, LinkedIn, Twitter } from "../Svgs";

let navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
    dropdown: true,
    dropdownItems: [
      {
        title: "Service 1",
        link: "/services/service1",
      },
      {
        title: "Service 2",
        link: "/services/service2",
      },
      {
        title: "Service 3",
        link: "/services/service3",
      },
    ],
  },
  {
    title: "Team",
    link: "/departments",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

function Header() {
  const router = useRouter();

  const [active, setActive] = useState(router.pathname);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const regex = /\/([^/]+)/;
    const result = active.match(regex);
    const path = result ? result[0] : router.pathname;
    setActive(path);
  }, [router.pathname]);

  const handleClick = (link) => {
    setActive(link);
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleDropdownItemSelect = (link) => {
    handleClick(link);
    setDropdownOpen(false);
  };

  return (
    <Navbar bg="white" expand="lg" expanded={isOpen}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="logo" height="100%" />
        </Navbar.Brand>
        <ToggleButton
          aria-controls="basic-navbar-nav"
          onClick={handleMenuToggle}
        />
        <StyledNavbarCollapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav>
            <Overlay />
            {navLinks?.map((item, key) => {
              if (item.dropdown) {
                return (
                  <NavDropdown
                    key={key}
                    title={item.title}
                    id="nav-dropdown"
                    className={active === item.link ? "active" : ""}
                    show={dropdownOpen}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.dropdownItems?.map((dropdownItem, index) => (
                      <NavDropdown.Item
                        key={index}
                        onSelect={() => handleDropdownItemSelect(dropdownItem.link)}
                        href={dropdownItem.link}
                        className={active === dropdownItem.link ? "active" : ""}
                      >
                        {dropdownItem.title}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else {
                return (
                  <LinksWrapper key={key}>
                    <StyledLink
                      onClick={() => {
                        handleClick(item.link);
                      }}
                      className={`mx-3 text-decoration-none text-dark styled-link ${
                        active === item.link ? "active" : ""
                      }`}
                      href={item.link}
                    >
                      {item.title}
                    </StyledLink>
                  </LinksWrapper>
                );
              }
            })}
          </Nav>

          <SocialWrapper>
            <SocialTitle>Join the community</SocialTitle>
            <SocialIcons>
              <Instagram height={31} color="#4D4D4D" />
              <Twitter height={25} color="#4D4D4D" />
              <Facebook height={25} color="#4D4D4D" />
              <LinkedIn height={23} color="#4D4D4D" />
            </SocialIcons>
          </SocialWrapper>
          <NavbarIconWrapper onClick={handleMenuToggle}>
            <CrossIcon height={13} width={13} />
          </NavbarIconWrapper>
        </StyledNavbarCollapse>
        <NavButtonsWrapper>
          <Button
            className="mx-2"
            variant="contained"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </Button>
        </NavButtonsWrapper>
      </Container>
    </Navbar>
  );
}

export default Header;
