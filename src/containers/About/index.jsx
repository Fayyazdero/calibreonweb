import React, { useEffect, useState } from "react";
import { Heading } from "@/components/Heading";
import { Col, Container, Row } from "react-bootstrap";
import {
  ContentWrapper,
  FounderHeading,
  FounderSection,
  MainHeading,
  MissionImage,
  ProfileWrapper,
  StyledHeading,
  MissionHeading,
  StyledRow,
} from "./styles";
import MissionBanner from "/public/images/our-mission-banner.png";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import { founderData } from "./aboutData";
import Typo from "@/components/Typo";
const About = () => {
  const [column1, setColumn1] = useState([]);
  const [column2, setColumn2] = useState([]);
  const [column3, setColumn3] = useState([]);

  useEffect(() => {
    const column1Data = [founderData[0]];
    const column2Data = [founderData[1], founderData[2]];
    const column3Data = [founderData[3]];
    setColumn1(column1Data);
    setColumn2(column2Data);
    setColumn3(column3Data);
  }, []);
  return (
    <>
      <Container>
        <Row>
          <MainHeading>
            <Heading title="About Us" variant="subHeading"></Heading>
          </MainHeading>
        </Row>
        <StyledRow>
          <Col sm={12} md={12} lg={7}>
            <MissionHeading
              className="main-heading"
              title="Clear"
              variant="mainHeading"
            >
              Our Mission is{" "}
            </MissionHeading>
            <Typo variant="mainTypo">
              At CaliberOn, we're passionate about helping our clients succeed.
              That's why we prioritize client satisfaction and deliver
              exceptional work every time with our team of professionals having
              access to a wide range of services, from design and development to
              marketing and branding.
            </Typo>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <MissionHeading
              className="responsive-heading"
              title="Clear"
              variant="mainHeading"
            >
              Our Mission is{"  "}
            </MissionHeading>
            <MissionImage>
              <Image src={MissionBanner} alt="Our Mission" />
            </MissionImage>
          </Col>
        </StyledRow>
      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <ContentWrapper>
              <StyledHeading
                variant="quotes"
                title="and exceed your expectations.”"
              >
                “Our end-to-end freelancing services are designed to help you
                achieve your goals {` `}
              </StyledHeading>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
      <FounderSection>
        <Container>
          <FounderHeading>
            <Heading variant="mainHeading" title="Co-Founders">
              Meet Our
            </Heading>
          </FounderHeading>
          <ProfileWrapper>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} className="m-auto ">
                {column1.map((item, key) => (
                  <ProfileCard
                    variant="primary"
                    fontSize={15}
                    key={key}
                    profile={item.profile}
                    title={item.title}
                    subTitle={item.subTitle}
                    description={item.description}
                  />
                ))}
              </Col>

              <Col xs={12} sm={12} md={12} lg={4} className="m-auto pt-4">
                {column2.map((item, key) => (
                  <ProfileCard
                    variant="primary"
                    fontSize={15}
                    key={key}
                    profile={item.profile}
                    title={item.title}
                    subTitle={item.subTitle}
                    description={item.description}
                    className="my-custom-class w-sm-100"
                  />
                ))}
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} className="m-auto pt-4">
                {column3.map((item, key) => (
                  <ProfileCard
                    variant="primary"
                    fontSize={15}
                    key={key}
                    profile={item.profile}
                    title={item.title}
                    subTitle={item.subTitle}
                    description={item.description}
                  />
                ))}
              </Col>
            </Row>
          </ProfileWrapper>
        </Container>
      </FounderSection>
    </>
  );
};

export default About;