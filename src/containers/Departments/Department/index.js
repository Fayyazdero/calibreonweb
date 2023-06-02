import React from "react";
import {
  StyledRow,
  StyledCol,
  TopHeadingWrapper,
} from "./styles";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import ProfileCard from "@/components/ProfileCard";
import Typo from "@/components/Typo";

const ViewAll = ({ persons, slug }) => {
  const router = useRouter();

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/departments/${id}`);
  };
  return (
    <>
      <Container>
      {/* <TopHeadingWrapper>
              <Typo variant="mainDesc">{slug}</Typo>
            </TopHeadingWrapper> */}
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
