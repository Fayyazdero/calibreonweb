import Accounting from "@/components/ServiceCard/Accounting";
import Animation from "@/components/ServiceCard/Animation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AnimationWrapper } from "./styles";
import Ecommerce from "@/components/ServiceCard/Ecommerce";
import FlimTv from "@/components/ServiceCard/FlimTv";
import WebDevelopment from "@/components/ServiceCard/WebDevelopment";
import HumanResources from "@/components/ServiceCard/HumanResources";
import Architecture from "@/components/ServiceCard/Architecture";
import { Heading } from "@/components/Heading";
import Search from "@/components/Search";

export const Services = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Heading variant="pageHeading" title="Our Services" />
        </Col>
        <Col md={6}>
          <Search
            className="my-5"
            placeholder="Search for Services"
            btnText="submit"
            variant="contained"
            color={"black"}
          />
        </Col>
      </Row>
      <Accounting title="Accounting" src="/images/accounting-banner.png" />
      <Row>
        <Col sm={12} md={6}>
          <AnimationWrapper>
            <Animation title="Animation" src="/images/animation-banner.png" />
          </AnimationWrapper>
        </Col>
        <Col sm={12} md={6} className="sm-mt-4">
          <Ecommerce title="E-Commerce" src="/images/e-commerce.png" />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="sm-mt-4">
          <FlimTv title="Film & TV" src="/images/flim-tv.png" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <AnimationWrapper>
            <WebDevelopment
              title="Web 
              Development"
              src="/images/web-development.png"
            />
          </AnimationWrapper>
        </Col>
        <Col sm={12} md={6} className="sm-mt-4">
          <HumanResources
            title="Human Resources "
            src="/images/human-resources.png"
          />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="sm-mt-4">
          <Architecture title="Architecture" src="/images/architecture.png" />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
