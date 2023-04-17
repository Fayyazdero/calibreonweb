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
} from "./styles";
import profileimg from "../../../public/images/profile-1.png";
import verifiedIcon from "../../../public/images/verified-icon.png";
import upwork_logo_icon from "../../../public/images/upwork_logo_icon.png";
import Image from "next/image";

import { ArrowRight } from "@/components/Svgs";
import { Heading } from "@/components/Heading";
import { _settings } from "@/constants/slider-settings";
import { teamData } from "./teamData";
import { useRouter } from "next/navigation";
import Typo from "@/components/Typo";

const Team = () => {
  const router = useRouter();
  const [verifiedLogo, setVerifiedLogo] = useState(true);
  return (
    <Container>
      <ServicesHeadingWrapper>
        <Heading variant="subHeading">Team</Heading>
      </ServicesHeadingWrapper>
      <ServicesHeadingWrapper>
        <Typo variant="mainDesc">Book Keeping & Accounts</Typo>
        <Typo variant="mainDesc">
          View All <ArrowRight height="22px" color="#F05B25" />
        </Typo>
      </ServicesHeadingWrapper>
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
        <ServicesHeadingWrapper>
          <Heading variant="subHeading">Team</Heading>
        </ServicesHeadingWrapper>
        <Typo variant="mainDesc">Book Keeping & Accounts</Typo>
        <TeamDetailsContainer>
          <TeamDetailsImageWrapper>
            <Image
              src={profileimg}
              alt="profile-A"
              width={308}
              height={308}></Image>
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
                tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum dolor
                sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id
                faucibus mollis viverra viverra odio tempus tempor ut. Amet
                lectus in bibendum sed.Lorem ipsum dolor sit amet consectetur.
                Sem ut pellentesque aliquam eget. Purus id faucibus mollis
                viverra viverra odio tempus tempor ut. Amet lectus in bibendum
                sed. Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque
                aliquam eget. Purus id faucibus mollis viverra viverra odio
                tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum dolor
                
              </Typo>
            </TeamDetailsDescWrapper>
          </TeamDetailsInfoWrapper>
        </TeamDetailsContainer>
      </TeamDetailsWrapper>
    </Container>
  );
};

export default Team;
