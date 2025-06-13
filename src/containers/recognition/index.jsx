import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import RecognitionsSlider from "@containers/recognitions-slider";
import homepageData from "../../data/recognitions-image-slider.json";
import { normalizedData } from "@utils/methods";
import AwardAndPrizesRecognitions from "@containers/awards";
import { useState } from "react";
import RecognitionCard from "@components/recognitioncard/RecognitionCard";
import recognitionRaw from "../../data/funder-recognition-items.json";
import Highlights from "@containers/highlights";
import "../../assets/css/global.module.css";

const contentData = recognitionRaw.content || [];

const OurRecognitionPage = ({ space, className }) => {
    const content = normalizedData(homepageData?.content || []);
    const [activeTab, setActiveTab] = useState("highlights");

    return (
        <div className={clsx("container py-5", className)}>
            <div className="d-flex justify-content-center gap-2 mb-4">
                {["highlights", "recognition", "awards"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`btn ${
                            activeTab === tab
                                ? "btn-primary text-white"
                                : "btn-hover text-dark"
                        }`}
                        style={{ transition: "all 0.4s ease-in-out" }}
                    >
                        {tab === "highlights" && "Highlights"}
                        {tab === "recognition" && "Recognition / Funder"}
                        {tab === "awards" && "Awards"}
                    </button>
                ))}
            </div>
            <div className="container py-5">
                <div className="row g-4">
                    {activeTab === "highlights" && <Highlights />}
                </div>
            </div>
            {activeTab === "recognition" && (
                <div
                    className={clsx(
                        "rn-about-Quote-area",
                        space === 1 && "pt-2"
                    )}
                >
                    <div className="container py-2">
                        <div className="row g-4">
                            <div className="text-left py-2 ">
                                <h3>Recognition/Funder</h3>
                                <p className="text-muted">
                                    We proudly showcase our key recognitions and
                                    partnerships
                                </p>
                            </div>
                            <div className="row g-4">
                                {contentData.map((item, index) => (
                                    <RecognitionCard
                                        image={item.image}
                                        alt={item.alt}
                                        title={item.title}
                                        description={item.description}
                                        link={item.link}
                                    />
                                ))}
                            </div>
                            <div className="col-12">
                                <div className="rn-blog ">
                                    <div className="row align-items-top pt--20">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <h2 className="mb--20 pt-5">
                                                Impact Measurement Program
                                            </h2>
                                            <p>
                                                We've completed the Impact
                                                Measurement Program! We can
                                                measure our impact on the SDGs,
                                                track our progress over time,
                                                identify areas for improvement,
                                                and effectively communicate our
                                                impact to stakeholders.
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12  text-center">
                                            <RecognitionsSlider
                                                data={
                                                    content[
                                                        "recogntion-section"
                                                    ]
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Awards Section */}
            <div className="container">
                <div className="row g-4">
                    {activeTab === "awards" && <AwardAndPrizesRecognitions />}
                </div>
            </div>
        </div>
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
