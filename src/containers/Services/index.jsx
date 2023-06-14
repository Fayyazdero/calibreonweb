import Accounting from "@/components/ServiceCard/Accounting";
import Animation from "@/components/ServiceCard/Animation";
import React, {useState, useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  StyledRow,
  FlimTvWrapper,
  WebDevWrapper,
  ArchitectureWrapper,
  AccountingWrapper,
  AnimationWrapper,
  HeadingWrapper,
  Wrapper,
  ImageWrapper,
  GreyBoxWrapper,
} from "./styles";
import Ecommerce from "@/components/ServiceCard/Ecommerce";
import FlimTv from "@/components/ServiceCard/FlimTv";
import WebDevelopment from "@/components/ServiceCard/WebDevelopment";
import HumanResources from "@/components/ServiceCard/HumanResources";
import Architecture from "@/components/ServiceCard/Architecture";
import { Heading } from "@/components/Heading";
import Search from "@/components/Search";
import Image from "next/image";
import { useRouter } from "next/router";
import AccountingComponent from "@/components/ServiceCard/AccountingComponent";

export const Services = ({services}) => {
  const router = useRouter();


  return (
    <Container>
      <Wrapper>
        <StyledRow>
          <Col xs={12} md={6} className="text-center">
            <HeadingWrapper>
              <Heading variant="subHeading" title="Our Services" />
            </HeadingWrapper>
          </Col>
        </StyledRow>
        <AccountingWrapper onClick={() => router.push("/services/accounting")}>
          <AccountingComponent
            variant="deepPurple"
            title="Accounting"
            src="/images/Accounting-banner.png"
            alt="altImage"
          />
        </AccountingWrapper>
        <AnimationWrapper className="margin-y-0" >
          <Row>
            <Col xs={12} md={12} lg={6} onClick={() => router.push("/services/animation")}>
              <AccountingComponent
                variant="primary"
                className="hidden-sm"
                title="Animation"
                src="/images/animation-banner.png"
                alt="altImage"
              />
              <Animation
                variant="primary"
                className="sm-hidden"
                title="Animation"
                src="/images/animation-banner.png"
                alt="altImage"
              />
            </Col>
            <Col xs={12} md={12} lg={6} onClick={() => router.push("/services/ecommerce")}>
              <AccountingComponent
                variant="cyan"
                className="hidden-sm"
                title="eCommerce"
                src="/images/e-commerce.png"
                alt="altImage"
              />
              <Ecommerce
                variant="cyan"
                className="sm-hidden"
                title="eCommerce"
                src="/images/e-commerce.png"
                alt="altImage"
              />
            </Col>
          </Row>
        </AnimationWrapper>

        <FlimTvWrapper className="margin-y-0" onClick={() => router.push("/services/filmandtv")}>
          <Row>
            <Col md={12}>
              <AccountingComponent
                variant="grey"
                className="hidden-sm"
                title="Film & TV"
                src="/images/flim-tv.png"
                alt="altImage"
              />
              <FlimTv
                variant="grey"
                title="Film & TV"
                src="/images/flim-tv.png"
                className="sm-hidden"
                alt="altImage"
              />
            </Col>
          </Row>
        </FlimTvWrapper>
        <WebDevWrapper className="margin-y-0" >
          <Row>
            <Col sm={12} md={12} lg={6} onClick={() => router.push("/services/webdevelopment")}>
              <AccountingComponent
                variant="blue"
                className="hidden-sm"
                title="Human Resources"
                src="/images/human-resources.png"
                alt="altImage"
              />
              <WebDevelopment
                variant="yellow"
                title="Web 
                Development"
                src="/images/web-development.png"
                className="sm-hidden"
                alt="altImage"
              />
            </Col>
            <Col sm={12} md={12} lg={6} className="sm-mt-4" onClick={() => router.push("/services/humanresource")}>
              <AccountingComponent
                variant="maroon"
                className="hidden-sm"
                title="Architecture"
                src="/images/architecture.png"
                alt="altImage"
              />
              <HumanResources
                variant="blue"
                className="sm-hidden"
                title="Human Resources "
                src="/images/human-resources.png"
                alt="altImage"
              />
            </Col>
          </Row>
        </WebDevWrapper>
        <ArchitectureWrapper className="margin-y-0" onClick={() => router.push("/services/architecture")}>
          <Row>
            <Col md={12}>
              <AccountingComponent
                variant="yellow"
                title="Web 
               Development"
                src="/images/web-development.png"
                className="hidden-sm"
                alt="altImage"
              />
              <Architecture
                variant="maroon"
                title="Architecture"
                src="/images/architecture.png"
                className="sm-hidden"
                alt="altImage"
              />
              <GreyBoxWrapper className="hidden-sm">
                <ImageWrapper>
                  <Image src="/images/grey-box.png" width={100} height={100} alt="grey-box" />
                </ImageWrapper>
              </GreyBoxWrapper>
            </Col>
          </Row>
        </ArchitectureWrapper>
      </Wrapper>
    </Container>
  );
};

export default Services;
