import React from "react";
import {
  StyledRow,
  StyledCol,
} from "./styles";
import { Container } from "react-bootstrap";
import ProfileCard from "@/components/ProfileCard";

const ViewAll = ({ persons }) => {

  return (
    <>
      <Container>
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
