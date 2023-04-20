import React, { useState } from "react";
import Image from "next/image";
import {
  ProfileCardWrapper,
  ServicesHeadingWrapper,
  TeamDetailsInfoWrapper,
  TeamDetailsImageWrapper,
  ProfileTitle,
  TeamDetailsDescWrapper,
  DescWrapper,
  TeamTimelineWrapper,
  TeamProgressContainer,
  TeamTimelineContainer,
  TopHeadingWrapper,
  ListWrapper,
  InfoWrapper,
  CertificationWrapper,
  TestimonialWrapper,
} from "./styles";
import { ArrowRight } from "@/components/Svgs";
import { Heading } from "@/components/Heading";
import { Container } from "react-bootstrap";
import upwork_logo_icon from "../../../../public/images/upwork_logo_icon.png";
import profileimg from "../../../../public/images/xact-accounting.png";
import quickbooksImage from "../../../../public/images/quickbooks.png";
import xero from "../../../../public/images/xero.png";
import xerotwo from "../../../../public/images/xero-two.png";
import { teamData } from "../../Team/teamData";
import ProfileCard from "@/components/ProfileCard";
import Typo from "@/components/Typo";

const Accounting = () => {
  return (
    <>
    <Container>
      <ServicesHeadingWrapper>
        <Heading variant="subHeading">Accounting</Heading>
      </ServicesHeadingWrapper>
      <TeamDetailsInfoWrapper>
        <TeamDetailsImageWrapper>
          <Image src={profileimg} alt="profile-A"></Image>
        </TeamDetailsImageWrapper>
        <ProfileTitle>
          <Heading variant="userHeading">Xact Accounting</Heading>
          <Typo variant="descTypo">Company Profile Links</Typo>
          <DescWrapper>
            <Image
              className="mx-3"
              src={upwork_logo_icon}
              alt="Upwork logo"></Image>
            <Typo variant="userDesc" color="#0A66C2">
              Xact Accounting | Upwork
            </Typo>
          </DescWrapper>
          <DescWrapper>
            <Image
              className="mx-3"
              src={upwork_logo_icon}
              alt="Upwork logo"></Image>
            <Typo variant="userDesc" color="#0A66C2">
              Xact Accounting | Upwork
            </Typo>
          </DescWrapper>
        </ProfileTitle>
      </TeamDetailsInfoWrapper>
      <TeamDetailsDescWrapper>
        <Typo variant="subDesTypo">Overview</Typo>
        <Typo variant={"descTypo"}>
          Lorem ipsum dolor sit amet consectetur. Sem ut pellentesque aliquam
          eget. Purus id faucibus mollis viverra viverra odio tempus tempor ut.
          Amet lectus in bibendum sed.Lorem ipsum dolor sit amet consectetur.
          Sem ut pellentesque aliquam eget. Purus id faucibus mollis viverra
          viverra odio tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum
          dolor sit amet consectetur. Sem ut pellentesque aliquam eget. Purus id
          faucibus mollis viverra viverra odio tempus tempor ut. Amet lectus in
          bibendum sed. Lorem ipsum dolor sit amet consectetur. Sem ut
          pellentesque aliquam eget. Purus id faucibus mollis viverra viverra
          odio tempus tempor ut. Amet lectus in bibendum sed.Lorem ipsum dolor
        </Typo>
      </TeamDetailsDescWrapper>
      <TeamTimelineWrapper>
        <TeamProgressContainer>
          <Heading variant="faqHeading">Services</Heading>
          <TeamDetailsDescWrapper>
            <ListWrapper>
              <Typo variant="subDesTypo">Overview</Typo>
              <ul>
                <li>
                  Bookkeeping - Cloud Accounting (SAP, Netsuite, Xero,
                  Quickbooks Online & Desktop...) With us, you can hire:
                </li>
                <li>Your bookkeeper for Invoicing and Billing</li>
                <li>Your bookkeeper for reconciliations</li>
                <li>
                  Your bookkeeper for Importing/transferring historical and
                  current data
                </li>
                <li>Your bookkeeper for creating Chart of Accounts</li>
                <li>Your bookkeeper for sales Tax Returns (GST and VAT)</li>
                <li>Your bookkeeper for Journal Entries/ Adjustments</li>
                <li>
                  Your bookkeeper for auditing and Rectification of Historical
                  discrepancies
                </li>
                <li>Bookkeeper for Financial and Management Reporting</li>
                <li>
                  Your bookkeeper for Accounts Receivable and Payable Management
                </li>
                <li>Expert bookkeepers for Administration and Procurement</li>
                <li>Your bookkeeper for Payroll Administration</li>
                <li>Your bookkeeper for Financial Analysis</li>
              </ul>
            </ListWrapper>
            <ListWrapper>
              <Typo variant="subDesTypo">Overview</Typo>
              <ul>
                <li>Your accountant for discrete Budgeting Exercises</li>
                <li>Your accountant for rolling Forecasts and Analysis</li>
                <li>Your accountant for daily Cash Flow Management</li>
                <li>Your accountant for collections and aging Reporting</li>
                <li>
                  Your accountant for the preparation of monthly Accounting
                  Reports and Financial Statements
                </li>
              </ul>
            </ListWrapper>
          </TeamDetailsDescWrapper>
        </TeamProgressContainer>
        <TeamTimelineContainer>
          <InfoWrapper>
            <Typo variant="accountingTypo">Company information</Typo>
            <Typo variant="subAccountingTypo">Agency size</Typo>
            <Typo variant="subAccountingTypo">51-200 workers</Typo>
            <Typo variant="subAccountingTypo">Year found</Typo>
            <Typo variant="subAccountingTypo">2013</Typo>
            <Typo variant="subAccountingTypo">Awards</Typo>
            <Typo variant="subAccountingTypo">Netsuite Procurement Expert</Typo>
            <Typo variant="subAccountingTypo">QBO Pro Advisor</Typo>
          </InfoWrapper>
          <CertificationWrapper>
            <Typo variant="subDesTypo">Certification</Typo>
            <Image src={quickbooksImage} alt="quickbooksImage-A"></Image>
            <Image src={xero} alt="xero-A"></Image>
            <Image src={xerotwo} alt="xerotwo-A"></Image>
          </CertificationWrapper>
          <TestimonialWrapper>
            <Typo variant="accountingTypo">Video Testimonials</Typo>
          </TestimonialWrapper>
        </TeamTimelineContainer>
      </TeamTimelineWrapper>
        <TopHeadingWrapper>
          <Typo variant="mainDesc">Our Team</Typo>
          <Typo variant="headingTypo">
            View All{" "}
            <ArrowRight className="mx-2" height="22px" color="#F05B25" />
          </Typo>
        </TopHeadingWrapper>
        <ProfileCardWrapper>
          {teamData?.slice(0, 3)?.map((data) => {
            return (
              <ProfileCard
                key={data.id}
                fontSize={15}
                profile={data?.profile}
                title={data.title}
                subTitle={data.subTitle}
                description={data.description}
              />
            );
          })}
        </ProfileCardWrapper>
    </Container>
</>
  );
};

export default Accounting;
