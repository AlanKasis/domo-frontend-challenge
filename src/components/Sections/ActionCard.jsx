import React from "react";
import Card from "react-bootstrap/Card";
import CustomButton from "../Button";
import { Col, Image, Row } from "react-bootstrap";

const ActionCard = ({ imgSrc, title, description, btnText }) => {
    return (
        <Col xs={12} lg={6} className="d-flex justify-content-between align-items-stretch mt-3">
            <Row className="mx-auto w-100 position-relative bg-blue border-0 rounded-1 p-3 py-5" style={{ background: "#3871FF" }}>
                <Col xs={12} md={8}>
                    <Card.Body className="p-0 mt-4 ">
                        <Card.Title className="h5 text-white fs-2">{title}</Card.Title>
                        <Card.Text className="text-light-gray text-secondary my-4">
                            {description}
                        </Card.Text>
                        <CustomButton variant="light" className="mt-3">{btnText}</CustomButton>
                    </Card.Body>
                </Col>
                {imgSrc &&
                    <Col xs={4} className="position-relative">
                        <Image  className="position-absolute end-0 bottom-n3 h-100" src={imgSrc} alt={`${title}-img`}/>
                    </Col>
                }
            </Row>
        </Col>
    );
};

export default ActionCard;