import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CurrencySymbol from "../../../data/currency-symbol.json";
const ImpactDescription = ({ data }) => {
    const findCurrencySymbolByCode = (code) => {
        return CurrencySymbol[code] || code;
    };
    return (
        <Container
            style={{
                background: "#FFFFFF",
                borderRadius: "8px",
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
                    Impact Fund
                </h3>
            </Row>
            <Row
                xs={12}
                sm={6}
                lg={4}
                className="d-flex"
                style={{ justifyContent: "space-between" }}
            >
                <div className="d-flex  my-5">
                    <div
                        style={{
                            background: "#4A8EBD",
                            borderRadius: "5px",
                            width: 70,
                            height: 70,
                            marginRight: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="/images/icon/notemo.png"
                            width={40}
                            height={40}
                        />
                    </div>
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
                            Currency
                        </h5>
                        <h5
                            style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "3vh",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                            }}
                        >
                            {data?.currency}
                        </h5>
                    </Col>
                </div>
                <div className="d-flex  my-5">
                    <div
                        style={{
                            background: "#4A8EBD",
                            borderRadius: "5px",
                            width: 65,
                            height: 70,
                            marginRight: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="/images/icon/fund.png"
                            width={40}
                            height={40}
                        />
                    </div>
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
                            Fund Raised({data?.currency})
                        </h5>
                        <h5
                            style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "3vh",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                            }}
                        >
                            {findCurrencySymbolByCode(data?.currency)}
                            {new Intl.NumberFormat(
                                `${
                                    data?.currency === "NPR" ||
                                    data?.currency === "INR"
                                        ? "en-IN"
                                        : "en-US"
                                }`,
                                {
                                    currency: data?.currency,
                                }
                            ).format(data?.fundRaisedLocal)}
                        </h5>
                    </Col>
                </div>
                <div className="d-flex  my-5">
                    <div
                        style={{
                            background: "#4A8EBD",
                            borderRadius: "5px",
                            width: 65,
                            height: 70,
                            marginRight: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Image
                            src="/images/icon/fund.png"
                            width={40}
                            height={40}
                            style={{ borderColor: "white" }}
                        />
                    </div>
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
                            Fund Raaised (USD)
                        </h5>
                        <h5
                            style={{
                                color: "#000000",
                                fontFamily: "Poppins",
                                fontSize: "3vh",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                            }}
                        >
                            $
                            {new Intl.NumberFormat("en-US", {
                                currency: "USD",
                            }).format(data?.fundRaisedUsd)}
                        </h5>
                    </Col>
                </div>
            </Row>
        </Container>
    );
};

export default ImpactDescription;

