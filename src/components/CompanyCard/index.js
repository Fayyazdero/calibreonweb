import React from "react";
import Image from "next/image";
import {
  ServicesHeadingWrapper,
  TeamDetailsInfoWrapper,
  TeamDetailsImageWrapper,
  ProfileTitle,
  TeamDetailsDescWrapper,
  DescWrapper,
  TeamTimelineWrapper,
  TeamProgressContainer,
  TeamTimelineContainer,
  TopHeadingWrapper,
  ListWrapper,
  InfoWrapper,
  CertificationWrapper,
  TestimonialWrapper,
  TypoContainer,
  NewTeamDetailsDescWrapper,
  StyledTestimonialVideoDiv,
  InnerInfoWrapper,
  SpacerInfoWrapper,
  VideoWrapper,
  StyledVideoDiv,
  StyledRow,
  StyledCol,
} from "./styles";
import { ArrowRight } from "@/components/Svgs";
import { Heading } from "@/components/Heading";
import { Col, Container, Row } from "react-bootstrap";
import upwork_logo_icon from "../../../public/images/upwork_logo_icon.png";
import linkedInLogo from "../../../public/images/linkedinLogo.png";
import quickbooksImage from "../../../public/images/quickbooks.png";
import xero from "../../../public/images/xero.png";
import xerotwo from "../../../public/images/xero-two.png";
import imageUrlBuilder from "@sanity/image-url";
import ProfileCard from "@/components/ProfileCard";
import Typo from "@/components/Typo";
import { client } from "../../pages/index";
import { useRouter } from "next/router";

const CompanyCard = ({ acc, people }) => {
  const {
    certificates,
    companyInformation,
    department,
    image,
    linkedInLink,
    overView,
    services,
    title,
    upworkLink,
    _id,
  } = acc;

  const router = useRouter();
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/departments/${id}`);
  };

  return (
    <>
      <Container>
        <ServicesHeadingWrapper>
          <Heading variant="subHeading" title={department}></Heading>
        </ServicesHeadingWrapper>
        <TeamDetailsInfoWrapper>
          <TeamDetailsImageWrapper>
            <Image
              src={`${urlFor(image)?.url()}`}
              alt={"Image"}
              width={161}
              height={161}
            />
          </TeamDetailsImageWrapper>
          <ProfileTitle>
            <Heading variant="contactTitle">{title}</Heading>
            <TypoContainer>
              <Typo variant="newDescTypo">Company Profile Links</Typo>
            </TypoContainer>
            <DescWrapper>
              <Image
                className="mx-3"
                src={upwork_logo_icon}
                alt="Upwork logo"></Image>
              <Typo variant="userDesc" color="#0A66C2">
                {upworkLink}
              </Typo>
            </DescWrapper>
            <DescWrapper>
              <Image
                className="mx-3"
                src={linkedInLogo}
                alt="Upwork logo"></Image>
              <Typo variant="userDesc" color="#0A66C2">
                {linkedInLink}
              </Typo>
            </DescWrapper>
          </ProfileTitle>
        </TeamDetailsInfoWrapper>
        <TeamDetailsDescWrapper>
          <Heading variant="faqHeading">Overview</Heading>
          <Typo variant={"descTypo"}>{overView}</Typo>
        </TeamDetailsDescWrapper>
        <TeamTimelineWrapper>
          <TeamProgressContainer>
            <Heading variant="faqHeading">Services</Heading>
            <NewTeamDetailsDescWrapper>
              {services?.slice(0, 2)?.map((service) => {
                return (
                  <ListWrapper key={service._key}>
                    <Typo variant="newSubDesTypo">{service?.heading}</Typo>
                    <ul>
                      {service?.services?.map((service, index) => {
                        return <li key={index}>{service}</li>;
                      })}
                    </ul>
                  </ListWrapper>
                );
              })}
              <Typo className="desHeading" variant="newSubDesTypo">
                Portfolios:
              </Typo>
              <Row>
                <Col md={6}>
                  <VideoWrapper>
                    <StyledVideoDiv
                      src="/videos/video.mp4"
                      width="372px"
                      height="283px"
                      style={{
                        backgroundColor: "black",
                        borderRadius: "24px",
                      }}
                      controls
                    />
                    <Typo className="firstTypo" variant="newSubDesTypo">
                      Amazon Account Management
                    </Typo>
                    <Typo variant={"descTypo"}>
                      Search Engine Marketing , Product Sourcing , Product
                      Listings , Amazon PPC , PPC Campaign Setup & Management ,
                      Amazon Seller Central , Amazon
                    </Typo>
                  </VideoWrapper>
                </Col>
                <Col>
                  <VideoWrapper>
                    <StyledVideoDiv
                      src="/videos/video.mp4"
                      width="372px"
                      height="283px"
                      style={{
                        backgroundColor: "black",
                        borderRadius: "24px",
                      }}
                      controls
                    />
                    <Typo className="firstTypo" variant="newSubDesTypo">
                      Amazon Account Management
                    </Typo>
                    <Typo variant={"descTypo"}>
                      Search Engine Marketing , Product Sourcing , Product
                      Listings , Amazon PPC , PPC Campaign Setup & Management ,
                      Amazon Seller Central , Amazon
                    </Typo>
                  </VideoWrapper>
                </Col>
              </Row>
            </NewTeamDetailsDescWrapper>
          </TeamProgressContainer>
          <TeamTimelineContainer>
            <InfoWrapper>
              <Typo variant="accountingTypo">Company information</Typo>
              <InnerInfoWrapper>
                <SpacerInfoWrapper>
                  <Typo variant="subAccountingTypo">Agency size</Typo>
                  <Typo variant="newSubAccountingTypo">
                    {companyInformation?.size}
                  </Typo>
                </SpacerInfoWrapper>
                <SpacerInfoWrapper>
                  <Typo variant="subAccountingTypo">Year found</Typo>
                  <Typo variant="newSubAccountingTypo">
                    {companyInformation?.yearFounded}
                  </Typo>
                </SpacerInfoWrapper>
                <SpacerInfoWrapper>
                  <Typo variant="subAccountingTypo">Awards</Typo>
                  {companyInformation?.awards?.map((award, index) => {
                    return (
                      <Typo variant="newSubAccountingTypo" key={index }>
                        {award}
                      </Typo>
                    );
                  })}
                </SpacerInfoWrapper>
              </InnerInfoWrapper>
            </InfoWrapper>
            <CertificationWrapper>
              <Typo variant="subDesTypo">Certification</Typo>
              <Image src={quickbooksImage} alt="quickbooksImage-A"></Image>
              <Image src={xero} alt="xero-A"></Image>
              <Image src={xerotwo} alt="xerotwo-A"></Image>
            </CertificationWrapper>
            <TestimonialWrapper>
              <Typo variant="accountingTypo">Video Testimonials</Typo>
              <StyledTestimonialVideoDiv
                src="/videos/video.mp4"
                width="372px"
                height="283px"
                style={{ backgroundColor: "black", borderRadius: "24px" }}
                controls
              />
            </TestimonialWrapper>
          </TeamTimelineContainer>
        </TeamTimelineWrapper>
        {people.length > 0 && (
          <>
            <TopHeadingWrapper>
              <Typo variant="mainDesc">Our Team</Typo>
              <Typo
                variant="headingTypo"
                onClick={() =>
                  router.push(
                    `/departments/department/${department
                      .replace(/\s/g, "")
                      .toLowerCase()}`
                  )
                }
                style={{ cursor: "pointer" }}>
                View All{" "}
                <ArrowRight className="mx-2" height="22px" color="#F05B25" />
              </Typo>
            </TopHeadingWrapper>
            <StyledRow>
              {people?.slice(0, 3)?.map((data) => {
                return (
                  <StyledCol md={4} key={data._id}>
                    <ProfileCard
                      key={data?._id}
                      fontSize={15}
                      profile={data?.image}
                      name={data?.name}
                      subTitle={data?.designation}
                      description={data?.description}
                      onClick={(event) => handleClick(event, data?._id)}
                    />
                  </StyledCol>
                );
              })}
            </StyledRow>
          </>
        )}
      </Container>
    </>
  );
};

export default CompanyCard;
