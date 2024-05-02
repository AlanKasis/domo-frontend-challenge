import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div className="w-full d-flex align-items-center mt-n5" style={{ minHeight: "60vh", background: "#283345" }}>
            <Container className="w-full d-flex flex-wrap align-items-start justify-content-between mt-5 pt-5">
                <Row className="w-100">
                    <Col xs={12} lg={3}>
                        <Card className="bg-transparent border-0 w-100" >
                            <Card.Body>
                                <Card.Title className="text-white h5">compleet labs</Card.Title>
                                <Card.Text className="text-gray mt-4 mb-0 lh-lg">
                                    Alan Kasis
                                </Card.Text>
                                <Card.Text className="text-gray mt-4 mb-0 lh-lg">
                                    alankasis@gmail.com
                                </Card.Text>
                                <Card.Text className="text-gray mt-4 mb-0 lh-lg">
                                    +541166475572
                                </Card.Text>
                                <div className="d-flex gap-3 mt-5">
                                    <a href="https://github.com/AlanKasis">
                                        <Image className="invert-100" src="/github-logo.png" alt="github logo" width={32} />
                                    </a>
                                    <a href="https://github.com/AlanKasis">
                                        <Image className="invert-100" src="/github-logo.png" alt="github logo" width={32} />
                                    </a>
                                    <a href="https://github.com/AlanKasis">
                                        <Image className="invert-100" src="/github-logo.png" alt="github logo" width={32} />
                                    </a>
                                    <a href="https://github.com/AlanKasis">
                                        <Image className="invert-100" src="/github-logo.png" alt="github logo" width={32} />
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <Card className="bg-transparent border-0 w-100 w-md-25" >
                            <Card.Body>
                                <Card.Title className="text-white">SITEMAP</Card.Title>
                                <Card.Text className="text-secondary mt-4 mb-0 lh-lg">
                                    <Nav>
                                        <Nav.Link className="text-gray px-0 w-100" href="#home">Home</Nav.Link>
                                        <Nav.Link className="text-gray px-0 w-100" href="#link">Technology</Nav.Link>
                                        <Nav.Link className="text-gray px-0 w-100" href="#link">Services</Nav.Link>
                                        <Nav.Link className="text-gray px-0 w-100" href="#link">About</Nav.Link>
                                    </Nav>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <Card className="bg-transparent border-0 w-100 w-md-25" >
                            <Card.Body>
                                <Card.Title className="text-white">CASE STUDIES</Card.Title>
                                <Card.Text className="text-secondary mt-4 mb-0 lh-lg">
                                    <Nav>
                                        <Nav.Link className="text-gray px-0 w-100" href="#home">Swiss Airlines</Nav.Link>
                                        <Nav.Link className="text-gray px-0 w-100" href="#link">Google</Nav.Link>
                                        <Nav.Link className="text-gray px-0 w-100" href="#link">Apple</Nav.Link>
                                        <Nav.Link className="text-gray px-0 w-100" href="#link">Nike</Nav.Link>
                                    </Nav>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={3}>
                        <Card className="bg-transparent border-0 w-100 w-md-25" >
                            <Card.Body>
                                <Card.Title className="text-white">CONTACT</Card.Title>
                                <Card.Text className="text-secondary mt-4 mb-0 lh-lg">
                                    <Nav>
                                        <Nav.Link className="text-gray px-0 w-100" href="#home">Jobs</Nav.Link>
                                        <Nav.Link className="text-gray px-0 w-100" href="#link">Hire Us</Nav.Link>
                                    </Nav>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
