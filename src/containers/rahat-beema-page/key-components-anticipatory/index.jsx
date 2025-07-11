import clsx from "clsx";
import PropTypes from "prop-types";
import Image from "next/image";

const AnticipatoryKeyComponents = ({ space, className }) => {
    return (
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
            id="rahat-beema-key-components"
        >
            <div className="container">
                <div className="row mb--40">
                    <div className="title-area text-center">
                        <h3 className="title mb--15">Our Key Components</h3>
                        <p
                            className="subtitle"
                            style={{ maxWidth: "1200px", margin: "0 auto" }}
                        >
                            Rahat integrates smart contracts with hydrological
                            data for automated alerts via voice and SMS.
                            Streamlined cash aid distribution empowers community
                            bodies and aid agencies with the ability to trigger
                            accountable and timely cash transfers, saving time
                            and speeding process management before a crisis.
                        </p>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-key-components color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center">
                                    <Image
                                        src="/images/icon/multi-signature.png"
                                        alt="efficient-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature text-center">
                                        Multi-sig trigger event
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-key-components color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center">
                                    <Image
                                        src="https://assets.rumsan.net/rahat/aa-key-comp-phone.png"
                                        alt="efficient-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature text-center">
                                        Text and Voice based Early Warnings
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-key-components color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center">
                                    <Image
                                        src="https://assets.rumsan.net/rahat/aa-key-comp-smart-phone.png"
                                        alt="data-monitoring.png"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature text-center">
                                        Anticipatory Cash Transfer
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-key-components color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center">
                                    <Image
                                        src="https://assets.rumsan.net/rahat/aa-key-comp-radar.png"
                                        alt="efficient-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature text-center">
                                        Activity Tracking
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center g-5 mt-4">
                    <a
                        href="/anticipatory-key-components"
                        className="btn btn-medium btn-primary"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

AnticipatoryKeyComponents.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

AnticipatoryKeyComponents.defaultProps = {
    space: 1,
};

export default AnticipatoryKeyComponents;

