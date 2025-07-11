import OurServices from "@components/our-services";
import VideoArea from "@components/youtube-video";
import CashAndVouvherAssistancePage from "@containers/cash-and-voucher-assistance";
import { normalizedData } from "@utils/methods";
import Link from "next/link";
import React from "react";
import {
    Button,
    Col,
    Container,
    Nav,
    Row,
    Stack,
    Tab,
    TabContainer,
    TabContent,
    TabPane,
    Tabs,
} from "react-bootstrap";
import homepageData from "../../data/home.json";
import AnticipatoryActionsPage from "@containers/anticipatory-action-page";

const FinancialAccessContainer = ({ bannerKey, setBannerKey }) => {
    const content = normalizedData(homepageData?.content || []);

    return (
        <Row className="g-5 mt-2">
            <Tab.Container
                defaultActiveKey="CVA"
                activeKey={bannerKey}
                onSelect={(k) => setBannerKey(k)}
            >
                <Nav className="nav d-flex justify-content-center">
                    <div className="setting-option header-btn mx-5 mb-3 ">
                        <Nav.Link
                            as="button"
                            eventKey="CVA"
                            className={`btn btn-large btn-primary ${
                                bannerKey === "CVA"
                                    ? "border border-2"
                                    : "border border-2"
                            } `}
                            style={{
                                borderRadius: "50px",
                                color: `${
                                    bannerKey === "CVA" ? "#FFFFFF" : "#2B7EC1"
                                }`,
                                backgroundColor: `${
                                    bannerKey === "CVA"
                                        ? "#2B7EC1"
                                        : "transparent"
                                }`,
                                transition: "0s",
                            }}
                        >
                            Cash and Voucher Assistance Programs
                        </Nav.Link>
                    </div>
                    <div className="setting-option header-btn mx-5">
                        <Nav.Link
                            as="button"
                            eventKey="AA"
                            className={`btn btn-large btn-primary ${
                                bannerKey === "AA"
                                    ? "border border-2"
                                    : "border border-2"
                            } `}
                            style={{
                                borderRadius: "50px",
                                color: `${
                                    bannerKey === "AA" ? "#FFFFFF" : "#2B7EC1"
                                }`,
                                backgroundColor: `${
                                    bannerKey === "AA"
                                        ? "#2B7EC1"
                                        : "transparent"
                                }`,
                                transition: "0s",
                            }}
                        >
                            Anticipatory Action Programs
                        </Nav.Link>
                    </div>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="CVA">
                        <VideoArea data={content["video-section"]} />
                        <CashAndVouvherAssistancePage />
                        <OurServices />
                    </Tab.Pane>
                    <Tab.Pane eventKey="AA">
                        <AnticipatoryActionsPage />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Row>
    );
};

export default FinancialAccessContainer;

