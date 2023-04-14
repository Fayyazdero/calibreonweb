import React from "react";
import { Heading } from "@/components/Heading";
import Input from "@/components/Input";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import home from "/public/images/home.png";
import newsletter from "/public/images/newsletter.png";
import testimonialImge from "/public/images/testimonialImge.png";
import Typo from "@/components/Typo";
import {
  HomeHeadingWrapper,
  NewsLetterWrapper,
  ServicesWrapper,
  ServicesHeadingWrapper,
  ViewAll,
  TestimonialWrapper,
  StyledContainer,
  TestimonialLogosWrapper,
  TestimonialLogos,
  StyledImage,
  ContentWrapper,
} from "./styles";
import Layout from "@/components/Layout";
import Carousel from "@/components/Slider";
import {
  servicesCardData,
  testimonialsData,
  testimonialsLogos,
} from "./homeData";
import Accounting from "@/components/ServiceCard";
import { ArrowRight } from "@/components/Svgs";
import TestimonialCard from "@/components/TestimonialCard";
import Search from "@/components/Search";

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
                  title=" Calibreon International"
                  variant={"mainHeading"}
                >
                  Grow with
                </Heading>
                <Typo className="my-3">
                  That thrives in the today’s digital landscape by elevating
                  your business to new heights. So, Choose Calibreon
                  International for premium back office support.
                </Typo>
                <Search
                  className="my-5"
                  placeholder="Search for Services"
                  btnText="submit"
                  variant="contained"
                  color={"black"}
                />
              </HomeHeadingWrapper>
            </Col>
          </Row>
        </Container>
        <ServicesWrapper>
          <Container>
            <ServicesHeadingWrapper>
              <ViewAll>View All Services</ViewAll>
              <ArrowRight height="14px" color="#F05B25" />
            </ServicesHeadingWrapper>
          </Container>
          <StyledContainer>
            <Carousel slidesToShow={1} rows={1} centerMode={true}>
              {servicesCardData.map((item, index) => (
                <div key={item.id}>
                  <Accounting
                    imgSrc={item.imgSrc}
                    department={item.title}
                    services="ddd"
                  />
                </div>
              ))}
            </Carousel>
          </StyledContainer>
        </ServicesWrapper>
        <TestimonialWrapper>
          <Container>
            <Heading styledHeading={"Testimonial:"} fontSize={64} />
            <Typo width={50}>
              Find out why we're the top choice - read what our customers have
              to say! Our testimonials reflect the high level of customer
              satisfaction we strive for, and we're confident that you'll see
              why our clients keep coming back for more
            </Typo>
            <Row>
              <Col md={6} style={{ position: "relative", zIndex: "2" }}>
                <Carousel slidesToShow={1} rows={3}>
                  {testimonialsData.map((item) => (
                    <TestimonialCard
                      className="my-3"
                      imgSrc={item.logo}
                      review={item.review}
                    />
                  ))}
                </Carousel>
              </Col>
              <Col md={6} style={{ position: "relative", zIndex: "2" }}>
                <Image
                  style={{ position: "absolute", zIndex: "1", left: "-242px" }}
                  src={testimonialImge}
                  alt="image"
                />
              </Col>
            </Row>
          </Container>
        </TestimonialWrapper>
        <TestimonialLogosWrapper>
          <Row>
            {testimonialsLogos.map((item, index) => (
              <Col md={4}>
                <TestimonialLogos>
                  <StyledImage src={item.src} alt={item.alt} />
                </TestimonialLogos>
              </Col>
            ))}
          </Row>
        </TestimonialLogosWrapper>
        <Container>
          <NewsLetterWrapper>
            <Row>
              <Col xs={12} sm={12} md={6}>
                <ContentWrapper>
                  <Heading
                    styledHeading=" Join US"
                    heading="News Letter"
                    fontSize="64"
                  />
                  <Typo className="my-3">
                    Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque
                    aliquam eget. Purus id faucibus mollis viverra viverra odio
                    tempus tempor ut. Amet lectus in bibendum sed.
                  </Typo>
                  <Input
                    placeholder="Email Address"
                    formBtnText="Subscribe"
                    variant="contained"
                  />
                </ContentWrapper>
              </Col>
              <Col xs={12} sm={12} md={6}>
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
