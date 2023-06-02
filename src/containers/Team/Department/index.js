import React from "react";
import {
  StyledRow,
  StyledCol,
  TopHeadingWrapper,
} from "./styles";
import { Container } from "react-bootstrap";
import ProfileCard from "@/components/ProfileCard";
import Typo from "@/components/Typo";

const ViewAll = ({ persons, slug }) => {
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
                  title={data.name}
                  subTitle={data.designation}
                  description={data.description}
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
