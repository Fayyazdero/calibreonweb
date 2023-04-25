import ProfileCard from "@/components/ProfileCard";
import React from "react";
import { Container } from "react-bootstrap";
import {
  ProfileCardWrapper,
  ServicesHeadingWrapper,
  TopHeadingWrapper,
} from "./styles";
import { ArrowRight } from "@/components/Svgs";
import { Heading } from "@/components/Heading";
import { _settings } from "@/constants/slider-settings";
import { teamData } from "./teamData";
import Typo from "@/components/Typo";
import { useRouter } from "next/router";

const Team = () => {
  const router = useRouter();
  return (
    <>
      <Container>
        <ServicesHeadingWrapper>
          <Heading variant="subHeading">Our Team</Heading>
        </ServicesHeadingWrapper>
        <TopHeadingWrapper>
          <Typo variant="mainDesc">Book Keeping & Accounts</Typo>
          <Typo
            variant="headingTypo"
            onClick={() => router.push("/team/details")}
          >
            View All{" "}
            <ArrowRight className="mx-2" height="22px" color="#F05B25" />
          </Typo>
        </TopHeadingWrapper>
        <ProfileCardWrapper onClick={() => router.push("/team/details")}>
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
    </>
  );
};

export default Team;
