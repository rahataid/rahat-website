import Iconify from "@components/iconify";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const ImpactDescCard = ({ data }) => {
    return (
        <Container
            style={{
                background: "#FFFFFF",
                borderRadius: "8px",
                width: "100%",
            }}
            className="my-5 p-5"
            fluid
        >
            <Row>
                <h3
                    style={{
                        color: "#000000",
                        fontFamily: "Poppins",
                        fontSize: "32px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                    }}
                >
                    Impact Trak
                </h3>
            </Row>
            <Row xs={12} md={4}>
                <div className="d-flex  my-5">
                    <div
                        style={{
                            background: "#4A8EBD",
                            borderRadius: "5px",
                            width: 70,
                            height: 70,
                            marginRight: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src="/images/icon/curve-arrow.png"
                            width={40}
                            height={40}
                        />
                    </div>
                    <Col>
                        <h5
                            style={{
                                fontFamily: "Poppins",
                                fontSize: "1.8vh",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                color: "#888685",
                            }}
                        >
                            Donor
                        </h5>
                        <h5
                            style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "2vh",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                            }}
                        >
                            {data?.donor?.name}
                        </h5>
                    </Col>
                </div>
                <div className="d-flex mx-auto my-5">
                    <div
                        style={{
                            background: "#4A8EBD",
                            borderRadius: "5px",
                            width: 65,
                            height: 70,
                            marginRight: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src="/images/icon/curve-arrow (1).png"
                            width={40}
                            height={40}
                        />
                    </div>
                    <Col>
                        <h5
                            style={{
                                fontFamily: "Poppins",
                                fontSize: "1.8vh",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                                color: "#888685",
                            }}
                        >
                            Receiver
                        </h5>
                        <h5
                            style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontSize: "2vh",
                                fontWeight: 500,
                                lineHeight: "normal",
                            }}
                        >
                            {data?.donee?.name}
                        </h5>
                    </Col>
                </div>
            </Row>
        </Container>
    );
};

export default ImpactDescCard;

