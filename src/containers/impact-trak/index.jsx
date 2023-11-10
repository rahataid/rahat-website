import React from "react";
import clsx from "clsx";
import ImpactTrackSummaryCard from "@components/cards/impacttrack/ImpactTrackSummaryCard";
import ImpactTrackSummaryList from "@components/cards/impacttrack";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Iconify from "@components/iconify";

const ImpactTrakArea = ({ data, className }) => {
    const uniqueDonorNames = [
        ...new Set(data.rows.map((row) => row.donor.name)),
    ];

    const uniqueDonorCount = uniqueDonorNames.length;
    return (
        <Stack gap={3} className="mt-5 my-5">
            <Container
                style={{
                    borderRadius: "8px",
                    background: "#FFFFFF",
                }}
                fluid
                className=" px-5 py-4"
            >
                <h2
                    style={{
                        fontFamily: "Poppins",
                        fontSize: "3vh",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        color: "#000000",
                    }}
                >
                    Summary
                </h2>
                <Row className="mt-3" xs={1} md={2} xl={4}>
                    <Col>
                        <ImpactTrackSummaryCard
                            cardTitle="Beneficiaries"
                            total={data.meta.totalBeneficiaries}
                            icon="/images/icon/beneficiary.png"
                        />
                    </Col>
                    <Col>
                        <ImpactTrackSummaryCard
                            cardTitle="Amount"
                            total={data.meta.totalAmount}
                            icon="/images/icon/Money.png"
                        />
                    </Col>
                    <Col>
                        <ImpactTrackSummaryCard
                            cardTitle="Communities"
                            total={data.meta.totalCommunities}
                            icon="/images/icon/Community.png"
                        />
                    </Col>
                    <Col>
                        <ImpactTrackSummaryCard
                            cardTitle="Donor"
                            total={uniqueDonorCount}
                            icon="/images/icon/donation.png"
                        />
                    </Col>
                </Row>
            </Container>

            <Container
                fluid
                style={{
                    borderRadius: "8px",
                    background: "#FFFFFF",
                }}
                className="col px-5 py-4 my-5"
            >
                <Row className="mb-5">
                    <Col>
                        <h2
                            style={{
                                fontFamily: "Poppins",
                                fontSize: "3vh",
                                fontStyle: "normal",
                                fontWeight: 500,
                                lineHeight: "normal",
                                color: "#000000",
                            }}
                        >
                            List
                        </h2>
                    </Col>
                    <Col className="text-end">
                        <Iconify
                            icon="bi:search"
                            style={{
                                width: "32px",
                                height: "32px",
                                marginRight: "8px",
                            }}
                        />
                        <Iconify
                            icon="mdi:sort"
                            style={{ width: "32px", height: "32px" }}
                        />
                    </Col>
                </Row>
                <Row className="mb-5">
                    {data?.rows?.map((content, index) => {
                        return (
                            <ImpactTrackSummaryList
                                donor={content?.donor}
                                date={content?.timestamp}
                                description={content?.description}
                                amount={content?.amount}
                                currency={content?.currency}
                                donee={content?.donee}
                                address={content?.donor?.address}
                                index={index}
                            />
                        );
                    })}
                </Row>
            </Container>
        </Stack>
    );
};

export default ImpactTrakArea;

