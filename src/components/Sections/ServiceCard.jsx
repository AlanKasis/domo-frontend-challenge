import React from "react";
import Card from "react-bootstrap/Card";
import CustomButton from "../Button";
import { Image } from "react-bootstrap";

const ServiceCard = ({ iconSrc, title, description }) => {
    return (
        <Card className="bg-white border-0 rounded-1 pt-5 px-3 text-center mt-2" >
            <div className="bg-primary rounded-circle p-2 w-4rem h-4rem m-auto d-flex justify-content-center align-items-center">
                <Image className="invert-100 rounded-circle p-2" src={iconSrc} alt={`${title}-icon`} height={60} width={60} />
            </div>
            <Card.Body className="p-0 mt-4">
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text className="text-gray text-secondary my-4 lh-lg">
                    {description}
                </Card.Text>
                <CustomButton variant="secondary" className="mx-auto my-3">Learn more</CustomButton>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;