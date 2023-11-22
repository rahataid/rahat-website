import React, { useEffect, useState } from "react";
import { Col, Container, Image, ListGroup, Row, Stack } from "react-bootstrap";
import data from "../../data/career.json";
import CareerList from "@components/list/career/careerList";

const CareerContainer = () => {
    return (
        <Container fluid className="p-0 m-0">
            <Container
                className="mb-4  border"
                style={{ background: "#4A8EBD", height: "300px" }}
                fluid
            >
                <Container
                    className="mt-5"
                    style={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        color: "white",
                    }}
                >
                    <Row className="p-3">
                        <Image
                            src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/career-icon-1.png"
                            className="img-fluid "
                            style={{
                                width: "70px",
                                height: "64px",
                            }}
                        />
                    </Row>
                    <Row className="p-3 fs-1 fw-bold">Career</Row>
                    <Row className="px-3  fs-2">
                        If you're passionate about building connections, driving
                        collaborations, and making a positive impact, we want to
                        hear from you.
                    </Row>
                </Container>
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

