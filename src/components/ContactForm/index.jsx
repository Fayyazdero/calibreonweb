import React, { useState } from "react";
import Button from "../Button";
import Wrapper, {
  Content,
  NameInputs,
  StyledTextArea,
  SubmitWrapper,
  HeadingWrapper,
  WrapperPolicy,
  ContactInputs,
} from "./styles";
import Input from "../Input";
import Link from "next/link";
import { Heading } from "../Heading";

const ContactForm = () => {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading variant="formTitle"> Leave Us Message</Heading>
      </HeadingWrapper>
      <NameInputs>
        <Input placeholder={"First Name"} width={184} variant="contact" />
        <Input
          placeholder={"Last Name"}
          width={184}
          mLeft={29}
          variant="contact"
        />
      </NameInputs>
      <ContactInputs>
        <Input
          placeholder={"Your Email"}
          className="mt-5"
          variant="contact"
          width={"398.53"}
          type={"email"}
        />
        <Input
          placeholder={"Company"}
          className="mt-5"
          variant="contact"
          width={"398.53"}
          type={"email"}
        />
        <Input
          placeholder={"Bussiness Phone"}
          className="mt-5"
          variant="contact"
          width={"398.53"}
          type={"email"}
        />
        <StyledTextArea as="textarea" placeholder="Bio" />
      </ContactInputs>
      <WrapperPolicy>
        <Input variant="checkbox" />
        <Content>
          I agree to the CalibreOn International
          <Link href="#"> privacy policy.</Link>
        </Content>
      </WrapperPolicy>
      <SubmitWrapper>
        <Button variant="outlined" className="submit-button">
          Submit
        </Button>
      </SubmitWrapper>
    </Wrapper>
  );
};

export default ContactForm;
