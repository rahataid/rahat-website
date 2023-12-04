import React, { useEffect, useState } from "react";
import { Col, Container, Image, ListGroup, Row, Stack } from "react-bootstrap";
import data from "../../data/career.json";
import CareerList from "@components/list/career/careerList";

const CareerContainer = () => {
    return (
        <Container fluid className="p-0 m-0">
            <Container
                className="mb-4 p-0 "
                fluid
                style={{
                    position: "relative",
                    backgroundImage: `url("/images/pic/career.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    height: "300px",
                }}
            >
                <Container
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(4px)",
                        backgroundColor: "rgba(35 ,31 ,32, 0.3)",
                    }}
                    className="d-flex align-items-center justify-content-center"
                    fluid
                >
                    <h2 style={{ color: "#FFFFFF " }}>Career</h2>
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
                    <span style={{ color: "#2B7EC1" }}>Current</span> openings
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

