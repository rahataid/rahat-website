import Anchor from "@ui/anchor";
import { SectionTitleType, TextType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";

const ProjectShowcasePage = ({ space, className, showBanner = true }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        color: isHover ? "#00a3ff" : "black",
    };

    const [isHover2, setIsHover2] = useState(false);

    const handleMouseEnter2 = () => {
        setIsHover2(true);
    };
    const handleMouseLeave2 = () => {
        setIsHover2(false);
    };

    const boxStyle2 = {
        color: isHover2 ? "#00a3ff" : "black",
    };
    return (
        <>
            {showBanner && (
                <>
                    <div className="rn-author-bg-area position-relative ptb--150">
                        <Image
                            src="/images/banner/contact-main-banner.jpg"
                            alt="Slider BG"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                        />

                        <div className="overlay"></div>
                    </div>
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-12 custom-page-banner">
                            <div className="author-wrapper">
                                <div className="author-inner">
                                    <div className="rn-author-info-content-custom">
                                        <h4 className="title">
                                            Project Showcase
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div
                className={clsx(
                    "rn-about-Quote-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <div className="container">
                    {!showBanner && (
                        <div className="row mb--50 align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <h3>Impact Stories</h3>
                            </div>
                        </div>
                    )}
                    <div className="row g-5">
                        <div
                            className="col-lg-4 col-md-6 col-12 sal-animate"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            data-sal-delay="150"
                        >
                            <div className={clsx("rn-blog", className)}>
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Image
                                            src="https://assets.rumsan.com/rumsan-group/cash-transfers-media-mentions.jpg"
                                            alt={"Personal Portfolio Images"}
                                            width={489}
                                            height={366}
                                        />
                                    </div>

                                    <div className="content">
                                        <div className="category-info">
                                            <div className="meta">
                                                <span>
                                                    <i className="feather-calendar" />
                                                    29th May , 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h4 className="title">
                                            <Anchor path="https://assets.rumsan.com/rumsan-group/rahat-jaleswor-showcase-project.pdf">
                                                UNICEF Nepal Cash Transfer Pilot
                                                2023
                                            </Anchor>
                                        </h4>
                                        <div className="content">
                                            <div className="category-info">
                                                <div className="meta">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <Anchor
                                                            path="https://assets.rumsan.com/rumsan-group/rahat-jaleswor-showcase-project.pdf"
                                                            style={boxStyle}
                                                            onMouseEnter={
                                                                handleMouseEnter
                                                            }
                                                            onMouseLeave={
                                                                handleMouseLeave
                                                            }
                                                        >
                                                            Read More
                                                            <i
                                                                className="feather-chevrons-right"
                                                                style={{
                                                                    fontSize:
                                                                        "16px",
                                                                    padding:
                                                                        "5px",
                                                                    position:
                                                                        "relative",
                                                                    top: "2.5px",
                                                                }}
                                                            />
                                                        </Anchor>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-12 sal-animate"
                            data-sal="slide-up"
                            data-sal-duration="800"
                            data-sal-delay="150"
                        >
                            <div className={clsx("rn-blog", className)}>
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Image
                                            src="https://assets.rumsan.com/rumsan-group/tayaba-project-showcase-banner.jpg"
                                            alt={"Personal Portfolio Images"}
                                            width={489}
                                            height={366}
                                        />
                                    </div>

                                    <div className="content">
                                        <div className="category-info">
                                            <div className="meta">
                                                <span>
                                                    <i className="feather-calendar" />
                                                    10th April , 2023
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="title">
                                            <Anchor path="https://assets.rumsan.com/rumsan-group/tayaba-project-showcase-banner.jpg">
                                                Rahat X Tayaba Unites Together
                                            </Anchor>
                                        </h3>
                                        <div className="content">
                                            <div className="category-info">
                                                <div className="meta">
                                                    <span className="d-flex justify-content-center align-items-center">
                                                        <Anchor
                                                            path="https://assets.rumsan.com/rumsan-group/rahat-jaleswor-showcase-project.pdf"
                                                            style={boxStyle2}
                                                            onMouseEnter={
                                                                handleMouseEnter2
                                                            }
                                                            onMouseLeave={
                                                                handleMouseLeave2
                                                            }
                                                        >
                                                            Read More
                                                            <i
                                                                className="feather-chevrons-right"
                                                                style={{
                                                                    fontSize:
                                                                        "16px",
                                                                    padding:
                                                                        "5px",
                                                                    position:
                                                                        "relative",
                                                                    top: "2.5px",
                                                                }}
                                                            />
                                                        </Anchor>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ProjectShowcasePage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

ProjectShowcasePage.defaultProps = {
    space: 1,
};

export default ProjectShowcasePage;

