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
  LoadingWrapper,
} from "./styles";
import Input from "../Input";
import Link from "next/link";
import { Heading } from "../Heading";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ message }) => {
  const [isLoading, setIsLoading] = useState(false);
  const notify = () => toast("Email Sent Successfully!");
  const warning = () => toast.warn("Please fill the form Below!");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyEmail: "",
    businessEmail: "",
    bio: "",
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (
      formData.firstName.length &&
      formData.email.length &&
      formData.bio.length &&
      formData.checked
    ) {
      setIsLoading(true);
      // Send the email using EmailJS
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        notes: formData.bio,
        email: formData.email,
        companyEmail: formData.companyEmail,
        businessEmail: formData.businessEmail,
      };

      emailjs
        .send(
          "service_k24e8yv",
          "template_to0if9c",
          templateParams,
          "t54bmqlFcSMmptpKl"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setIsLoading(false);
            notify();
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              companyEmail: "",
              businessEmail: "",
              bio: "",
              checked: false,
            });
          },
          (err) => {
            console.log("FAILED...", err);
            setIsLoading(false);
          }
        );
    }
    warning();
  };

  if (isLoading) {
    return (
      <LoadingWrapper>
        <ThreeDots color="#F05B25" />
      </LoadingWrapper>
    );
  }

  return (
    <Wrapper>
      <HeadingWrapper>
        <Heading variant="formTitle">{message}</Heading>
      </HeadingWrapper>
      <NameInputs>
        <Input
          placeholder={"First Name"}
          name="firstName"
          width={184}
          variant="contact"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          placeholder={"Last Name"}
          name="lastName"
          width={184}
          mLeft={29}
          variant="contact"
          value={formData.lastName}
          onChange={handleChange}
        />
      </NameInputs>
      <ContactInputs>
        <Input
          placeholder={"Your Email"}
          name="email"
          className="mt-5"
          variant="contact"
          width={"398.53"}
          type={"email"}
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          placeholder={"Company"}
          name="companyEmail"
          className="mt-5"
          variant="contact"
          width={"398.53"}
          type={"email"}
          value={formData.companyEmail}
          onChange={handleChange}
        />
        <Input
          placeholder={"Bussiness Phone"}
          name="businessEmail"
          className="mt-5"
          variant="contact"
          width={"398.53"}
          type={"email"}
          value={formData.businessEmail}
          onChange={handleChange}
        />
        <StyledTextArea
          as="textarea"
          placeholder="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />
      </ContactInputs>
      <WrapperPolicy>
        <Input
          variant="checkbox"
          name="checked"
          type="checkbox"
          checked={formData.checked}
          onChange={handleChange}
        />
        <Content>
          I agree to the CalibreOn International
          <Link href="#"> privacy policy.</Link>
        </Content>
      </WrapperPolicy>
      <ToastContainer position="top-right" />
      <SubmitWrapper>
        <Button
          variant="outlined"
          className="submit-button"
          onClick={handleSubmit}>
          Submit
        </Button>
      </SubmitWrapper>
    </Wrapper>
  );
};

export default ContactForm;
