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
            image: "https://assets.rumsan.net/rahat/unicef-rahat-funder.png",
            description:
                "Rahat completed UNICEF Innovation Fund's program, receiving $100,000 equity-free investment and year-long mentorship. Proud to contribute to global efforts using blockchain and open-source solutions for vulnerable communities.",
            link: "https://www.unicef.org/innovation/venturefund/blockchain-financial-inclusion-graduation",
        },
        {
            id: 2,
            title: "GSMA",
            image: "https://assets.rumsan.net/rahat/rahat-funder-gsma.png",
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
            image: "https://assets.rumsan.net/rahat/rahat-funder-google-startup.png",
            description:
                "Rahat has been selected for the Google Startups for Sustainable Development program! As part of the program, we're working one-on-one with Google's amazing mentors and experts to help grow our business.",
            link: "https://events.withgoogle.com/startups-for-sustainable-development/",
        },
        {
            id: 5,
            title: "UNICEF Venture Fund's growth cohort",
            image: "https://assets.rumsan.net/rahat/unicef-rahat-funder.png",
            description: "Rahat joins UNICEF Venture Fund’s growth cohort.",
            link: "https://www.unicef.org/innovation/stories/investing-blockchain-web3-and-ai-social-impact",
        },
        {
            id: 6,
            title: "DPG",
            image: "https://assets.rumsan.net/rahat/rahat-funder-dpg.png",
            description:
                "Rahat was re-certified as a Digital Public Good by the Digital Public Goods Alliance ",
            link: "https://www.linkedin.com/posts/rumsan_rahat-activity-7242034174314876929-5co0/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACN_2nIBzhNGw10nWWGY-OmtKQC8ZpMSiGo.",
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
                                                width={150}
                                                height={150}
                                                priority
                                            />
                                        </div>
                                        <div className="content pt--20">
                                            <h4
                                                className="title mb--20"
                                                style={{
                                                    fontSize: "3rem",
                                                    fontWeight: "500",
                                                }}
                                            >
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
                                "pt--70",
                                className
                            )}
                        >
                            <div
                                className="col-lg-6 col-md-6 col-sm-12 
                         custom-order-flexbox-2"
                            >
                                <Image
                                    src="https://assets.rumsan.net/rahat/rahat-funder-multi-year-gsr.jpeg"
                                    alt="gsr"
                                    width={600}
                                    height={450}
                                    priority
                                />
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                                <h2
                                    className="mb--20"
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    Multi-year Unrestricted Funding from the GSR
                                    Foundation.
                                </h2>
                                <p>
                                    Our partnership with the GSR Foundation has
                                    reached a new milestone: they have awarded
                                    us a multi-year, unrestricted grant to
                                    supercharge Rahat Beema, our
                                    blockchain-powered micro-insurance platform.
                                    This flexible funding means we can adapt
                                    quickly, whether that’s accelerating
                                    technology development, ramping up community
                                    outreach, or responding immediately when
                                    extreme weather strikes.
                                </p>
                                <div className="button-group mt--20">
                                    <Link
                                        href="https://www.linkedin.com/posts/gsr-foundation_rahat-gsrfoundation-mitsolve-ugcPost-7224686067658989570-w-BM?utm_source=share&utm_medium=member_desktop&rcm=ACoAACN_2nIBzhNGw10nWWGY-OmtKQC8ZpMSiGo"
                                        target="_blank"
                                    >
                                        <Button>Learn More</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                                <h2
                                    className="mb--20"
                                    style={{
                                        fontSize: "3rem",
                                        fontWeight: "500",
                                    }}
                                >
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

