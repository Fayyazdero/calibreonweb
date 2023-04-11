import React from "react";
import { Heading } from "@/components/Heading";
import Input from "@/components/Input";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import home from "../../assests/home.png";
import newsletter from "../../assests/newsletter.png";
import Typo from "@/components/Typo";
import { HomeHeadingWrapper, NewsLetterWrapper } from "@/styles/Home.module";
import Layout from "@/components/Layout";

const Homepage = () => {
  return (
    <Layout>
      <div>
        <Container>
          <Row className="my-5">
            <Col md={6}>
              <Image src={home} alt="home" />
            </Col>
            <Col md={6}>
              <HomeHeadingWrapper>
                <Heading
                  heading="Grow with"
                  styledHeading=" Calibreon International"
                  fontSize="80"
                />
                <Typo
                  width={450}
                  className="my-3"
                  typoText="That thrives in the today’s digital landscape by elevating your business to new heights. So, Choose Calibreon International for premium back office support."
                />
                <Input
                  className="mt-5"
                  placeholder="Search for Services"
                  formBtnText="submit"
                  variant="contained"
                  showBtn
                  color={"black"}
                />
              </HomeHeadingWrapper>
            </Col>
          </Row>
          <NewsLetterWrapper className="my-5">
            <Row>
              <Col md={6}>
                <Heading
                  styledHeading=" Join US"
                  heading="News Letter"
                  fontSize="64"
                />
                <Typo
                  width={450}
                  className="my-3"
                  typoText="Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in bibendum sed."
                />
                <Input
                  className="mt-5"
                  placeholder="Email Address"
                  formBtnText="Subscribe"
                  variant="contained"
                />
              </Col>
              <Col md={6}>
                <Image src={newsletter} alt="newsletter" />
              </Col>
            </Row>
          </NewsLetterWrapper>
        </Container>
      </div>
    </Layout>
  );
};

export default Homepage;
