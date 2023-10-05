import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const AnticipatoryActionsPage = ({ space, className }) => (
    <>
        <div className="rn-author-bg-area position-relative ptb--150">
            <Image
                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/anticipatory-actions-main-banner.jpg"
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
                            <h4 className="title">Rahat Anticipatory Action</h4>
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
                                Rahat integrates smart contracts with
                                hydrological data for automated alerts via voice
                                and SMS. Streamlined cash aid distribution
                                empowers community bodies and aid agencies with
                                the ability to trigger accountable and timely
                                cash transfers, saving time and speeding process
                                management before a crisis.
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
                                    Triggers and confirmations linked to smart
                                    contracts.
                                </li>
                                <li>
                                    Multiple parties (hydrology data, authorized
                                    stakeholders) confirm triggers.
                                </li>
                                <li>
                                    Smart contract execution upon confirmation.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/multi-signature-rahat-beema-image.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/alert-anticipatory-actions.png"
                                alt=""
                                style={{ width: "400px" }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-1">
                        <div className="title-area">
                            <p className="mt-5" style={{ fontWeight: "600" }}>
                                Early Warnings
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>Voice recordings and SMS alerts.</li>
                                <li>Timely warnings for beneficiaries.</li>
                                <li>Enhances preparedness.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <p className="mt-5" style={{ fontWeight: "600" }}>
                                Anticipatory Cash Transfer
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>
                                    Token transfers to pre-assigned
                                    beneficiaries.
                                </li>
                                <li>Process optimization and time-saving.</li>
                                <li>Efficient management.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                style={{ width: "400px" }}
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/cash-transfer-anticipatory-actions.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

AnticipatoryActionsPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

AnticipatoryActionsPage.defaultProps = {
    space: 1,
};

export default AnticipatoryActionsPage;

