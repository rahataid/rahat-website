import { SectionTitleType, TextType } from "@utils/types";
import clsx from "clsx";
import PropTypes from "prop-types";
// import Button from "@ui/button";
import ReadMoreBtn from "@components/read-more-button";
import Image from "next/image";

const OurEcosystem = ({ space, className }) => {
    return (
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
            id="our-ecosystem"
        >
            <div className="container">
                <div className="row mb--40">
                    <div className="title-area text-center">
                        <h3 className="title mb--15">Our Ecosystem</h3>
                        <p className="subtitle">
                            Experience streamlined assistance through Rahat's
                            user-friendly platform.
                        </p>
                    </div>
                </div>

                <div className="row g-5">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center">
                                    <Image
                                        src="https://assets.rumsan.net/rahat/financial-access.png"
                                        alt="cva-ecosystem-banner"
                                        width={489}
                                        height={366}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        <a href="/financial-access?tab=CVA">
                                            Financial Access
                                        </a>
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Enable financial inclusion through our
                                        Cash and Vouchers as well as
                                        Anticipatory Actions initiatives.
                                    </p>

                                    <ReadMoreBtn linkTo="/financial-access?tab=CVA" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center">
                                    <Image
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/rahat-beema-banner.jpg"
                                        alt="rahat-beema-banner"
                                        width={489}
                                        height={366}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        <a href="/rahat-beema">
                                            Financial Resilience
                                        </a>
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Build financial resilience with our
                                        transparent, inclusive, and automated
                                        weather insurance experience.
                                    </p>
                                    <ReadMoreBtn linkTo="/rahat-beema" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center object-fit-cover">
                                    <Image
                                        src="https://assets.rumsan.net/rumsan-group/11r1.jpg"
                                        alt="anticipatory-actions-banner"
                                        className="img-fluid"
                                        width={489}
                                        height={366}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        <a href="/financial-digital-literacy">
                                            Financial & Digital Literacy
                                        </a>
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Integrating digital and financial
                                        literacy into the distribution processes
                                        of aid.
                                    </p>
                                    <ReadMoreBtn linkTo="/financial-digital-literacy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

OurEcosystem.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

OurEcosystem.defaultProps = {
    space: 1,
};

export default OurEcosystem;

