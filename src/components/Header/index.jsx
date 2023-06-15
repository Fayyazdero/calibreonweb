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
  StyledNavDropdown,
  StyledDropdownLink,
  LinksWrapperMobile,
  NavButtonsWrapperForMobile
} from "./styles";
import Button from "../Button";
import { useRouter } from "next/router";
import { CrossIcon, Facebook, Instagram, LinkedIn, Twitter } from "../Svgs";

let navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
    dropdown: true,
    dropdownItems: [
      {
        _id: 1,
        title: "Accounting",
        link: "/services/accounting",
      },
      {
        _id: 2,
        title: "Animation",
        link: "/services/animation",
      },
      {
        _id: 3,
        title: "Architecture",
        link: "/services/architecture",
      },
      {
        _id: 4,
        title: "E Commerce",
        link: "/services/ecommerce",
      },
      {
        _id: 5,
        title: "Film & Tv",
        link: "/services/filmandtv",
      },
      {
        _id: 6,
        title: "Web Development",
        link: "/services/webdevelopment",
      },
      {
        _id: 7,
        title: "Human Resources",
        link: "/services/humanresource",
      },
    ],
  },
  {
    id: 4,
    title: "Team",
    link: "/departments",
  },
  {
    id: 5,
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
    if (router.pathname.includes("services")) {
      setActive("/services");
    } else if (router.pathname.includes("department")) {
      setActive("/departments");
    } else if (router.pathname.includes("blog")) {
      setActive("/blog");
    } else {
      setActive(router.pathname);
    }
  }, [router.pathname]);
  console.log('pathname', router.pathname)

  const handleClick = (link) => {
    setActive(link);
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleClickOnItem = (e, link) => {
    e.preventDefault();
    router.push(link);
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
          id="basic-navbar-nav">
          <Nav>
            <Overlay />
            {navLinks?.map((item) => {
              if (item.dropdown) {
                return (
                  <>
                    <StyledNavDropdown
                      key={item.id}
                      title={item.title}
                      id="nav-dropdown"
                      className={active == item.link ? "active" : ""}
                      show={dropdownOpen}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                      >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <StyledDropdownLink
                          key={dropdownItem._id}
                          href={dropdownItem.link}
                          onClick={(e) =>
                            handleClickOnItem(e, dropdownItem.link)
                          }>
                          {dropdownItem.title}
                        </StyledDropdownLink>
                      ))}
                    </StyledNavDropdown>
                    <LinksWrapperMobile>
                      <StyledLink
                        onClick={() => {
                          handleClick(item.link);
                        }}
                        className={`mx-3 text-decoration-none text-dark styled-link ${
                          active === item.link ? "active" : ""
                        }`}
                        href={item.link}>
                        {item.title}
                      </StyledLink>
                    </LinksWrapperMobile>
                    <NavButtonsWrapperForMobile>
                      <Button
                        className="mx-2"
                        variant="outlined"
                        onClick={() => {
                          router.push("/enroll-now");
                          setIsOpen((prevState) => !prevState);
                        }}>
                        Enroll Now
                      </Button>
                      <Button
                        className="mx-2"
                        variant="contained"
                        onClick={() => {
                          router.push("/contact-us");
                          setIsOpen((prevState) => !prevState);
                        }}>
                        Contact Us
                      </Button>
                    </NavButtonsWrapperForMobile>
                  </>
                );
              } else {
                return (
                  <LinksWrapper key={item.id}>
                    <StyledLink
                      onClick={() => {
                        handleClick(item.link);
                      }}
                      className={`mx-3 text-decoration-none text-dark styled-link ${
                        active === item.link ? "active" : ""
                      }`}
                      href={item.link}>
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
            variant="outlined"
            onClick={() => router.push("/enroll-now")}>
            Enroll Now
          </Button>
          <Button
            className="mx-2"
            variant="contained"
            onClick={() => router.push("/contact-us")}>
            Contact Us
          </Button>
        </NavButtonsWrapper>
      </Container>
    </Navbar>
  );
}

export default Header;
