import Iconify from "@components/iconify";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const JobDetails = ({ data }) => {
    return (
        <Container fluid>
            <Container className="mt-5 p-4 border">
                {data?.type === "diff" ? (
                    <div className="text-center">
                        <h2
                            className="mb-3"
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                                color: "#231F20",
                            }}
                        >
                            {data?.designation}
                        </h2>
                    </div>
                ) : (
                    <Row xs="1" md="2" className="align-items-center">
                        <Col
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                                color: "#231F20",
                            }}
                            className="fs-2 span-2"
                        >
                            {data?.designation}
                        </Col>

                        <Col
                            className="fs-3 "
                            style={{
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                                color: "#231F20",
                                padding: 10,
                            }}
                        >
                            <span>
                                <Iconify
                                    icon="tdesign:time"
                                    width={25}
                                ></Iconify>
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

                        {data?.location && (
                            <Col
                                className="fs-3"
                                style={{
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    color: "#231F20",
                                    padding: 10,
                                }}
                            >
                                <span>
                                    <Iconify
                                        icon="mdi:location"
                                        width={25}
                                    ></Iconify>
                                </span>
                                <span className="mx-5">{data?.location}</span>
                            </Col>
                        )}
                    </Row>
                )}
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
                {data?.type === "diff" ? (
                    <>
                        <h6>Background And Context</h6> <br />
                        <p>
                            Rahat is an open source blockchain based CVA
                            management platform which aims to build financial
                            inclusion in the humanitarian sector by providing
                            access to aid for vulnerable communities. It uses
                            mobile-based tokens to manage and transparently
                            monitor the flow of aid transactions by humanitarian
                            agencies and their various operational stakeholders
                            / intermediaries for emergency response and recovery
                            programmes, especially in hard-to-reach areas during
                            humanitarian as well as development settings. Rahat
                            has now also been certified digital public good by
                            the Digital Public Good Alliance. Rahat has been
                            successfully piloted in Nepal and Pakistan to reach
                            16k beneficiaries. <br />
                            Now, Rahat aims to expand its services based on the
                            demands and feedback received from our users that
                            are: beneficiary validation and reporting,
                            integration with multi-sig trigger mechanism and
                            integration with token off-ramping services.
                        </p>
                    </>
                ) : (
                    <>
                        <h6>About Rahat</h6> <br />
                        <p>
                            {/* Rahat is a blockchain-based financial access
                            platform to support vulnerable communities and build
                            resilience against the impact of climate change. Our
                            offerings cater to humanitarian agencies and
                            financial institutions, facilitating impactful
                            change in financial access to the underbanked
                            population. [] */}
                            Rahat is a product of Rumsan Associates Pvt. Ltd.,
                            an open-source blockchain-based financial access
                            platform to support vulnerable communities and a
                            community showcase platform. It uses a community
                            platform to connect donors and communities to
                            support their needs. Rahat also manages and monitors
                            the flow of transactions in cash distribution
                            projects, maintaining end-to-end transparency among
                            various local communities and stakeholders.
                        </p>
                    </>
                )}
            </Container>
            {data?.type === "diff" ? (
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
                    <h6>Objective</h6> <br />
                    <ul>
                        {data?.objective?.map((content) => {
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
            ) : (
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
            )}
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
                {data?.type === "diff" ? (
                    <>
                        <h6>Scope of Work</h6> <br />
                        <ul>
                            {data?.scope?.map((content) => {
                                return (
                                    <li
                                        style={{
                                            fontFamily: "Poppins",
                                            fontStyle: "normal",
                                            fontWeight: 600,
                                            lineHeight: "normal",
                                            color: "#231F20",
                                        }}
                                        className="fs-3"
                                    >
                                        {content?.name}
                                        <p
                                            style={{
                                                fontFamily: "Poppins",
                                                fontStyle: "normal",
                                                fontWeight: 500,
                                                lineHeight: "normal",
                                                color: "#231F20",
                                            }}
                                        >
                                            {content?.heading}
                                        </p>

                                        <ul>
                                            {content?.listing?.map(
                                                (subItem) => (
                                                    <li
                                                        style={{
                                                            listStyleType:
                                                                "circle",
                                                            fontFamily:
                                                                "Poppins",
                                                            fontStyle: "normal",
                                                            fontWeight: 400,
                                                            lineHeight:
                                                                "normal",
                                                            color: "#231F20",
                                                        }}
                                                        className="fs-3"
                                                    >
                                                        {subItem}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                ) : (
                    <>
                        <h6>Role</h6> <br />
                        <ul>
                            {data?.role?.map((content, index) => {
                                return (
                                    <li
                                        style={{
                                            fontFamily: "Poppins",
                                            fontStyle: "normal",
                                            fontWeight: 500,
                                            lineHeight: "normal",
                                            color: "#231F20",
                                        }}
                                        key={index}
                                        className="fs-3"
                                    >
                                        {content}
                                    </li>
                                );
                            })}
                        </ul>
                    </>
                )}
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
                {data?.type === "diff" ? (
                    <>
                        <h6>Duration</h6> <br />
                        <p>{data?.duration}</p>
                    </>
                ) : (
                    <>
                        <h6>Qualification</h6> <br />
                        <ul>
                            {data?.qualificationAndRequirements?.map(
                                (content) => {
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
                                }
                            )}
                        </ul>
                    </>
                )}
            </Container>
            {data?.paymentModality && (
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
                    <h6>Payment Modality</h6> <br />
                    <p>
                        The payment modality would be based on the following
                        milestones
                    </p>
                    <div style={{ textAlign: "center" }}>
                        <Image src="/images/pic/PaymentModality.png" />
                    </div>
                    <ul>
                        {data?.paymentModality?.map((content) => {
                            return (
                                <li
                                    style={{
                                        fontFamily: "Poppins",
                                        fontStyle: "normal",
                                        fontWeight: 500,
                                        lineHeight: "normal",
                                        color: "#231F20",
                                    }}
                                    className="fs-4"
                                >
                                    {content}
                                </li>
                            );
                        })}
                    </ul>
                </Container>
            )}
            {data?.benefits && (
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
                    <h6>Benefits</h6> <br />
                    <ul>
                        {data?.benefits?.map((content) => {
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
            )}

            {data?.type === "diff" ? (
                <>
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
                        <h6>Submission</h6> <br />
                        <p>
                            IT service providers are invited to submit their
                            technical and financial proposals electronically to
                            &nbsp;<u>team@rumsan.com</u> or physically at
                            Rumsan’s office located in Sanepa, Lalitpur by EOD
                            on Oct 17, 2023. Please fill in the Due diligence
                            (Template provided
                            <a
                                style={{
                                    color: "##2B7EC1",
                                    marginLeft: 10,
                                }}
                                href="https://docs.google.com/document/d/1o_ozJzSlefxwN3aGpCHcAu_MBO6rzQjN1O6OxSIUB2Q/edit"
                            >
                                here{" "}
                            </a>
                            ) copy of the incorporation certificate, VAT
                            registration certificate, and the latest tax
                            clearance certificate of your company.
                        </p>
                    </Container>

                    <Container
                        className="mt-5"
                        style={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "normal",
                            color: "#231F20",
                            textAlign: "left",
                        }}
                    >
                        <h6>Contact</h6>
                        <ul>
                            <li
                                style={{
                                    listStyleType: "none",
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    color: "#231F20",
                                    textAlign: "left",
                                }}
                            >
                                Anish Maharjan
                            </li>
                            <li
                                style={{
                                    listStyleType: "none",
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    color: "#231F20",
                                    textAlign: "left",
                                }}
                            >
                                {" "}
                                Phone Number: +977 9801298034
                            </li>
                            <li
                                style={{
                                    listStyleType: "none",
                                    fontFamily: "Poppins",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "normal",
                                    color: "#231F20",
                                    textAlign: "left",
                                }}
                            >
                                Email: anish.maharjan@rumsan.net
                            </li>
                        </ul>
                    </Container>
                </>
            ) : (
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
                        Interested individuals are requested to send their
                        updated CV with a cover letter along with their LinkedIn
                        profile at
                        <span
                            style={{
                                color: "##2B7EC1",
                                marginLeft: 10,
                            }}
                        >
                            anusha.thapa@rumsan.net. &nbsp;
                        </span>
                        {data?.candidates && (
                            <>
                                Female candidates are highly encouraged to apply
                            </>
                        )}
                    </p>
                </Container>
            )}
        </Container>
    );
};
export default JobDetails;

