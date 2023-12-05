import Iconify from "@components/iconify";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const JobDetails = ({ data }) => {
    return (
        <Container fluid>
            <Container className="mt-5 p-5 border">
                <Row xs="1" md="3" sm>
                    <Col
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            color: "#231F20",
                        }}
                        className="fs-1"
                    >
                        {data?.designation}{" "}
                    </Col>

                    <Col
                        className="fs-3"
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            color: "#231F20",
                        }}
                    >
                        <span>
                            <Iconify icon="tdesign:time" width={25}></Iconify>
                        </span>
                        <span className="mx-5">{data?.duration}</span>
                    </Col>
                    <Col
                        className="fs-3"
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            color: "#231F20",
                        }}
                    >
                        <span>
                            <Iconify
                                icon="ic:baseline-people"
                                width={25}
                            ></Iconify>
                        </span>
                        <span className="mx-5">{data?.required}</span>
                    </Col>
                </Row>
            </Container>
            <Container
                className="mt-5"
                style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    color: "#231F20",
                }}
            >
                <h6>About Rahat</h6> <br />
                <p>
                    Rahat is a blockchain-based financial access platform to
                    support vulnerable communities and build resilience against
                    the impact of climate change. Our offerings cater to
                    humanitarian agencies and financial institutions,
                    facilitating impactful change in financial access to the
                    underbanked population.{" "}
                </p>
            </Container>
            <Container
                className="mt-5"
                style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    color: "#231F20",
                }}
            >
                <h6>Job Description</h6> <br />
                <p>{data?.description}</p>
            </Container>
            <Container
                className="mt-5"
                style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    color: "#231F20",
                }}
            >
                <h6>Role</h6> <br />
                <ul>
                    {data?.role?.map((content) => {
                        return (
                            <li
                                style={{
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    color: "#231F20",
                                }}
                                className="fs-3"
                            >
                                {content}
                            </li>
                        );
                    })}
                </ul>
            </Container>
            <Container
                className="mt-5"
                style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                    color: "#231F20",
                }}
            >
                <h6>Qualification</h6> <br />
                <ul>
                    {data?.qualificationAndRequirements?.map((content) => {
                        return (
                            <li
                                style={{
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    color: "#231F20",
                                }}
                                className="fs-3"
                            >
                                {content}
                            </li>
                        );
                    })}
                </ul>
            </Container>
            <Container
                className="mt-5"
                style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "normal",
                    color: "#231F20",
                }}
            >
                <p>
                    Interested individuals are requested to send their updated
                    CV with a cover letter along with their LinkedIn profile at
                    <span
                        style={{
                            color: "##2B7EC1",
                            marginLeft: 10,
                        }}
                    >
                        anusha.thapa@rumsan.net.
                    </span>
                </p>
            </Container>
        </Container>
    );
};
export default JobDetails;

