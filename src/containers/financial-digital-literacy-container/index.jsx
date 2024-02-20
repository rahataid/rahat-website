import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FinDigLiteracy from "../../data/fin-dig-liter.json";
import Image from "next/image";
const FinancialDigitalLiteracyContainer = () => {
    return (
        <Container>
            <Row className="g-4 mt-5">
                {FinDigLiteracy?.map((item, index) => {
                    return (
                        <Col
                            lg={6}
                            md={12}
                            key={index}
                            className="mb-4 mb-lg-0"
                        >
                            <Image
                                src={item.image}
                                className="w-100 h-100 object-fit-cover shadow-1-strong rounded mb-4"
                                alt={`Image ${index + 1}`}
                                width={720}
                                height={480}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default FinancialDigitalLiteracyContainer;

