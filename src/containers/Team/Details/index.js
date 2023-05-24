import ProfileCard from "@/components/ProfileCard";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
  LoadingWrapper
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
import { client } from "@/pages/index.js";
import { ThreeDots } from 'react-loader-spinner';

const Details = () => {
  const [verifiedLogo, setVerifiedLogo] = useState(true);
  const [persons, setPersons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true)
    client
      .fetch(
        `*[_type == "person"]{
        _id,
        name,
        image,
        designation,
        description,
        department[]->{title},
        isCertified,
        upworkLink,
        skills[]->{title, skillLevel},
        experience[]->{workedAt, duration},
      }`
      )
      .then((item) => {
        const person = item.filter(
          (p) => p._id == String(router.query.details)
        );
        return setPersons(item), setUser(person[0]), setIsLoading(false);
      })
      .catch((err) => {
        console.log("error.....<>", err);
      });
  }, []);

  if(isLoading) {
    return <LoadingWrapper>
      <ThreeDots color="#F05B25" />
    </LoadingWrapper>
  }   

  return (
    <>
      <Container>
        <TeamDetailsWrapper>
          <TeamDetailsHeadingWrapper>
            <Heading variant="subHeading" title={"Team"}></Heading>
          </TeamDetailsHeadingWrapper>
          <Typo className="newTypo" variant="mainDesc">
            {user?.department?.[0]?.title}
          </Typo>
          <TeamDetailsContainer>
            <TeamDetailsImageWrapper>
              <Image src={profileimg} alt="profile-A"></Image>
            </TeamDetailsImageWrapper>
            <TeamDetailsInfoWrapper>
              <ProfileTitle>
                <Heading variant="newUserHeading">{user?.name}</Heading>
                {user?.department?.[0]?.title == "Accounting" &&
                  user?.isCertified && (
                    <Certification>
                      <SubTitle fontSize={20}>Quickbook Certified</SubTitle>
                      {verifiedLogo == true && (
                        <VerifiedLogo>
                          <Image src={verifiedIcon} alt="verified-logo"></Image>
                        </VerifiedLogo>
                      )}
                    </Certification>
                  )}
                {user?.upworkLink && (
                  <DescWrapper>
                    <Image
                      className="mx-3"
                      src={upwork_logo_icon}
                      alt="Upwork logo"></Image>
                    <Typo variant="userDesc" color="#0A66C2">
                      {user?.upworkLink}
                    </Typo>
                  </DescWrapper>
                )}
              </ProfileTitle>
              <TeamDetailsDescWrapper>
                <Typo variant={"descTypo"}>{user?.description}</Typo>
              </TeamDetailsDescWrapper>
            </TeamDetailsInfoWrapper>
          </TeamDetailsContainer>
          <TeamTimelineWrapper>
            <TeamProgressContainer>
              <Heading variant="newUserHeadings">Skills</Heading>
              {user?.skills?.map((skill) => {
                return (
                  <ProgressWrapper>
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
                {user?.experience?.map((exp, index) => {
                  return (
                    <>
                      <Typo variant="subHeadingTypo" className="m-0">
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
          </TeamTimelineWrapper>
        </TeamDetailsWrapper>
      </Container>
      <TeamUserListWrapper>
        <Container>
          <TopHeadingWrapper>
            <Typo
              className="mainDescHighlighted"
              variant="mainDescHighlightedTypo">
              {user?.department?.[0]?.title}
            </Typo>
            <Typo variant="subDescHighlightedTypo">
              View All{" "}
              <ArrowRight className="mx-2" height="22px" color="white" />
            </Typo>
          </TopHeadingWrapper>
          <StyledRow>
            {persons
              ?.filter((person) => person.department[0].title == "Accounting")
              ?.slice(0, 3)
              ?.map((data) => {
                return (
                  <StyledCol md={4}>
                    <ProfileCard
                      key={data.id}
                      variant="secondary"
                      profile={data?.image}
                      title={data?.name}
                      subTitle={data.designation}
                      description={data.description}
                      verifiedLogo={verifiedLogo}
                    />
                  </StyledCol>
                );
              })}
          </StyledRow>
        </Container>
      </TeamUserListWrapper>
    </>
  );
};

export default Details;
