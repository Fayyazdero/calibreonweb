import React, { useState, useEffect } from "react";
import {
  StyledRow,
  StyledCol,
  LoadingWrapper
} from "./styles";
import { Container } from "react-bootstrap";
import { teamData } from "../../../containers/Team/teamData";
import { useRouter } from "next/router";
import { client } from "@/pages/index.js";
import ProfileCard from "@/components/ProfileCard";
import { ThreeDots } from 'react-loader-spinner';

const ViewAll = () => {
    const [accounting, setAccounting] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  console.log('router path', router)


  useEffect(() => {
    setIsLoading(true)
    client
      .fetch(
        `*[_type == "person"]{
            _id,
            name,
            image,
            designation,
            description,
            department[]->{title},
            isCertified,
            upworkLink,
            skills[]->{title, skillLevel},
            experience[]->{workedAt, duration},
          }`
      )
      .then((item) => {
         setAccounting(item); 
         setIsLoading(false);
      })
      .catch((err) => {
        console.log("error.....<>", err);
      });
  }, []);

  if(isLoading) {
    return <LoadingWrapper>
      <ThreeDots color="#F05B25" />
    </LoadingWrapper>
  }  

  return (
    <>
      <Container>
        <StyledRow>
          {accounting?.map((data) => {
            return (
              <StyledCol md={4}>
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
