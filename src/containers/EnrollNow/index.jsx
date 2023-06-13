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

const EnrollNow = () => {
  return (
    <StyledContainer>
      <HeadingWrapper>
        <Heading variant="subHeading" title="Enroll Now" />
      </HeadingWrapper>
      <Row>
        <ColSelected sm={12} md={12} lg={6}>
          <TitleWrapper>
            <Heading variant="contactTitle" className="heading">
              We're here to help
              <Image src="/images/send-message.png" width={48} height={36} alt="arrow-icon" />
            </Heading>
          </TitleWrapper>
          <Content>Apply for the Open position! </Content>
        </ColSelected>
        <Col sm={12} md={12} lg={6}>
          <ContactForm message={"Apply NOW!"} />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default EnrollNow;
