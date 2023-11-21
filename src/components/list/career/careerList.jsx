import Iconify from "@components/iconify";
import Link from "next/link";
import React from "react";
import { Anchor, Col, Container, Row, Stack } from "react-bootstrap";

const CareerList = ({ career, path = "/career" }) => {
    return (
        <Container
            className="my-5"
            style={{
                borderBottom: "1px solid grey",
                cursor: "pointer",
            }}
        >
            <Row className="my-4">
                <Col className="d-flex align-items-center ">
                    <Iconify
                        icon="ph:bag-bold"
                        width={30}
                        style={{ color: "#4A8EBD" }}
                    />
                    <span
                        className="fs-2 mx-4"
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                        }}
                    >
                        {career?.designation}
                    </span>
                </Col>
                <Col className="text-end">
                    <Link
                        href={`${path}/${career?.id}`}
                        className="fs-4 mx-4"
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            color: "#4A8EBD",
                        }}
                    >
                        Apply Now
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default CareerList;

