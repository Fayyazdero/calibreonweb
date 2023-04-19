import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "/public/logo.svg";
import { useState } from "react";
import { LinksWrapper, NavButtonsWrapper, StyledLink } from "./styles";
import Button from "../Button";

function Header() {
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

  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} alt="logo" height="100%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav>
            {navLinks.map((item, key) => (
              <LinksWrapper key={key}>
                <StyledLink
                  onClick={() => handleClick(key)}
                  className={`mx-3 text-decoration-none text-dark styled-link ${
                    active === key ? "active" : ""
                  }`}
                  href={item.link}
                >
                  {item.title}
                </StyledLink>
              </LinksWrapper>
            ))}
          </Nav>
        </Navbar.Collapse>
        <NavButtonsWrapper>
          <Button className="mx-2" variant="contained">
            Login
          </Button>
          <Button className="mx-2" variant="outlined">
            Sign UP
          </Button>
        </NavButtonsWrapper>
      </Container>
    </Navbar>
  );
}

export default Header;
