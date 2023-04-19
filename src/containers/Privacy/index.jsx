import { useState } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { tabData } from "./data";
import {
  TitleWrapper,
  NavWrapper,
  ContentWrapper,
  StyledContainer,
} from "./styles";
import { Heading } from "@/components/Heading";
import Typo from "@/components/Typo";

const Privacy = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].eventKey);

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <StyledContainer>
      <Tab.Container id="left-tabs-example" defaultActiveKey={activeTab}>
        <Row>
          <Col sm={12} md={3} className="col">
            <NavWrapper>
              <Nav variant="pills" className="flex-column">
                {tabData.map((tab) => (
                  <Nav.Item key={tab.eventKey}>
                    <Nav.Link
                      eventKey={tab.eventKey}
                      onClick={() => handleTabClick(tab.eventKey)}
                    >
                      <Typo variant="tabTypo">{tab.title}</Typo>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </NavWrapper>
          </Col>
          <Col sm={12} md={9}>
            <TitleWrapper className="title-wrapper">
              <Heading
                variant="subHeading"
                title={tabData.find((tab) => tab.eventKey === activeTab)?.title}
              />
            </TitleWrapper>
            <ContentWrapper className="content-wrapper">
              <Tab.Content>
                {tabData.map((tab) => (
                  <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                    <p>{tab.content}</p>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </ContentWrapper>
          </Col>
        </Row>
      </Tab.Container>
    </StyledContainer>
  );
};

export default Privacy;
