import { Heading } from "@/components/Heading";
import Layout from "@/components/Layout";
import SubHeading from "@/components/SubHeading";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Content,
  ContentWrapper,
  FounderSection,
  HeroSection,
  MissionImage,
  ProfileWrapper,
} from "./styles";
import MissionBanner from "../../assests/our-mission-banner.png";
import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import { founderData } from "./data";
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
    <div>
      <Layout>
        <Container>
          <HeroSection>
            <Row>
              <Col md={7}>
                <SubHeading secHeadingText="About Us" />
                <Heading
                  heading="Our Mission is "
                  fontSize="80"
                  styledHeading="Clear"
                  className="mt-41"
                />
                <Content>
                  At CaliberOn, we're passionate about helping our clients
                  succeed. That's why we prioritize client satisfaction and
                  deliver exceptional work every time with our team of
                  professionals having access to a wide range of services, from
                  design and development to marketing and branding.
                </Content>
              </Col>
              <Col md={5}>
                <MissionImage>
                  <Image src={MissionBanner} alt="Our Mission" />
                </MissionImage>
              </Col>
            </Row>
          </HeroSection>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
              <ContentWrapper>
                <Heading
                  heading="“Our end-to-end freelancing services are designed to help you achieve your goals "
                  fontSize="29"
                  styledHeading="and exceed your expectations.”"
                  className=" text-align"
                  lineHeight="46"
                />
              </ContentWrapper>
            </Col>
          </Row>
        </Container>
        <FounderSection>
          <Container>
            <Heading
              heading="Meet Our "
              fontSize="80"
              styledHeading="Co-Founders"
              className=" text-align"
              column
            />
            <ProfileWrapper>
              <Row>
                <Col xs={12} sm={12} md={4} className="m-auto ">
                  {column1.map((item, key) => (
                    <ProfileCard
                      fontSize={15}
                      key={key}
                      profile={item.profile}
                      title={item.title}
                      subTitle={item.subTitle}
                      description={item.description}
                      colourPrimary
                      className="w-sm-100"
                    />
                  ))}
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="card-direction m-auto pt-4"
                >
                  {column2.map((item, key) => (
                    <ProfileCard
                      fontSize={15}
                      key={key}
                      profile={item.profile}
                      title={item.title}
                      subTitle={item.subTitle}
                      description={item.description}
                      colourPrimary
                      className="my-custom-class w-sm-100"
                    />
                  ))}
                </Col>
                <Col xs={12} sm={12} md={4} className="m-auto pt-4">
                  {column3.map((item, key) => (
                    <ProfileCard
                      fontSize={15}
                      key={key}
                      profile={item.profile}
                      title={item.title}
                      subTitle={item.subTitle}
                      description={item.description}
                      colourPrimary
                      className="w-sm-100"
                    />
                  ))}
                </Col>
              </Row>
            </ProfileWrapper>
          </Container>
        </FounderSection>
      </Layout>
    </div>
  );
};

export default About;
