import Iconify from "@components/iconify";
import { Icon } from "@iconify/react";
import { blue } from "@mui/material/colors";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ImpactTrackSummaryCard = ({ cardTitle, total, icon }) => {
    return (
        <Container className="my-2" fluid>
            <Row xs="auto">
                <Col
                    style={{
                        background: "#4A8EBD",
                        borderRadius: "5px",
                        width: 65,
                        height: 70,
                        color: "white",
                    }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Image
                        src={icon}
                        width={40}
                        height={40}
                        style={{ color: "white" }}
                    />
                </Col>
                <Col>
                    <h5
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "normal",
                            color: "#888685",
                        }}
                    >
                        {cardTitle}
                    </h5>
                    <h5
                        style={{
                            color: "#000000",
                            fontFamily: "Poppins",
                            fontSize: "3vh",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "normal",
                        }}
                    >
                        {cardTitle === "Amount" && "NPR"}{" "}
                        {cardTitle === "Amount"
                            ? total.toLocaleString("en-IN")
                            : total}
                    </h5>
                </Col>
            </Row>
        </Container>
    );
};

export default ImpactTrackSummaryCard;

