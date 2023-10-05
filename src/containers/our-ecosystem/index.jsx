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
                                <div className="thumbnail">
                                    <Image
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/cva-ecosystem-banner.jpg"
                                        alt="cva-ecosystem-banner"
                                        width={489}
                                        height={366}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        <a href="/cash-and-voucher-assistance-platform">
                                            Rahat Cash and Voucher Assistance
                                        </a>
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Revolutionize humanitarian assistance
                                        with Cash and Voucher Solutions. Embrace
                                        a more effective method of distributing
                                        aid by empowering local communities,
                                        promoting inclusivity, and generating a
                                        positive impact.
                                    </p>

                                    <ReadMoreBtn linkTo="/cash-and-voucher-assistance-platform" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Image
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/rahat-beema-banner.jpg"
                                        alt="rahat-beema-banner"
                                        width={489}
                                        height={366}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        <a href="/rahat-beema">Rahat Beema</a>
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Experience an inclusive, speedy,
                                        cost-effective insurance system. Our
                                        transparent approach utilizes automated
                                        weather data to assess payout
                                        eligibility for low-income farmers and
                                        migrants, mitigating shocks from extreme
                                        weather events.
                                    </p>
                                    <ReadMoreBtn linkTo="/rahat-beema" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Image
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/anticipatory-actions-banner.jpg"
                                        alt="anticipatory-actions-banner"
                                        width={489}
                                        height={366}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        <a href="/rahat-anticipatory-actions">
                                            Rahat Anticipatory Action
                                        </a>
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Rahat integrates smart contracts with
                                        hydrological data for automated alerts
                                        via voice and SMS. Streamlined cash aid
                                        distribution empowers community bodies
                                        and aid agencies with the ability to
                                        trigger accountable and timely cash
                                        transfers, saving time and speeding
                                        process management before a crisis.
                                    </p>
                                    <ReadMoreBtn linkTo="/rahat-anticipatory-actions" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box-short spacing">
                    <h3>Let's Chat !</h3>

                    <a
                        href="/contact-form"
                        className="btn btn-medium btn-primary"
                    >
                        Try Our Demo
                    </a>
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
