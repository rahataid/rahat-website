import Iconify from "@components/iconify";
import Link from "next/link";
import React from "react";
import { Anchor, Col, Container, Row, Stack } from "react-bootstrap";

const CareerList = ({ career, path = "/career" }) => {
    if (career.status !== true) {
        return null;
    }
    return (
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
                            {career?.status === false ? "Closed" : "Apply Now"}
                        </span>
                    </Col>
                </Row>
            </Container>
        </Link>
    );
};

export default CareerList;

