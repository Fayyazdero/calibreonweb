import ServiceCard from "@/components/ServiceCard"
import { Wrapper } from "./styles"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRight } from "@/components/Svgs"

const Services = () => {
    return <Wrapper  >
        <Container>
        <ServiceCard direction="row" src="/images/services/accounting-banner.png" title="Accounting" top="170px"  variant="secondary"   >
            <div>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
            </div>
        </ServiceCard>

        <Row>
            <Col xs={12} md={6} >
            <ServiceCard direction="column" src="/images/services/animation.png" title="Animation"  top="160px"  >
            <div>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
            </div>
        </ServiceCard>
            </Col>
            <Col xs={12} md={6} >
            <ServiceCard direction="column" src="/images/services/e-commerce.png" title="E-commerce"  top="160px"  variant="cyan" >
            <div>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
            </div>
        </ServiceCard>
            </Col>
        </Row>
        <ServiceCard direction="row-reverse" src="/images/services/flim.png" title="Film & TV" top="170px"  variant="grey"   >
            <div>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
                <p> Bookeeping</p>
            </div>
        </ServiceCard>
        </Container>
    </Wrapper>
}

export default Services