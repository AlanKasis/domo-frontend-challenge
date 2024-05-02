import React from "react";
import Card from "react-bootstrap/Card";
import ServiceCard from "./ServiceCard";
import servicesJson from '../../data/services.json'
import { Col, Container, Row } from "react-bootstrap";

const ServicesSection = () => {
  return (
    <Container className="">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="bg-transparent border-0 text-center">
            <Card.Body>
              <Card.Title className="text-white h4 fw-bold">Our Services</Card.Title>
              <Card.Text className="text-secondary mt-4 mb-0">
                We feel very strongly about our skills when it comes to planning, designing, and coding applications. Here is what we love to do!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="">
        {servicesJson.map((service, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex align-items-stretch">
            <ServiceCard title={service.title} description={service.description} iconSrc={service.iconSrc} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesSection;