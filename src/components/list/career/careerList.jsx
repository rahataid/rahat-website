import Iconify from "@components/iconify";
import Link from "next/link";
import React from "react";
import { Anchor, Col, Container, Row, Stack } from "react-bootstrap";

const CareerList = ({ career, path = "/career" }) => {
    if (career.status !== true) {
        return null;
    }
    return (
        <>
            <Container
                className="my-5"
                style={{
                    borderBottom: "1px solid grey",
                    cursor: "pointer",
                }}
            >
                <Row className="my-4">
                    <Col className="d-flex align-items-centers" sm={8}>
                        <Iconify
                            icon="ph:bag-bold"
                            width={30}
                            style={{ color: "#231F20" }}
                        />
                        <span
                            className="fs-2 mx-4"
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                                color: "#2B7EC1",
                            }}
                        >
                            Evaluation of Rahat System for Anticipatory Action
                            Pilot Project (October 15, 2024)
                        </span>
                    </Col>
                    <Col sm={4} className="text-end">
                        <span
                            className="fs-4 mx-4 "
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                                // color: ` ${
                                //     career?.status === false ? "red" : "#2B7EC1"
                                // }  `,
                            }}
                        >
                            <a
                                href="https://assets.rumsan.net/rumsan-group/evaluation-of-rahat-system-for-anticipatory-action-pilot-project.pdf"
                                target="_blank"
                                style={{ color: "#2B7EC1" }}
                            >
                                Read More
                            </a>
                        </span>
                    </Col>
                </Row>
            </Container>
            <Link
                href={`${path}/${career?.slug}`}
                style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    color: ` ${career?.status === false ? "red" : "#2B7EC1"}  `,
                }}
            >
                <Container
                    className="my-5"
                    style={{
                        borderBottom: "1px solid grey",
                        cursor: "pointer",
                    }}
                >
                    <Row className="my-4">
                        <Col className="d-flex align-items-centers" sm={8}>
                            <Iconify
                                icon="ph:bag-bold"
                                width={30}
                                style={{ color: "#231F20" }}
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
                        <Col sm={4} className="text-end">
                            <span
                                className="fs-4 mx-4 "
                                style={{
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    // color: ` ${
                                    //     career?.status === false ? "red" : "#2B7EC1"
                                    // }  `,
                                }}
                            >
                                {career?.status === true
                                    ? "Closed"
                                    : "Apply Now"}
                            </span>
                        </Col>
                    </Row>
                </Container>
            </Link>
        </>
    );
};

export default CareerList;
