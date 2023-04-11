import React from "react";
import { Heading } from "@/components/Heading";
import Input from "@/components/Input";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import home from "../../assests/home.png";
import newsletter from "../../assests/newsletter.png";
import Typo from "@/components/Typo";
import {
  HomeHeadingWrapper,
  NewsLetterWrapper,
  ServicesWrapper,
  ServicesHeadingWrapper,
  ViewAll,
} from "@/styles/Home.module";
import Layout from "@/components/Layout";
import Carousel from "@/components/Slider";
import { servicesCardData } from "./homeData";
import Accounting from "@/components/Accounting";
import SubHeading from "@/components/SubHeading";
import ArrowRight from "@/components/Svgs/ArrowRight";
// import Banner from "../../assests/Accounting-banner.png";
// import ArrowRight from "../Svgs/ArrowRight";

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
              ``
            </Row>
          </NewsLetterWrapper>
        </Container>
        <ServicesWrapper>
          <Container>
            <ServicesHeadingWrapper>
              <SubHeading secHeadingText={"Services"} color="#ffffff" />
              <ViewAll>
                View All Services <ArrowRight height="14px" color="#F05B25" />
              </ViewAll>
            </ServicesHeadingWrapper>
            <Carousel>
              {servicesCardData.map((item, index) => (
                <div key={index}>
                  <Accounting
                    imgSrc={item.imgSrc}
                    department={item.title}
                    services="ddd"
                  />
                </div>
              ))}
            </Carousel>
          </Container>
        </ServicesWrapper>
      </div>
    </Layout>
  );
};

export default Homepage;
