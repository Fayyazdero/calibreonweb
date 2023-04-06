import React from "react";
import { Heading } from "@/components/Heading";
import Input from "@/components/Input";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import home from "../assests/home.png";
import Typo from "@/components/Typo";

const Homepage = () => {
  return (
    <div>
      <Container>
        <Row className="my-5">
          <Col md={6}>
            <Image src={home} alt="home" />{" "}
          </Col>
          <Col md={6}>
            <Heading
              heading="Grow with"
              styledHeading=" Calibreon International"
              fontSize="80"
            />
            <Typo
              width={450}
              className="my-3"
              typoText="That thrives in the today’s digital landscape by elevating your business to new heights. So, Choose Calibreon International for premium back office support."
            />
            <Input
              className="mt-5"
              placeholder="Search for Services"
              formBtnText="submit"
              variant="contained"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Homepage;
