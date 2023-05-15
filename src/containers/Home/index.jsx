import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import home from "/public/images/home.png";
import newsletter from "/public/images/newsletter.png";
import testimonialImge from "/public/images/testimonialImge.png";
import Typo from "@/components/Typo";
import rebornLogo from "/public/images/testimoniallogo.png";
import {
  HomeHeadingWrapper,
  NewsLetterWrapper,
  ServicesWrapper,
  ServicesHeadingWrapper,
  ViewAll,
  TestimonialWrapper,
  TestimonialLogosWrapper,
  TestimonialLogos,
  StyledImage,
  ContentWrapper,
  ImageWrapper,
  Banner,
  Arrows,
  ArrowsBg,
  HomeImageWrapper,
  StyledRow,
  NextArrow,
  TestimonialCol,
  Logos,
  ServiceCard,
  ImageCol,
  StyledImgCol,
  NewsLetterCol,
  BannerRow,
  BannerCol,
  LearnMore,
  TCardWrapper,
  StyledTitleWrapper,
  StyledTitle,
} from "./styles";
import { servicesCardData, testimonialsLogos } from "./homeData";
import { ArrowLeft, ArrowRight } from "@/components/Svgs";
import TestimonialCard from "@/components/TestimonialCard";
import Search from "@/components/Search";
import { Heading } from "@/components/Heading";
import Slider from "react-slick";
import { _settings } from "@/constants/slider-settings";
import Accounting from "@/components/ServiceCard/Accounting";
import { client } from "@/pages/index.js";


const Home = () => {
  const [slides, setSlides] = useState([]);
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "home"]`)
      .then((item) => {
        console.log("item", item);
        setSlides(item);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const onClick = () => {
    if (ref && ref.current) {
      ref.current.slickNext();
    }
  };

  const next = useRef(null);
  const onLeftClick = () => {
    if (next && next.current) {
      next.current.slickPrev();
    }
  };

  const onRightClick = () => {
    if (next && next.current) {
      next.current.slickNext();
    }
  };

  return (
    <>
      <Container>
        <Banner>
          <BannerRow>
            <BannerCol sm={12} md={6}>
              <HomeImageWrapper>
                <StyledImage src={home} alt="home" />
              </HomeImageWrapper>
            </BannerCol>
            <BannerCol sm={12} md={6}>
              <HomeHeadingWrapper>
                <Heading
                  className="main-heading"
                  title="Calibreon International"
                  variant="mainHeading">
                  Grow with{" "}
                </Heading>
                <Typo variant="mainTypo" className="main-typo my-4">
                  That thrives in the today’s digital landscape by elevating
                  your business to new heights. So, Choose Calibreon
                  International for premium back office support.
                </Typo>
                <Search
                  className="search-btn"
                  placeholder="Search for Services"
                  btnText="submit"
                  variant="contained"
                />
              </HomeHeadingWrapper>
            </BannerCol>
          </BannerRow>
        </Banner>
      </Container>
      <ServicesWrapper>
        <Container>
          <ServicesHeadingWrapper>
            <Heading
              color="#ffffff"
              variant="subHeading"
              title={"Our Services"}
            />
            <ViewAll onClick={() => router.push("/services")}>
              View All Services <ArrowRight height="16px" color={"#F05B25"} />
            </ViewAll>
          </ServicesHeadingWrapper>
        </Container>
        <Slider
          ref={next}
          arrows={false}
          centerMode={true}
          centerPadding="180px"
          slidesToShow={1}
          infinite={false}
          responsive={[
            {
              breakpoint: 992,
              settings: {
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}>
          {slides?.map((item, index) => (
            <>
              <ServiceCard key={index}>
                <Accounting
                  image={item?.image}
                  variant={item.variant || "primary"}
                  subCategoryOne={item.subCategoryOne}
                  subCategoryTwo={item.subCategoryTwo}
                  subCategoryThree={item.subCategoryThree}
                  alt={item.alt}
                  category={item.category}
                  children={item.children}
                />
              </ServiceCard>
              <StyledTitleWrapper>
                <StyledTitle>{item.category}</StyledTitle>
              </StyledTitleWrapper>
            </>
          ))}
        </Slider>
        <Container>
          <Arrows>
            <ArrowsBg>
              <ArrowLeft height="20px" onClick={onLeftClick} />
            </ArrowsBg>
            <ArrowsBg>
              <ArrowRight
                height={"20px"}
                color={"#ffffff"}
                onClick={onRightClick}
              />
            </ArrowsBg>
          </Arrows>
        </Container>
      </ServicesWrapper>
      <TestimonialWrapper>
        <Container>
          <Heading
            className="testinomial"
            title={"Testimonial:"}
            variant="sectionHeading"
          />
          <Typo variant="mainTypo" className="testinomial-text">
            Find out why we're the top choice - read what our customers have to
            say! Our testimonials reflect the high level of customer
            satisfaction we strive for, and we're confident that you'll see why
            our clients keep coming back for more
          </Typo>
        </Container>
        <Container>
          <StyledRow>
            <TestimonialCol md={6}>
              <Slider ref={ref} {...{ arrows: false, rows: 3 }}>
                <TestimonialCard
                  className="my-3"
                  imgSrc={rebornLogo}
                  review={
                    "Razia has been a great resource, knowledgeable, communicative, open to suggestions and ready to bring her advice to improve the accounting processes and systems - its important to mention her experience with Hong Kong accounting standards, her expertise with Xero, and her insight on E-commerce Dropshipping businesses is really commendable - looking forward to having her for a long term"
                  }
                />
                <TCardWrapper>
                  <TestimonialCard
                    className="my-3 center-card"
                    imgSrc={rebornLogo}
                    review={
                      "Zahid is extremely hard working, very responsive, and provided quality work during his tenure. His efforts greatly assisted with the roll out of various initiatives. Additionally, he has a wide range of useful, applicable skills. I enjoyed working with Zahid."
                    }
                  />
                </TCardWrapper>
                <TestimonialCard
                  className="my-3"
                  imgSrc={rebornLogo}
                  review={
                    "He did a great job and work well with teams. He communicates well.Would highly recommended."
                  }
                />
                <TestimonialCard
                  className="my-3"
                  imgSrc={rebornLogo}
                  review={
                    "Razia has been a great resource, knowledgeable, communicative, open to suggestions and ready to bring her advice to improve the accounting processes and systems - its important to mention her experience with Hong Kong accounting standards, her expertise with Xero, and her insight on E-commerce Dropshipping businesses is really commendable - looking forward to having her for a long term"
                  }
                />
                <TCardWrapper>
                  <TestimonialCard
                    className="my-3 center-card"
                    imgSrc={rebornLogo}
                    review={
                      "Razia has been a great resource, knowledgeable, communicative, open to suggestions and ready to bring her advice to improve the accounting processes and systems - its important to mention her experience with Hong Kong accounting standards, her expertise with Xero, and her insight on E-commerce Dropshipping businesses is really commendable - looking forward to having her for a long term"
                    }
                  />
                </TCardWrapper>
                <TestimonialCard
                  className="my-3 center-card"
                  imgSrc={rebornLogo}
                  review={
                    "Razia has been a great resource, knowledgeable, communicative, open to suggestions and ready to bring her advice to improve the accounting processes and systems - its important to mention her experience with Hong Kong accounting standards, her expertise with Xero, and her insight on E-commerce Dropshipping businesses is really commendable - looking forward to having her for a long term"
                  }
                />
              </Slider>
              <NextArrow>
                <ArrowRight
                  height={"20px"}
                  color={"#ffffff"}
                  onClick={onClick}
                />
              </NextArrow>
            </TestimonialCol>

            <ImageCol md={6}>
              <ImageWrapper>
                <Image src={testimonialImge} alt="image" />
              </ImageWrapper>
            </ImageCol>
          </StyledRow>
        </Container>
        <LearnMore>
          <Typo variant="mainTypo">Learn More</Typo>
          <ArrowsBg>
            <ArrowRight
              height={"20px"}
              color={"#ffffff"}
              onClick={onRightClick}
            />
          </ArrowsBg>
        </LearnMore>
      </TestimonialWrapper>
      <TestimonialLogosWrapper>
        <Logos>
          {testimonialsLogos.map((item, index) => (
            <TestimonialLogos>
              <StyledImage className="logos" src={item.src} alt={item.alt} />
            </TestimonialLogos>
          ))}
        </Logos>
      </TestimonialLogosWrapper>
      <Container>
        <NewsLetterWrapper>
          <Row>
            <NewsLetterCol xs={12} sm={12} md={6}>
              <ContentWrapper>
                <Heading title=" Join US" variant="mainHeading">
                  News Letter
                </Heading>
                <StyledImage
                  className="responsive-image"
                  src={newsletter}
                  alt="newsletter"
                />

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
            </NewsLetterCol>
            <StyledImgCol xs={12} sm={12} md={6}>
              <StyledImage src={newsletter} alt="newsletter" />
            </StyledImgCol>
          </Row>
        </NewsLetterWrapper>
      </Container>
    </>
  );
};

export default Home;
