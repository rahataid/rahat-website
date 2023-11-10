import clsx from "clsx";
import PropTypes from "prop-types";
import Image from "next/image";

const KeyComponents = ({ space, className }) => {
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
                        <p className="subtitle">
                            Experience an inclusive, speedy, cost-effective
                            insurance system. Our transparent approach utilizes
                            automated weather data to assess payout eligibility
                            for low-income farmers and migrants, mitigating
                            shocks from extreme weather events.
                        </p>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one-key-components color-shape-7">
                            <div className="inner">
                                <div className="thumbnail text-center">
                                    <Image
                                        src="/images/icon/parameter-selection.png"
                                        alt="efficient-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature text-center">
                                        Parameter selection
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
                                        src="/images/icon/data-monitoring.png"
                                        alt="data-monitoring.png"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature text-center">
                                        Data Monitoring
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
                                        src="/images/icon/auto-pay.png"
                                        alt="efficient-icon"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature text-center">
                                        Automatic payout
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
                </div>

                <div className="text-center g-5 mt-4">
                    <a
                        href="/beema-key-components"
                        className="btn btn-medium btn-primary"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

KeyComponents.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

KeyComponents.defaultProps = {
    space: 1,
};

export default KeyComponents;

