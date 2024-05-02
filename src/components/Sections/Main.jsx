import React from "react";
import Card from "react-bootstrap/Card";
import CustomButton from "../Button";
import { Col, Container, Image, Row } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container>
      <Image className="position-absolute top-0 end-0 bg-image" src="/asset-background.jpg" alt="Background" />
      <Row className="align-items-center" style={{ minHeight: "calc(100vh - 56px)" }}>
        <Col xs={12} md={8} lg={6}>
          <Card className="bg-transparent border-0">
            <Card.Body>
              <Card.Title className="text-white display-4 fw-bold">We build beautiful and reliable web solutions</Card.Title>
              <Card.Text className="text-secondary mt-4 mb-0">
                We strongly believe that communication, trust and transparency are the essential elements of successful business relationships.
              </Card.Text>
              <Card.Text className="text-secondary mb-5">
                Ready for the journey?
              </Card.Text>
              <div className="d-flex flex-column flex-md-row">
                <CustomButton variant="secondary" className="me-md-3 mb-3 mb-md-0">Learn more</CustomButton>
                <CustomButton variant="primary">Our Projects</CustomButton>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
