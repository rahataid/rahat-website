import Iconify from "@components/iconify";
import Anchor from "@ui/anchor";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ImpactTrackSummaryList = ({
    donor,
    date,
    description,
    amount,
    currency,
    donee,
    path = "/impact-trak",
    address,
    index,
}) => {
    const changedDate = new Date(date);
    const formattedDate = changedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const isOddRow = index % 2 === 1;
    return (
        <Col
            xs={12}
            sm={6}
            md={4}
            className="w-100 my-4 p-3"
            style={{
                background: "#F7F5FA",
                borderRadius: "8px",
                borderLeft: isOddRow
                    ? "4px solid #1B9C30"
                    : "4px solid #F2994A",
            }}
        >
            <Anchor path={`${path}/${address}`}>
                <Container fluid>
                    <Row className="p-4 " xs="auto" sm={8} md={4}>
                        <Col>
                            <Row xs="auto" sm={8}>
                                <div
                                    style={{
                                        background: "#FFFFFF",
                                        borderRadius: "50%",
                                        border: "2px solid #AFAFAF",
                                        width: 65,
                                        height: 70,
                                    }}
                                    className="d-flex justify-content-center align-items-center"
                                >
                                    <img
                                        src="/images/logo/logo-dark.png"
                                        style={{
                                            color: "#1B9C30",
                                        }}
                                    />
                                </div>
                                <Col>
                                    <h5
                                        style={{
                                            color: "#9A9A9A",
                                            fontFamily: "Poppins",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "normal",
                                        }}
                                    >
                                        Receiver
                                    </h5>
                                    <h2
                                        style={{
                                            color: "#000000",
                                            fontFamily: "Poppins",
                                            fontSize: "16px",
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            lineHeight: "normal",
                                        }}
                                    >
                                        {donee?.name}
                                    </h2>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <h5
                                style={{
                                    color: "#9A9A9A",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "normal",
                                }}
                            >
                                Pilot
                            </h5>
                            <h2
                                style={{
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                }}
                            >
                                {description}
                            </h2>
                        </Col>
                        <Col>
                            <h5
                                style={{
                                    color: "#9A9A9A",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "normal",
                                }}
                            >
                                Donor
                            </h5>
                            <h2
                                style={{
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                }}
                            >
                                {donor?.name}
                            </h2>
                        </Col>
                        <Col>
                            <h5
                                style={{
                                    color: "#9A9A9A",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 400,
                                    lineHeight: "normal",
                                }}
                            >
                                Amount
                            </h5>

                            <h2
                                style={{
                                    color: "#000000",
                                    fontFamily: "Poppins",
                                    fontSize: "16px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                }}
                            >
                                {currency} {amount}
                            </h2>
                        </Col>
                    </Row>

                    <Row className="p-4" style={{ background: "#F9F9F9" }}>
                        <Col className="d-flex justify-content-between">
                            <div className="d-flex">
                                <Iconify
                                    icon={`${
                                        isOddRow
                                            ? "teenyicons:tick-circle-solid"
                                            : "heroicons-solid:exclaimation-circle"
                                    }`}
                                    style={{
                                        color: isOddRow ? "#1B9C30" : "#F2994A",
                                        width: "18px",
                                        height: "25px",
                                    }}
                                />

                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "151%",
                                        color: isOddRow ? "#1B9C30" : "#F2994A",
                                    }}
                                    className="mx-2"
                                >
                                    {`${
                                        !isOddRow
                                            ? "Project Pending"
                                            : "Project Completed"
                                    }`}
                                </h5>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <div className="d-flex justiy-content-space-between">
                                <Iconify
                                    icon="ri:time-line"
                                    style={{
                                        color: "#4A8EBD",
                                        width: "18px",
                                        height: "25px",
                                    }}
                                />
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "16px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "151%",
                                        color: "#4A8EBD",
                                    }}
                                >
                                    {formattedDate}
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Anchor>
        </Col>
    );
};

export default ImpactTrackSummaryList;

