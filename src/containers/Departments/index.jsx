import ProfileCard from "@/components/ProfileCard";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ServicesHeadingWrapper,
  StyledCol,
  StyledRow,
  TopHeadingWrapper,
} from "./styles";
import { ArrowRight } from "@/components/Svgs";
import { _settings } from "@/constants/slider-settings";
import Typo from "@/components/Typo";
import { useRouter } from "next/router";

const Team = ({ departments, persons }) => {
  const router = useRouter();

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/departments/${id}`);
  };

  return (
    <Container>
      {departments?.map((department) => {
        return (
          <Container key={department._id}>
            <TopHeadingWrapper>
              <Typo variant="mainDesc">{department.title}</Typo>
              <Typo
                variant="headingTypo"
                onClick={() =>
                  router.push(
                    `/departments/department/${String(department.title)
                      .replace(/\s/g, "")
                      .toLowerCase()}`
                  )
                }>
                View All{" "}
                <ArrowRight className="mx-2" height="22px" color="#F05B25" />
              </Typo>
            </TopHeadingWrapper>
            <StyledRow>
              {persons
                ?.filter(
                  (person) => person.department[0].title == department.title
                )
                ?.slice(0, 3)
                ?.map((data, index) => {
                  return (
                    <StyledCol md={4} key={index}>
                      <ProfileCard
                        onClick={(event) => handleClick(event, data?._id)}
                        variant="secondary"
                        key={data._id}
                        profile={data?.image}
                        name={data.name}
                        subTitle={data.designation}
                        description={data.description}
                        verifiedLogo={true}
                      />
                    </StyledCol>
                  );
                })}
            </StyledRow>
          </Container>
        );
      })}
    </Container>
  );
};

export default Team;
