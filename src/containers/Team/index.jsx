import ProfileCard from "@/components/ProfileCard";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ServicesHeadingWrapper,
  StyledCol,
  StyledRow,
  TopHeadingWrapper,
  LoadingWrapper
} from "./styles";
import { ArrowRight } from "@/components/Svgs";
import { Heading } from "@/components/Heading";
import { _settings } from "@/constants/slider-settings";
import Typo from "@/components/Typo";
import { useRouter } from "next/router";
import { client } from "@/pages/index.js";
import { ThreeDots } from 'react-loader-spinner';

const Team = ({ departments, persons }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // setIsLoading(true)
    // client
    //   .fetch(`*[_type == "department"]`)
    //   .then((item) => {
    //     setDepartments(item);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("error", err);
    //   });
    console.log('departments', departments)
    console.log('persons', persons)
  }, []);

  // useEffect(() => {
  //   setIsLoading(true)
  //   client
  //     .fetch(`*[_type == "person"]{
  //       _id,
  //       name,
  //       image,
  //       designation,
  //       description,
  //       department[]->{title},
        
  //     }`)
  //     .then((item) => {
  //       setPersons(item);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/team/details/${id}`);
  //   router.push({
  //     pathname: '/team/details/',
  //     params: id,
  // })
  };

  if(isLoading) {
    return <LoadingWrapper>
      <ThreeDots color="#F05B25" />
    </LoadingWrapper>
  }   

  return (
    <Container>
      <ServicesHeadingWrapper>
        <Heading
          variant="subHeading"
          color={"#F05B25"}
          title={"Our Team"}></Heading>
      </ServicesHeadingWrapper>
      {departments?.map((department) => {
        return (
          <Container key={department._id}>
            <TopHeadingWrapper>
              <Typo variant="mainDesc">{department.title}</Typo>
              <Typo
                variant="headingTypo"
                onClick={() => router.push("/team/viewAll")}>
                View All{" "}
                <ArrowRight className="mx-2" height="22px" color="#F05B25" />
              </Typo>
            </TopHeadingWrapper>
            <StyledRow>
              {persons?.filter((person) => person.department[0].title == department.title)?.slice(0, 3)?.map((data) => {
                return (
                  <StyledCol md={4}>
                    <ProfileCard
                      onClick={(event) => handleClick(event, data?._id)}
                      variant="secondary"
                      key={data._id}
                      profile={data?.image}
                      title={data.name}
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
