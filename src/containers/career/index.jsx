import React from "react";
import { Col, Container, Image, ListGroup, Row, Stack } from "react-bootstrap";
import data from "../../data/career.json";
import CareerList from "@components/list/career/careerList";

const CareerContainer = () => {
    return (
        <Container fluid>
            <Container className="mb-4 mt-4 ">
                <Row xs="auto" md="2">
                    <Col className="my-auto">
                        <h3
                            className="fs-1 fw-bold text-center mb-4"
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                                color: "#4A8EBD",
                            }}
                        >
                            Join our Team
                        </h3>
                        <p>
                            Rahat is a blockchain-based financial access
                            platform to support vulnerable communities and build
                            resilience against the impact of climate change. Our
                            offerings cater to humanitarian agencies and
                            financial institutions, facilitating impactful
                            change in financial access to the underbanked
                            population.{" "}
                        </p>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Image src="/images/pic/job1.png" />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="p-4  mb-4 mt-4 text-center">
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                    }}
                >
                    <span style={{ color: "#4A8EBD" }}>Current</span> openings
                </h3>
                <p>
                    Do you think you are a good fit? Apply now. We would love to
                    meet you.
                </p>
            </Container>
            <Stack className="p-4" gap={3}>
                {data?.jobs?.map((career) => {
                    return <CareerList career={career} />;
                })}
            </Stack>
        </Container>
    );
};

export default CareerContainer;

