import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Twitter, Instagram, LinkedIn } from "../Svgs";
import StyledSection, {
  CopyRightContent,
  LogoWrapper,
  NavLinks,
  SocialIcons,
  Title,
  RowSelected,
  ColSelected
} from "./styles";
import Link from "next/link";
import Logo from "/public/images/light-logo.png";
import Image from "next/image";
import { contact, linksData, menuData } from "./footerData";

const Footer = () => {
  return (
    <StyledSection>
      <Container>
        <RowSelected>
          <ColSelected md={5}>
            <Title>Join The Community</Title>
            <SocialIcons>
              <Instagram height={32} color={"#FFFFFF"} />
              <Twitter height={32} color={"#FFFFFF"} />
              <Facebook height={32} color={"#FFFFFF"} />
              <LinkedIn height={32} color={"#FFFFFF"} />
            </SocialIcons>
          </ColSelected>
          <Col xs={6} md={2}>
            <Title>Menu</Title>
            {menuData.map((item) => {
              return (
                <div key={item.id}>
                  <NavLinks>
                    <Link href={item.link}>{item.title}</Link>
                  </NavLinks>
                </div>
              );
            })}
          </Col>
          <Col xs={6} md={2}>
            <NavLinks>
              <Title>Useful Links</Title>
              {linksData.map((item) => {
                return (
                  <Link key={item.id} href={item.link}>
                    {item.title}
                  </Link>
                );
              })}
            </NavLinks>
          </Col>
          <Col xs={12} md={3}>
            <NavLinks>
              <Title>Contact</Title>
              {contact.map((item) => {
                return (
                  <Link key={item.id} href={item.link}>
                    {item.title}
                  </Link>
                );
              })}
            </NavLinks>
          </Col>
        </RowSelected>
        <RowSelected>
          <Col md={4}>
            <LogoWrapper>
              <Image src={Logo} alt="logo-light" />
            </LogoWrapper>
          </Col>
        </RowSelected>
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
