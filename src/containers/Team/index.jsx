import Layout from "@/components/Layout";
import ProfileCard from "@/components/ProfileCard";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  ProfileCardWrapper,
  ServicesHeadingWrapper,
  TeamDetailsWrapper,
  TeamDetailsContainer,
  TeamDetailsInfoWrapper,
  TeamDetailsImageWrapper,
  ViewAll,
  SubTitle,
  Title,
  ProfileTitle,
  ProfileImage,
  ProfileHeader,
  VerifiedLogo,
  Certification,
  Content,
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
  TeamDetailsHeadingWrapper
} from "./styles";
import profileimg from "../../../public/images/profile-1.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import verifiedIcon from "../../../public/images/verified-icon.png";
import upwork_logo_icon from "../../../public/images/upwork_logo_icon.png";
import Image from "next/image";

import { ArrowRight } from "@/components/Svgs";
import { Heading } from "@/components/Heading";
import { _settings } from "@/constants/slider-settings";
import { teamData } from "./teamData";
import Typo from "@/components/Typo";

const Team = () => {
  const [verifiedLogo, setVerifiedLogo] = useState(true);
  return (
    <>
      <Container>
        <ServicesHeadingWrapper>
          <Heading variant="subHeading">Our Team</Heading>
        </ServicesHeadingWrapper>
        <TopHeadingWrapper>
          <Typo variant="mainDesc">Book Keeping & Accounts</Typo>
          <Typo variant="headingTypo">
            View All{" "}
            <ArrowRight className="mx-2" height="22px" color="#F05B25" />
          </Typo>
        </TopHeadingWrapper>
        <ProfileCardWrapper>
          {teamData?.slice(0, 3)?.map((data) => {
            return (
              <ProfileCard
                key={data.id}
                fontSize={15}
                profile={data?.profile}
                title={data.title}
                subTitle={data.subTitle}
                description={data.description}
              />
            );
          })}
        </ProfileCardWrapper>
        <TeamDetailsWrapper>
          <TeamDetailsHeadingWrapper>
            <Heading variant="subHeading">Team</Heading>
          </TeamDetailsHeadingWrapper>
          <Typo variant="mainDesc">Book Keeping & Accounts</Typo>
          <TeamDetailsContainer>
            <TeamDetailsImageWrapper>
              <Image
                src={profileimg}
                alt="profile-A"
                ></Image>
            </TeamDetailsImageWrapper>
            <TeamDetailsInfoWrapper>
              <ProfileTitle>
                <Heading variant="userHeading">mandy</Heading>
                <Certification>
                  <SubTitle fontSize={20}>Quickbook Certified</SubTitle>
                  {verifiedLogo == true && (
                    <VerifiedLogo>
                      <Image src={verifiedIcon} alt="verified-logo"></Image>
                    </VerifiedLogo>
                  )}
                </Certification>
                <DescWrapper>
                  <Image
                    className="mx-3"
                    src={upwork_logo_icon}
                    alt="Upwork logo"></Image>
                  <Typo variant="userDesc" color="#0A66C2">
                    Faheem S. - Accountant Bookkeeper Credit Controller -
                    Receivables/Payable Manager - Upwork Freelancer from Gilgit,
                    Pakistan
                  </Typo>
                </DescWrapper>
              </ProfileTitle>
              <TeamDetailsDescWrapper>
                <Typo variant={"descTypo"}>
                  Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque
                  aliquam eget. Purus id faucibus mollis viverra viverra odio
                  tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum
                  dolor sit amet consectetur. Sem ut pellentesque aliquam eget.
                  Purus id faucibus mollis viverra viverra odio tempus tempor
                  ut. Amet lectus in bibendum sed.Lorem ipsum dolor sit amet
                  consectetur. Sem ut pellentesque aliquam eget. Purus id
                  faucibus mollis viverra viverra odio tempus tempor ut. Amet
                  lectus in bibendum sed. Lorem ipsum dolor sit amet
                  consectetur. Sem ut pellentesque aliquam eget. Purus id
                  faucibus mollis viverra viverra odio tempus tempor ut. Amet
                  lectus in bibendum sed.Lorem ipsum dolor
                </Typo>
              </TeamDetailsDescWrapper>
            </TeamDetailsInfoWrapper>
          </TeamDetailsContainer>
          <TeamTimelineWrapper>
            <TeamProgressContainer>
              <Heading variant="userHeading">Skills</Heading>
              <ProgressWrapper>
                <Typo variant="subHeadingTypo">Book Keeping</Typo>
                <StyledProgressBar variant="danger" now={60} className="progress-value" />
              </ProgressWrapper>
              <ProgressWrapper>
                <Typo variant="subHeadingTypo">QuickBooks</Typo>
                <StyledProgressBar variant="danger" now={80} />
              </ProgressWrapper>
              <ProgressWrapper>
                <Typo variant="subHeadingTypo">Book Keeping</Typo>
                <StyledProgressBar variant="danger" now={90} />
              </ProgressWrapper>
            </TeamProgressContainer>
            <TeamTimelineContainer>
              <Heading variant="userHeading">Experience</Heading>
              <ContainerOuter>
                <LineContainer>
                  <DotContainer></DotContainer>
                  <VerticalLine></VerticalLine>
                  <DotContainer></DotContainer>
                </LineContainer>
                <TimeLineContainer>
                  <Typo variant="subHeadingTypo" className="m-0">
                    Worked as accountant at XYZ
                  </Typo>
                  <LineWrapper variant="mainDesc"></LineWrapper>
                  <Typo variant="highlightedTypo">November2008 - 2010</Typo>
                  <SpacerContainer></SpacerContainer>
                  <Typo variant="subHeadingTypo" className="m-0">
                    Worked as accountant at XYZ
                  </Typo>
                  <LineWrapper variant="mainDesc"></LineWrapper>
                  <Typo variant="highlightedTypo">November2008 - 2010</Typo>
                </TimeLineContainer>
              </ContainerOuter>
            </TeamTimelineContainer>
          </TeamTimelineWrapper>
        </TeamDetailsWrapper>
      </Container>
      <TeamUserListWrapper>
        <Container>
          <TopHeadingWrapper>
            <Typo variant="mainDescHighlightedTypo">Book Keeping & Accounts</Typo>
            <Typo variant="subDescHighlightedTypo">
              View All{" "}
              <ArrowRight className="mx-2" height="22px" color="white" />
            </Typo>
          </TopHeadingWrapper>
          <ProfileCardWrapper>
            {teamData?.slice(0, 3)?.map((data) => {
              return (
                <ProfileCard
                  key={data.id}
                  fontSize={15}
                  profile={data?.profile}
                  title={data.title}
                  subTitle={data.subTitle}
                  description={data.description}
                />
              );
            })}
          </ProfileCardWrapper>
        </Container>
      </TeamUserListWrapper>
    </>
  );
};

export default Team;
