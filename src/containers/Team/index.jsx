import ProfileCard from "@/components/ProfileCard";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
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

  const handleClick = () => {
    router.push("/team/details");
  };
  return (
    <Container>
      <ServicesHeadingWrapper>
        <Heading
          variant="subHeading"
          color={"#F05B25"}
          title={"Our Team"}
        ></Heading>
      </ServicesHeadingWrapper>
      <TopHeadingWrapper>
        <Typo variant="mainDesc">Book Keeping & Accounts</Typo>
        <Typo
          variant="headingTypo"
          onClick={() => router.push("/team/details")}
        >
          View All <ArrowRight className="mx-2" height="22px" color="#F05B25" />
        </Typo>
      </TopHeadingWrapper>
      <Row>
        {teamData?.slice(0, 3)?.map((data) => {
          return (
            <Col md={4}>
              <ProfileCard
                onClick={handleClick}
                key={data.id}
                profile={data?.profile}
                title={data.title}
                subTitle={data.subTitle}
                description={data.description}
                verifiedLogo={true}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Team;
