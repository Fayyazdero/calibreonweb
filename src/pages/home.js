import { Heading } from "@/components/Heading";
import Input from "@/components/Input";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>col2</Col>
          <Col md={6}>
            <Heading
              className="my-5"
              heading="Grow with"
              styledHeading=" Calibreon International"
              fontSize="80"
            />
            <Input
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

export default Home;
