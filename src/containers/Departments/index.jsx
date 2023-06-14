import ProfileCard from "@/components/ProfileCard";
import React from "react";
import { Container } from "react-bootstrap";
import {
  StyledCol,
  StyledRow,
  TopHeadingWrapper,
} from "./styles";
import { ArrowRight } from "@/components/Svgs";
import { _settings } from "@/constants/slider-settings";
import Typo from "@/components/Typo";
import { useRouter } from "next/router";

const Team = ({ categorizedUsers, departments }) => {
  const router = useRouter();

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/departments/${id}`);
  };

  return (
    <Container>
      {categorizedUsers?.map(({category, people}) => {
        let department = departments?.filter((department) => department?.title.replace(/\s/g, "")
        .toLowerCase() == category)
        return (
          <Container key={category}>
            <TopHeadingWrapper>
              <Typo variant="mainDesc">{department[0]?.title}</Typo>
              <Typo
                variant="headingTypo"
                onClick={() =>
                  router.push(
                    `/departments/department/${category}`
                  )
                }>
                View All{" "}
                <ArrowRight className="mx-2" height="22px" color="#F05B25" />
              </Typo>
            </TopHeadingWrapper>
            <StyledRow>
              {people?.slice(0, 3)?.map((data, index) => {
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
