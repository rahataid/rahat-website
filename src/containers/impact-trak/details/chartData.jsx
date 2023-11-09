import Piechart from "@components/charts/Piechart";
import React from "react";
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";

const ChartData = ({ summary, selectedOption }) => {
    const BankData = Object.keys(summary?.bankStatus || {}).map((subAspect) => {
        const value = summary.bankStatus[subAspect];
        return {
            label: subAspect.replace(/_/g, " "),
            value: Number(value),
        };
    });
    const GenderData = Object.keys(summary?.gender || {}).map((subAspect) => {
        const value = summary.gender[subAspect];
        return {
            label: subAspect.replace(/_/g, " "),
            value: Number(value),
        };
    });

    const summaryData = Object.keys(summary?.internetAccess || {}).map(
        (subAspect) => {
            const value = summary.internetAccess[subAspect];
            return {
                label: subAspect.replace(/_/g, " "),
                value: Number(value),
            };
        }
    );

    return (
        <Row>
            <Col xs={12} md={6} sm={12}>
                {selectedOption === 1 && GenderData?.[0] && (
                    <Piechart chart={GenderData} title="Gender" />
                )}

                {selectedOption === 2 && BankData?.[0] && (
                    <Piechart chart={BankData} title={"Access To Bank"} />
                )}
                {selectedOption === 3 && summaryData?.[0] && (
                    <Piechart
                        chart={summaryData}
                        title={"Internet Distribution"}
                    />
                )}
            </Col>
            <Col
                xs={12}
                md={6}
                sm={12}
                className="text-center d-flex align-items-center justify-content-center "
            >
                <Container fluid="sm" style={{ width: "200px" }}>
                    <h5
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            color: "Black",
                        }}
                    >
                        Index
                    </h5>

                    {selectedOption === 1 && (
                        <ListGroup as="ol">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#99A3AE",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Male
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.gender?.MALE}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#63D1F4",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Female
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.gender?.FEMALE}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#90EE90",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Others
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.gender?.OTHERS}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#26466D",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Unkown
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.gender?.UNKNOWN}
                                </h5>
                            </ListGroup.Item>
                        </ListGroup>
                    )}

                    {selectedOption === 2 && (
                        <ListGroup as="ol">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#99A3AE",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Unkown
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.bankStatus?.UNKNOWN}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#63D1F4",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Unbanked
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.bankStatus?.UNBANKED}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#90EE90",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Banked
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.bankStatus?.BANKED}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#26466D",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Under Banked
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.bankStatus?.UNDERBANKED}
                                </h5>
                            </ListGroup.Item>
                        </ListGroup>
                    )}
                    {selectedOption === 3 && (
                        <ListGroup as="ol">
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#99A3AE",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Unkown
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.internetAccess?.UNKNOWN}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#63D1F4",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    No Internet
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.internetAccess?.NO_INTERNET}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#90EE90",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Phone Internet
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.internetAccess?.PHONE_INTERNET}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between align-items-center"
                                style={{
                                    background: "#26466D",
                                    borderRadius: "8px",
                                }}
                            >
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Home Internet
                                </h5>
                                <h5
                                    style={{
                                        fontFamily: "Poppins",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {summary?.internetAccess?.HOME_INTERNET}
                                </h5>
                            </ListGroup.Item>
                        </ListGroup>
                    )}
                </Container>
            </Col>
        </Row>
    );
};

export default ChartData;

