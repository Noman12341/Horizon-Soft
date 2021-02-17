import React from 'react';
import Banner from '../Components/Banner';
import TotalSummarySec from '../Sections/TotalSummary';
import { Container, Row, Col } from 'react-bootstrap';
import BigTile from '../Components/BigTiles';
import JoinUs from '../Sections/JoinUs';
import WhyChoose from '../Sections/WhyHorizon';
import ContactUs from '../Sections/ContactUs';
import TechStack from '../Sections/TechStack';
function ProductDevPage() {
    return <main>
        <Banner smallHeading="Product Dev"
            bigHeading="Software Product Development"
            text="Give your business vision a life, turn it into a reality. HorizonSoft offers an intuitive and design-led engineering product service to accelerate software product innovation and deliver a superior customer experience." />
        <TotalSummarySec />
        <section className="section-pad">
            <div className="section-heading">
                <h2>Software Product Development Services</h2>
                <p>Capitalize on our diversified capabilities of end-to-end product engineering services</p>
            </div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/prototyping-mvp.svg"
                            title="Prototyping & MVP Development" text="Discover, identify, and outline product specific demands by creating prototype based on the latest market trends and customer feedbacks. Utilize our prototyping approach and MVP development service to test your product under specific market conditions and minimize risk." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/product-architecture-design.svg"
                            title="Product Architecture Design Service" text="Evolve with ground-breaking trends by drilling deep into the market and intellectually translating the needs into product features. Our skilled software product developers delve deep into each product architectural layer and derive insights to add competitive value to your business." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/ui_ux.svg"
                            title="UI/UX Design Services" text="Well defined UI/UX strategy to trace business workflows by creating information architecture, wireframing, and UX designing to engross more customers. Our UI/UX designers adapt design thinking approach to offer innovative product designs that are compelling, intuitive, and user-friendly in accordance with the current market." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/product-development.svg"
                            title="Product Development" text="Aligning to specific business needs, we offer end-to-end software product development services using multiple developments and operational methodologies like SCRUM, Agile, DevOps, Waterfall and Prototyping. Our adroit technical leads use razor-edge technology solutions, offer product innovation, accelerate time to market, and improve profitability." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/product-testing.svg"
                            title="Product Testing" text="Adhering to standards of Quality Assurance, we abide by strict quality analysis from Validation, Functional, Performance, Smoke and UAT testing to assure the developed product is stable, scalable and secure. Our expert QA team ensures our developed software products are easily customizable, resilient, and integrable at all levels." />
                    </Col>
                    <Col lg={4}>
                        <BigTile svg="/static/icons/maintenance-and-support.svg"
                            title="Maintenance & Support" text="Our software maintenance and support teams upgrade and update the product with the latest technology to optimize processes and improve overall efficiency. Our experienced support engineers ensure timely and hassle-free integration, migration, and enhancement services to the clients." />
                    </Col>
                </Row>
            </Container>
        </section>
        <JoinUs />
        <TechStack />
        <WhyChoose />
        <ContactUs />
    </main>
}
export default ProductDevPage;