import React from "react";
import logo from "../../assests/testimonial-logo-a.png";
import Image from "next/image";
import Wrapper, { Content, LogoImage, LogoWrapper } from "./styles";

const TestimonialCard = () => {
  return (
    <Wrapper>
      <Content>
        Razia has been a great resource, knowledgeable, communicative, open to
        suggestions and ready to bring her advice to improve the accounting
        processes and systems - it's important to mention her experience with
        Hong Kong accounting standards, her expertise with Xero, and her insight
        on E-commerce Dropshipping businesses is really commendable - looking
        forward to having her for a long term
      </Content>
      <LogoWrapper>
        <LogoImage>
          <Image src={logo} alt="Logo" />
        </LogoImage>
      </LogoWrapper>
    </Wrapper>
  );
};

export default TestimonialCard;
