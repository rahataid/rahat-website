import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import Link from "next/link";
import Button from "@ui/button";
import RecognitionsSlider from "@containers/recognitions-slider";
import homepageData from "../../data/recognitions-image-slider.json";
import { normalizedData } from "@utils/methods";
import AwardAndPrizesRecognitions from "@containers/awards";
import OurHighlightListPage from "@components/our-highlight-list-page";
import recognitions from "../../data/recognition-funder.json";
import { Card } from "react-bootstrap";

const TABS = [
    { key: "highlights", label: "Highlights" },
    { key: "recognition", label: "Recognition/Funder" },
    { key: "awards", label: "Awards" },
];

const OurRecognitionPage = ({ space, className }) => {
    const [activeTab, setActiveTab] = useState("highlights");
    const content = normalizedData(homepageData?.content || []);

    return (
        <>
            <div
                className={clsx("rn-about-Quote-area", space === 1, className)}
            >
                <div className="container pt--80">
                    {/* Tabs */}
                    <div style={{ marginBottom: 32 }}>
                        <ul
                            style={{
                                display: "flex",
                                gap: 4,
                                listStyle: "none",
                                padding: 0,
                                justifyContent: "center",
                            }}
                        >
                            {TABS.map((tab) => (
                                <li
                                    key={tab.key}
                                    style={{
                                        cursor: "pointer",
                                        padding: "8px 24px",
                                        background:
                                            activeTab === tab.key
                                                ? "#2C7FBE"
                                                : "transparent",
                                        color:
                                            activeTab === tab.key
                                                ? "#fff"
                                                : "#000",
                                        fontWeight:
                                            activeTab === tab.key
                                                ? "bold"
                                                : "normal",
                                        borderRadius:
                                            activeTab === tab.key
                                                ? "4px"
                                                : undefined,
                                    }}
                                    onClick={() => setActiveTab(tab.key)}
                                >
                                    {tab.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tab Content */}
                    {activeTab === "highlights" && (
                        <div>
                            {/* Replace this with your actual Highlights content */}
                            <OurHighlightListPage />
                        </div>
                    )}

                    {activeTab === "recognition" && (
                        <div className="row g-5">
                            {recognitions.map((item, index) => (
                                <div key={index} className="col-lg-6">
                                    <div className="card p-4 h-100 shadow-sm rounded-4 border-0 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="mb-3">
                                                <Image
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    width={400}
                                                    height={200}
                                                    style={{
                                                        objectFit: "contain",
                                                        borderRadius: "0.5rem",
                                                    }}
                                                    priority
                                                />
                                            </div>
                                            <h5 className="mb-3">
                                                {item.title}
                                            </h5>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="mt-3">
                                            {item.link ? (
                                                <Link
                                                    href={item.link}
                                                    target="_blank"
                                                >
                                                    <Button size="medium">
                                                        Learn More
                                                    </Button>
                                                </Link>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === "awards" && (
                        <div>
                            <AwardAndPrizesRecognitions />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

OurRecognitionPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

OurRecognitionPage.defaultProps = {
    space: 1,
};

export default OurRecognitionPage;
