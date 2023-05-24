import { Heading } from "@/components/Heading";
import React, {useState, useEffect} from "react";
import {
  Content,
  HeadingWrapper,
  StyledContainer,
  TitleWrapper,
  LoadingWrapper
} from "./styles";
import { Col, Row } from "react-bootstrap";
import ContactForm from "@/components/ContactForm";
import { SendIcon } from "@/components/Svgs";
import Image from "next/image";
import { ThreeDots } from 'react-loader-spinner';

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false);
    },2000)
  }, []);

  if(isLoading) {
    return <LoadingWrapper>
      <ThreeDots color="#F05B25" />
    </LoadingWrapper>
  }   

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
              <Image src="/images/send-message.png" width={48} height={36} alt="arrow-icon" />
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
