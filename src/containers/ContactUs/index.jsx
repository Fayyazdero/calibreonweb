import { Heading } from "@/components/Heading";
import React from "react";
import {
  Content,
  HeadingWrapper,
  StyledContainer,
  TitleWrapper,
} from "./styles";
import { Col, Row } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";
import { SendIcon } from "@/components/Svgs";
import Image from "next/image";

const ContactUs = () => {
  return (
    <StyledContainer>
      <HeadingWrapper>
        <Heading variant="subHeading" title="Contact Us" />
      </HeadingWrapper>
      <Row>
        <Col sm={12} md={4}>
          <TitleWrapper>
            <Heading variant="contactTitle" className="heading">
              We're here to help
              <Image src="/images/send-message.png" width={48} height={36} />
            </Heading>
          </TitleWrapper>
          <Content>Leave us a message and we will get back to you. </Content>
        </Col>
        <Col sm={12} md={{ span: 7, offset: 1 }}>
          <ContactForm />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ContactUs;
