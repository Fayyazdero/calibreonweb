import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Twitter, Instagram, LinkedIn } from "../Svgs";
import StyledSection, {
  CopyRightContent,
  LogoWrapper,
  NavLinks,
  SocialIcons,
  Title,
} from "./styles";
import Link from "next/link";
import Logo from "/public/images/light-logo.png";
import Image from "next/image";
import { contact, linksData, menuData } from "./footerData";

const Footer = () => {
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col md={5}>
            <Title>Join The Community</Title>
            <SocialIcons>
              <Instagram height={32} color={"#FFFFFF"} />
              <Twitter height={32} color={"#FFFFFF"} />
              <Facebook height={32} color={"#FFFFFF"} />
              <LinkedIn height={32} color={"#FFFFFF"} />
            </SocialIcons>
          </Col>
          <Col md={2}>
            <Title>Menu</Title>
            {menuData.map((item, key) => {
              return (
                <div key={key}>
                  <NavLinks>
                    <Link href={item.link}>{item.title}</Link>
                  </NavLinks>
                </div>
              );
            })}
          </Col>
          <Col md={2}>
            <NavLinks>
              <Title>Useful Links</Title>
              {linksData.map((item, key) => {
                return (
                  <Link key={key} href={item.link}>
                    {item.title}
                  </Link>
                );
              })}
            </NavLinks>
          </Col>
          <Col md={3}>
            <NavLinks>
              <Title>Contact</Title>
              {contact.map((item, key) => {
                return (
                  <Link key={key} href={item.link}>
                    {item.title}
                  </Link>
                );
              })}
            </NavLinks>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <LogoWrapper>
              <Image src={Logo} alt="logo-light" />
            </LogoWrapper>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <CopyRightContent>
              © 2023 CALIBREON INTERNATIONAL PVT. LTD. ALL RIGHTS RESERVED.
            </CopyRightContent>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Footer;
