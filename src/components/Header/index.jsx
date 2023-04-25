import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/public/logo.svg";
import { useState } from "react";
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

function Header() {
  const router = useRouter();
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
    },
    {
      title: "Team",
      link: "/team",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];

  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    setActive(index);
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Navbar bg="white" expand="lg" expanded={isOpen}>
      <Container>
        <Navbar.Brand href="#home">
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
            {navLinks.map((item, key) => (
              <LinksWrapper key={key}>
                <StyledLink
                  onClick={() => {
                    handleClick(key);
                  }}
                  className={`mx-3 text-decoration-none text-dark styled-link ${
                    active === item.link ? "active" : ""
                  }`}
                  href={item.link}
                >
                  {item.title}
                </StyledLink>
              </LinksWrapper>
            ))}
          </Nav>
          <NavButtonsWrapper>
            <Button className="mx-2" variant="contained">
              Contact Us
            </Button>
          </NavButtonsWrapper>
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
      </Container>
    </Navbar>
  );
}

export default Header;
