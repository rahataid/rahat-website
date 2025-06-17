import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@ui/button";
import clsx from "clsx";
import PropTypes from "prop-types";
import { TextType, SectionTitleType } from "@utils/types";
import RecognitionsSlider from "@containers/recognitions-slider";
import { normalizedData } from "@utils/methods";
import homepageData from "../../data/recognitions-image-slider.json";

const FunderRecognitions = ({ space, className }) => {
    const content = normalizedData(homepageData?.content || []);

    // Define recognition items as structured data
    const recognitions = [
        {
            id: 1,
            title: "UNICEF Innovation Fund",
            image: "https://assets.rumsan.net/rumsan-group/recognitions-rahat-unicef.png",
            description:
                "Rahat completed UNICEF Innovation Fund's program, receiving $100,000 equity-free investment and year-long mentorship. Proud to contribute to global efforts using blockchain and open-source solutions for vulnerable communities.",
            link: "https://www.unicef.org/innovation/venturefund/blockchain-financial-inclusion-graduation",
        },
        {
            id: 2,
            title: "GSMA",
            image: "https://assets.rumsan.net/rumsan-group/recognitions-rahat-gsma.png",
            description:
                "Rahat is one of the grantees of the GSMA Innovation Fund for Anticipatory Humanitarian Action, is collaborating with the UK Foreign, Commonwealth & Development Office and esteemed partner IFRC/Danish Red Cross to enhance its platform with a blockchain-powered Anticipatory Action (AA) module.",
            link: "https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/blog/announcing-the-gsma-innovation-fund-for-anticipatory-humanitarian-action-cohort/",
        },
        {
            id: 3,
            title: "MIT Solver 2023",
            image: "https://assets.rumsan.net/rumsan-group/recognitions-rahat-mit-solver.png",
            description:
                "Rahat was among the 31 winners of the MIT Solve 2023 Global Challenges and one of 6 solvers in the financial inclusion cohort. We stood out among 1,500 tech solutions and are now part of the 2023 Solver Class.",
            link: "https://bit.ly/3RkYZUC",
        },
        {
            id: 4,
            title: "Google Startups for Sustainable Development",
            image: "https://assets.rumsan.net/rumsan-group/recognitions-rahat-google-startup.png",
            description:
                "Rahat has been selected for the Google Startups for Sustainable Development program! As part of the program, we're working one-on-one with Google's amazing mentors and experts to help grow our business.",
            link: "https://events.withgoogle.com/startups-for-sustainable-development/",
        },
    ];

    return (
        <>
            <div
                className={clsx(
                    "rn-about-Quote-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <div className="container">
                    <div className="row row--30">
                        {recognitions.map((item) => (
                            <div
                                key={item.id}
                                className="col-lg-4 col-md-6 col-sm-12 mt--30"
                            >
                                <div className={clsx("rn-blog", className)}>
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={400}
                                                height={250}
                                                priority
                                                style={{
                                                    borderRadius: "10px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <div className="content pt--20">
                                            <h4 className="title mb--20">
                                                {item.title}
                                            </h4>
                                            <p>{item.description}</p>
                                            <div className="button-group mt--20">
                                                <Link
                                                    href={item.link}
                                                    target="_blank"
                                                >
                                                    <Button>Learn More</Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt--80">
                        <div
                            className={clsx(
                                "rn-blog",
                                "row",
                                "row-reverce-sm",
                                "align-items-center",
                                "pt--80",
                                className
                            )}
                        >
                            <div
                                className="col-lg-5 col-md-6 col-sm-12 offset-lg-1
                         custom-order-flexbox-2"
                            >
                                <RecognitionsSlider
                                    data={content["recogntion-section"]}
                                />
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                                <h2 className="mb--20">
                                    Impact Measurement Program
                                </h2>
                                <p>
                                    We've completed the Google Startups for
                                    Sustainable Development 2023 Impact
                                    Measurement Program! We can measure our
                                    impact on the SDGs, track our progress over
                                    time, identify areas for improvement, and
                                    effectively communicate our impact to
                                    stakeholders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

FunderRecognitions.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

FunderRecognitions.defaultProps = {
    space: 1,
};

export default FunderRecognitions;

