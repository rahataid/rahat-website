import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";

const WhyAnticipatoryAction = ({ space, className }) => {
    // Data in JSON format for better maintainability
    const featureData = [
        {
            id: 1,
            icon: "/images/icon/efficient.png",
            title: "Efficient",
            description:
                "Rahat AA uses blockchain to streamline early cash assistance, enabling faster decision-making, secure fund transfers, and real-time tracking for aid agencies.",
        },
        {
            id: 2,
            icon: "/images/icon/cheaper.png",
            title: "Cheaper",
            description:
                "By cutting down on middlemen and overhead with blockchain automation, Rahat AA makes anticipatory action programs more cost-effective, so more funds reach vulnerable communities.",
        },
        {
            id: 3,
            icon: "/images/icon/transparent.png",
            title: "Transparent",
            description:
                "Every transaction is recorded on a tamper-proof blockchain ledger, ensuring full transparency, auditability, and trust for donors, partners, and communities.",
        },
        {
            id: 4,
            icon: "/images/icon/inclusive.png",
            title: "Inclusive",
            description:
                "Rahat AA shifts aid from reactive to proactive, using early warning communication and multi-signature triggers to unlock funds before disaster strikes — saving more lives, earlier.",
        },
    ];

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
                        <h3 className="title mb--15">
                            Why Rahat Anticipatory Action (AA) platform ?
                        </h3>
                    </div>
                </div>

                <div className="row g-5">
                    {featureData.map((feature) => (
                        <div
                            key={feature.id}
                            className="col-lg-3 col-md-6 col-sm-6 col-12"
                        >
                            <div className="rn-service-one-our-ecosystem color-shape-7">
                                <div className="inner">
                                    <div className="thumbnail d-flex justify-content-center">
                                        <Image
                                            src={feature.icon}
                                            alt={`${feature.title.toLowerCase()}-icon`}
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title-feature">
                                            {feature.title}
                                        </h4>
                                        <p className="description-feature">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

WhyAnticipatoryAction.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

WhyAnticipatoryAction.defaultProps = {
    space: 1,
};

export default WhyAnticipatoryAction;

