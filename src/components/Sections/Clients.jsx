import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ActionCard from "./ActionCard";

const ClientsSection = () => {
  return (
    <div className="bg-white d-flex align-items-center justify-content-between" style={{ minHeight: "60vh" }}>
      <Container className="d-flex flex-wrap align-items-start justify-content-between h-100 pt-5">
        <Row className="mx-auto d-flex align-items-center w-100">
          <Col xs={12} className="text-center my-4" >
            <span className="text-gray w-100 text-center small mb-5">CLIENTS WE WORKED WITH</span>
          </Col>
          <Col xs={6} md={4} lg={2} className="my-4">
            <Image src="tnw-logo.png" alt="stack icons" fluid />
          </Col>
          <Col xs={6} md={4} lg={2} className="my-4">
            <Image src="tnw-logo.png" alt="stack icons" fluid />
          </Col>
          <Col xs={6} md={4} lg={2} className="my-4">
            <Image src="tnw-logo.png" alt="stack icons" fluid />
          </Col>
          <Col xs={6} md={4} lg={2} className="my-4">
            <Image src="tnw-logo.png" alt="stack icons" fluid />
          </Col>
          <Col xs={6} md={4} lg={2} className="my-4">
            <Image src="tnw-logo.png" alt="stack icons" fluid />
          </Col>
          <Col xs={6} md={4} lg={2} className="my-4">
            <Image src="tnw-logo.png" alt="stack icons" fluid />
          </Col>
        </Row>
        <Row className="mx-auto w-100 d-flex justify-content-between align-items-stretch">
          <ActionCard
            title="Get in touch with us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imgSrc=""
            btnText="Hire Us"
          />
          <ActionCard
            title="Our Projects"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imgSrc="/phone.png"
            btnText="See Projects"
          />
        </Row>
      </Container>
    </div >
  );
};

export default ClientsSection;