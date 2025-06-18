import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import AwardAndPrizesRecognitions from "@containers/awards";
import OurHighlightListPage from "@components/our-highlight-list-page";
import FunderRecognitions from "@components/funder-recognitions";

const TABS = [
    { key: "highlights", label: "Highlights" },
    { key: "recognition", label: "Recognition/Funder" },
    { key: "awards", label: "Awards" },
];

const OurRecognitionPage = ({ space, className }) => {
    const [activeTab, setActiveTab] = useState("highlights");

    return (
        <>
            <div
                className={clsx("rn-about-Quote-area", space === 1, className)}
            >
                <div className="container pt--80">
                    {/* Tabs */}
                    <div>
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
                        <>
                            <FunderRecognitions />
                        </>
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

