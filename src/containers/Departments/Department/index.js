import React from "react";
import { StyledRow, StyledCol, TopHeadingWrapper } from "./styles";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import ProfileCard from "@/components/ProfileCard";
import { Heading } from "@/components/Heading";

const ViewAll = ({ persons, slug }) => {
  const router = useRouter();

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/departments/${id}`);
  };

  return (
    <>
      <Container>
        <TopHeadingWrapper>
          <Heading
            variant="subHeading"
            title={persons[0]?.department[0]?.title}
          />
        </TopHeadingWrapper>
        <StyledRow>
          {persons?.map((data, index) => {
            return (
              <StyledCol md={4} key={index}>
                <ProfileCard
                  key={data._id}
                  fontSize={15}
                  profile={data?.image}
                  name={data.name}
                  subTitle={data.designation}
                  description={data.description}
                  onClick={(e) => handleClick(e, data._id)}
                  founders={false}
                />
              </StyledCol>
            );
          })}
        </StyledRow>
      </Container>
    </>
  );
};

export default ViewAll;
