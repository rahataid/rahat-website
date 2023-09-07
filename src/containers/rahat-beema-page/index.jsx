import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const RahatBeemaPage = ({ space, className }) => (
    <>
        <div className="rn-author-bg-area position-relative ptb--150">
            <Image
                src="https://assets.rumsan.com/rumsan-group/rahat-beema-main-banner-our-ecosystem.jpg"
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
                            <h4 className="title">Rahat Beema</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={clsx("rn-about-Quote-area", space === 1, className)}>
            <div className="container pt--50">
                <div className="row align-items-center g-5">
                    <div className="col-12 ">
                        <div className="title-area">
                            <p className="">
                                Experience an inclusive, speedy, cost-effective
                                insurance system. Our transparent approach
                                utilizes automated weather data to assess payout
                                eligibility for low-income farmers and migrants,
                                mitigating shocks from extreme weather events.
                            </p>
                            <div className="title-area">
                                <h3 className="title">Key Components</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <p className="mt-5" style={{ fontWeight: "600" }}>
                                Real-time monitoring
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>
                                    Integrates smart contracts with hydrologic
                                    data, IoT devices, and other relevant
                                    sources.
                                </li>
                                <li>
                                    Real-time and accurate assessment of trigger
                                    events
                                </li>
                                <li>
                                    Enables timely and objective payout
                                    determination
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/real-time-monitoring-side-image.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/multi-signature-rahat-beema-image.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-1">
                        <div className="title-area">
                            <p className="mt-5" style={{ fontWeight: "600" }}>
                                Multi-sig trigger event
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>
                                    Multi-signature feature used for trigger
                                    event validation.
                                </li>
                                <li>
                                    Independent sources confirm trigger events.
                                </li>
                                <li>
                                    Confirmation from multiple sources ensures
                                    the integrity and accuracy of the payout
                                    process
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <p className="mt-5" style={{ fontWeight: "600" }}>
                                Automatic payout
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>
                                    Smart contracts trigger automatic payouts.{" "}
                                </li>
                                <li>
                                    Manual claims assessment is replaced by
                                    automation.
                                </li>
                                <li>
                                    Quicker and more efficient payout process.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                style={{ width: "400px" }}
                                src="https://assets.rumsan.com/rumsan-group/automatic-payment-rahat-beema-image.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

RahatBeemaPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

RahatBeemaPage.defaultProps = {
    space: 1,
};

export default RahatBeemaPage;

