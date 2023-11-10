import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";

const WhyRahatBeema = ({ space, className }) => {
    return (
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
            id="why-rahat-beema"
        >
            <div className="container">
                <div className="row mb--40">
                    <div className="title-area text-center">
                        <h3 className="title mb--15">Why Rahat Beema ?</h3>
                    </div>
                </div>

                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail d-flex justify-content-center">
                                    <Image
                                        src="/images/icon/efficient.png"
                                        alt="efficient-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">Efficient</h4>
                                    <p className="description-feature">
                                        Rahat Beema utilizes blockchain
                                        technology to streamline processes,
                                        automating weather data assessment, and
                                        enabling quick claims processing for a
                                        smoother user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail d-flex justify-content-center">
                                    <Image
                                        src="/images/icon/cheaper.png"
                                        alt="cheaper-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">Cheaper</h4>
                                    <p className="description-feature">
                                        By reducing administrative costs through
                                        blockchain, Rahat Beema offers
                                        cost-effective coverage, making
                                        insurance accessible to low-income
                                        farmers and migrants.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail d-flex justify-content-center">
                                    <Image
                                        src="/images/icon/transparent.png"
                                        alt="transparent-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        Transparent
                                    </h4>
                                    <p className="description-feature">
                                        Our blockchain platform ensures trust
                                        through transparent, immutable insurance
                                        data. Stakeholders benefit from
                                        auditable transactions, fostering a
                                        reliable and secure ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-our-ecosystem color-shape-7">
                            <div className="inner">
                                <div className="thumbnail d-flex justify-content-center">
                                    <Image
                                        src="/images/icon/inclusive.png"
                                        alt="inclusive-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">Inclusive</h4>
                                    <p className="description-feature">
                                        Rahat Beema is dedicated to serving
                                        vulnerable communities often overlooked
                                        by traditional insurance systems,
                                        promoting financial inclusion and
                                        economic stability for all.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WhyRahatBeema.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

WhyRahatBeema.defaultProps = {
    space: 1,
};

export default WhyRahatBeema;

