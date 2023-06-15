import ProfileCard from "@/components/ProfileCard";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  TeamDetailsWrapper,
  TeamDetailsContainer,
  TeamDetailsInfoWrapper,
  TeamDetailsImageWrapper,
  SubTitle,
  ProfileTitle,
  VerifiedLogo,
  Certification,
  TeamDetailsDescWrapper,
  DescWrapper,
  TeamTimelineWrapper,
  TeamProgressContainer,
  TeamTimelineContainer,
  ProgressWrapper,
  VerticalLine,
  DotContainer,
  ContainerOuter,
  LineContainer,
  TimeLineContainer,
  LineWrapper,
  SpacerContainer,
  TeamUserListWrapper,
  TopHeadingWrapper,
  StyledProgressBar,
  TeamDetailsHeadingWrapper,
} from "./styles";
import profileimg from "../../../../public/images/profile-1.png";
import verifiedIcon from "../../../../public/images/verified-icon.png";
import upwork_logo_icon from "../../../../public/images/upwork_logo_icon.png";
import Image from "next/image";

import { useRouter } from "next/router";
import { ArrowRight } from "@/components/Svgs";
import { Heading } from "@/components/Heading";
import { _settings } from "@/constants/slider-settings";
import Typo from "@/components/Typo";
import { StyledCol, StyledRow } from "../styles";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../pages/index";

const Details = ({ person, people, founders }) => {
  const [verifiedLogo, setVerifiedLogo] = useState(true);
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
        <TeamDetailsWrapper>
          <TeamDetailsHeadingWrapper>
            <Heading variant="subHeading" title={"Team"}></Heading>
          </TeamDetailsHeadingWrapper>
          <Typo className="newTypo" variant="mainDesc">
            {person?.department?.[0]?.title}
          </Typo>
          <TeamDetailsContainer>
            <TeamDetailsImageWrapper>
              {person?.image ? (
                <Image
                  src={
                    founders ? person?.image : `${urlFor(person?.image)?.url()}`
                  }
                  alt={"Image"}
                  width={161}
                  height={161}
                />
              ) : (
                <Image src={profileimg} alt="profile-A"></Image>
              )}
            </TeamDetailsImageWrapper>
            <TeamDetailsInfoWrapper>
              <ProfileTitle>
                <Heading variant="newUserHeading">{person?.name}</Heading>
                {person?.department?.[0]?.title == "Accounting" &&
                  person?.isCertified && (
                    <Certification>
                      <SubTitle fontSize={20}>Quickbook Certified</SubTitle>
                      {verifiedLogo == true && (
                        <VerifiedLogo>
                          <Image src={verifiedIcon} alt="verified-logo"></Image>
                        </VerifiedLogo>
                      )}
                    </Certification>
                  )}
                {person?.upworkLink && (
                  <DescWrapper>
                    <Image src={upwork_logo_icon} alt="Upwork logo"></Image>
                    <Typo variant="userDesc" color="#0A66C2">
                      {person?.upworkLink}
                    </Typo>
                  </DescWrapper>
                )}
              </ProfileTitle>
              <TeamDetailsDescWrapper>
                <Typo variant={"descTypo"}>{person?.description}</Typo>
              </TeamDetailsDescWrapper>
            </TeamDetailsInfoWrapper>
          </TeamDetailsContainer>
          {person?.skills?.length > 0 && person?.experience?.length > 0 && <TeamTimelineWrapper>
            <TeamProgressContainer>
              <Heading variant="newUserHeadings">Skills</Heading>
              {person?.skills?.slice(0, 3)?.map((skill, index) => {
                return (
                  <ProgressWrapper key={index}>
                    <Typo variant="subHeadingTypo">{skill?.title}</Typo>
                    <StyledProgressBar
                      variant="danger"
                      now={skill?.skillLevel}
                      className="progress-value"
                    />
                  </ProgressWrapper>
                );
              })}
            </TeamProgressContainer>
            <TeamTimelineContainer>
              <Heading variant="newUserHeadings">Experience</Heading>
              <ContainerOuter>
                <LineContainer>
                  <DotContainer></DotContainer>
                  <VerticalLine></VerticalLine>
                  <DotContainer></DotContainer>
                </LineContainer>
                <TimeLineContainer>
                  {person?.experience?.slice(0, 2)?.map((exp, index) => {
                    return (
                      <>
                        <Typo
                          variant="subHeadingTypo"
                          className="m-0"
                          key={index}>
                          {exp?.workedAt}
                        </Typo>
                        <LineWrapper variant="mainDesc"></LineWrapper>
                        <Typo variant="highlightedTypo">{exp?.duration}</Typo>
                        {index == 0 && <SpacerContainer></SpacerContainer>}
                      </>
                    );
                  })}
                </TimeLineContainer>
              </ContainerOuter>
            </TeamTimelineContainer>
          </TeamTimelineWrapper>}
        </TeamDetailsWrapper>
      </Container>
      {people?.length > 0 && (
        <TeamUserListWrapper>
          <Container>
            <TopHeadingWrapper>
              <Typo
                className="mainDescHighlighted"
                variant="mainDescHighlightedTypo">
                {person?.department?.[0]?.title}
              </Typo>
              <Typo
                variant="subDescHighlightedTypo"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  router.push(
                    `/departments/department/${person?.department?.[0]?.title
                      ?.replace(/\s/g, "")
                      ?.toLowerCase()}`
                  )
                }>
                View All{" "}
                <ArrowRight className="mx-2" height="22px" color="white" />
              </Typo>
            </TopHeadingWrapper>
            <StyledRow>
              {people?.slice(0, 3)?.map((data, index) => {
                return (
                  <StyledCol md={4} key={index}>
                    <ProfileCard
                      key={data._id}
                      variant="secondary"
                      profile={data?.image}
                      name={data?.name}
                      subTitle={data.designation}
                      description={data.description}
                      verifiedLogo={verifiedLogo}
                      onClick={(e) => handleClick(e, data?._id)}
                    />
                  </StyledCol>
                );
              })}
            </StyledRow>
          </Container>
        </TeamUserListWrapper>
      )}
    </>
  );
};

export default Details;
