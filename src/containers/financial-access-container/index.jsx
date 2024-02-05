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
        <Container fluid>
            <Row className="g-5 mt-2">
                <div className="">
                    <Tab.Container defaultActiveKey="CVA">
                        <Nav
                            className="product-tab-nav"
                            activeKey={bannerKey}
                            onSelect={(k) => setBannerKey(k)}
                        >
                            <div
                                className=" nav d-flex justify-content-center"
                                style={{
                                    borderBottom: "1px solid grey",
                                    background: "none",
                                }}
                            >
                                <Nav.Link
                                    as="button"
                                    eventKey="CVA"
                                    className={`p-3 ${
                                        bannerKey === "CVA" && "custom-link"
                                    }`}
                                >
                                    Cash and Voucher Assistance Programs
                                </Nav.Link>
                                <Nav.Link
                                    as="button"
                                    eventKey="AA"
                                    className={`p-3 ${
                                        bannerKey === "AA" && "custom-link"
                                    }`}
                                >
                                    Anticipatory Action Programs
                                </Nav.Link>
                            </div>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane
                                eventKey="CVA"
                                className="lg-product_tab-pane"
                            >
                                <VideoArea data={content["video-section"]} />
                                <CashAndVouvherAssistancePage />
                                <OurServices />
                            </Tab.Pane>
                            <Tab.Pane
                                eventKey="AA"
                                className="lg-product_tab-pane"
                            >
                                <AnticipatoryActionsPage />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </Row>
        </Container>
    );
};

export default FinancialAccessContainer;

