import React, { useRef } from "react";
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
  ImageWrapper,
  SliderArrow,
  Banner,
  Arrows,
  ArrowsBg,
} from "./styles";
import {
  servicesCardData,
  testimonialsData,
  testimonialsLogos,
} from "./homeData";
import Accounting from "@/components/ServiceCard";
import { ArrowLeft, ArrowRight } from "@/components/Svgs";
import TestimonialCard from "@/components/TestimonialCard";
import Search from "@/components/Search";
import { Heading } from "@/components/Heading";
import Slider from "react-slick";
import { _settings } from "@/constants/slider-settings";

const Home = () => {
  const ref = useRef(null);
  const onClick = () => {
    console.log({ ref }, "red");
    if (ref && ref.current) {
      ref.current.slickNext();
    }
  };

  const onLeftClick = () => {
    if (ref && ref.current) {
      ref.current.slickPrev();
    }
  };

  return (
    <>
      <Container>
        <Banner>
          <Row>
            <Col md={6}>
              <Image src={home} alt="home" />
            </Col>
            <Col md={6}>
              <HomeHeadingWrapper>
                <Heading title="Calibreon International" variant="mainHeading">
                  Grow with{" "}
                </Heading>
                <Typo variant="mainTypo" className="my-4">
                  That thrives in the today’s digital landscape by elevating
                  your business to new heights. So, Choose Calibreon
                  International for premium back office support.
                </Typo>
                <Search
                  placeholder="Search for Services"
                  btnText="submit"
                  variant="contained"
                />
              </HomeHeadingWrapper>
            </Col>
          </Row>
        </Banner>
      </Container>
      <ServicesWrapper>
        <StyledContainer>
          <ServicesHeadingWrapper>
            <Heading variant="subHeading">Our Services</Heading>
            <ViewAll>
              View All Services <ArrowRight height="16px" color="#F05B25" />
            </ViewAll>
          </ServicesHeadingWrapper>
        </StyledContainer>
        <Slider
          ref={ref}
          {...{ arrows: false, centerMode: true, centerPadding: "110px" }}
        >
          {servicesCardData.map((item, index) => (
            <div key={item.id}>
              <Accounting
                imgSrc={item.imgSrc}
                department={item.title}
                services="ddd"
              />
            </div>
          ))}
        </Slider>
        <Container>
          <Arrows>
            <ArrowsBg>
              <ArrowLeft height="20px" onClick={onLeftClick} />
            </ArrowsBg>
            <ArrowsBg>
              <ArrowRight height={"20px"} onClick={onClick} />
            </ArrowsBg>
          </Arrows>
        </Container>
      </ServicesWrapper>
      <TestimonialWrapper>
        <Container>
          <Heading title={"Testimonial:"} variant="sectionHeading" />
          <Typo variant="mainTypo">
            Find out why we're the top choice - read what our customers have to
            say! Our testimonials reflect the high level of customer <br />
            satisfaction we strive for, and we're confident that you'll see why
            our clients keep coming back for more
          </Typo>
          <Row>
            <Col md={6}>
              <Slider ref={ref} {...{ arrows: false, rows: 3 }}>
                {testimonialsData.map((item) => (
                  <TestimonialCard
                    className="my-3"
                    imgSrc={item.logo}
                    review={item.review}
                  />
                ))}
              </Slider>
            </Col>
            <Col md={6}>
              <SliderArrow>
                <ArrowRight height={"10px"} onClick={onClick} />
              </SliderArrow>
              <ImageWrapper>
                <Image src={testimonialImge} alt="image" />
              </ImageWrapper>
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
                <Heading title=" Join US" variant="mainHeading">
                  News Letter
                </Heading>
                <Typo variant="mainTypo">
                  Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque
                  aliquam eget. Purus id faucibus mollis viverra viverra odio
                  tempus tempor ut. Amet lectus in bibendum sed.
                </Typo>
                <Search
                  placeholder="Email Adress"
                  btnText="Subscribe"
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
    </>
  );
};

export default Home;