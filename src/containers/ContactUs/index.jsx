import { Heading } from "@/components/Heading";
import React from "react";
import {
  Content,
  HeadingWrapper,
  StyledContainer,
  TitleWrapper,
  ColSelected
} from "./styles";
import { Col, Row } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const ContactUs = () => {
  return (
    <StyledContainer>
      <HeadingWrapper>
        <Heading variant="subHeading" title="Contact Us" />
      </HeadingWrapper>
      <Row>
        <ColSelected sm={12} md={12} lg={6}>
          <TitleWrapper>
            <Heading variant="contactTitle" className="heading">
              We're here to help
              <Image src="/images/send-message.png" width={48} height={36} alt="arrow-icon" />
            </Heading>
          </TitleWrapper>
          <Content>Leave us a message and we will get back to you. </Content>
        </ColSelected>
        <Col sm={12} md={12} lg={6}>
          <ContactForm message={"Leave Us a message!"} />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ContactUs;
