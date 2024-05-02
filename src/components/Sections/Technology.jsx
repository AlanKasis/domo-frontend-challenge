import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const TechnologySection = () => {
	return (
		<div className="d-flex align-items-center justify-content-between mt-n5" style={{ minHeight: "70vh", background: "#3871FF" }}>
			<Container className="w-100 d-flex align-items-center justify-content-between">
				<Row className="pt-5 mt-5">
					<Col xs={12} md={6}>
						<Card className="bg-transparent border-0">
							<Card.Body>
								<Card.Title className="text-white h4 fw-bold">We use cutting edge technology</Card.Title>
								<Card.Text className="text-light-gray mt-4 mb-0">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
						<Image src="stack-icons.png" alt="stack icons" height={300} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TechnologySection;