import React from "react";
import Button from "../Button";
import Wrapper, {
  Content,
  InputName,
  StyledTextArea,
  SubmitWrapper,
  Title,
  WrapperPolicy,
} from "./styles";
import Input from "../Input";
import Link from "next/link";

const ContactForm = () => {
  return (
    <Wrapper>
      <Title>Leave Us Message</Title>
      <InputName>
        <Input
          placeholder={"First Name"}
          borderBottom
          width={184}
          textColor={"#FFFF"}
          placeholderTextColor={"#FFFF"}
        />
        <Input
          placeholder={"Last Name"}
          borderBottom
          width={184}
          textColor={"#FFFF"}
          placeholderTextColor={"#FFFF"}
          mLeft={29}
        />
      </InputName>
      <Input
        placeholder={"Your Email"}
        className="mt-5"
        borderBottom
        width={"398.53"}
        type={"email"}
        textColor={"#FFFF"}
        placeholderTextColor={"#FFFF"}
        mLeft={50}
      />
      <Input
        placeholder={"Company"}
        className="mt-5"
        borderBottom
        width={"398.53"}
        type={"email"}
        textColor={"#FFFF"}
        placeholderTextColor={"#FFFF"}
        mLeft={50}
      />
      <Input
        placeholder={"Bussiness Phone"}
        className="mt-5"
        borderBottom
        width={"398.53"}
        type={"email"}
        textColor={"#FFFF"}
        placeholderTextColor={"#FFFF"}
        mLeft={50}
      />
      <StyledTextArea
        as="textarea"
        placeholder="Bio"
        style={{ height: "100px" }}
      />
      <WrapperPolicy>
        <Input type="checkbox" />
        <Content>
          I agree to the CalibreOn International
          <Link href="#"> privacy policy.</Link>
        </Content>
      </WrapperPolicy>
      <SubmitWrapper>
        <Button
          className="add-padding"
          type="Submit"
          variant={"formButton"}
          text={"Submit"}
        />
      </SubmitWrapper>
    </Wrapper>
  );
};

export default ContactForm;
