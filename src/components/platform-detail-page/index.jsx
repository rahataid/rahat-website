import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import Image from "next/image";
import { TextType, SectionTitleType } from "@utils/types";

const OurPlatform = ({ space, className }) => (
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
                        <div className="rn-author-info-content">
                            <h4 className="title">Our Platform</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row align-items-center g-5 mb--40">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title mb--15">
                                Aid Agency Dashboard
                            </h3>
                            <p className="">
                                Rahat Agency dashboard is a web application for
                                aid agencies to create, manage and monitor their
                                aid distribution projects. Users can log in
                                quickly and securely to their dashboard using a
                                wallet app.
                            </p>
                        </div>

                        <div className="row g-5 pt--60">
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Project creation and budget allocation
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Beneficiary registration tool with KYC
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Token creation and burn
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Existing beneficiary data integration
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        NFT creation
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Vendor onboarding and management
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Turn-key project reporting
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Real-time monitoring of fund flow
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Financial service providers onboarding
                                        and integration
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Social mobilizers onboarding and
                                        management
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/op-dashboard-final-rmb.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 rn-section-gapTop mb--40">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/op-home-final.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title mb--15">Vendor app</h3>
                            <p className="">
                                Rahat Vendor mobile app is a digital wallet app
                                for vendors and merchants. Pre-selected vendors
                                register through this app to provide cash or
                                commodity to beneficiaries on behalf of the aid
                                agencies. Through their digital wallet, vendors
                                receive tokens from beneficiaries and redeem
                                them from participating financial service
                                providers or the aid agency.
                            </p>
                        </div>

                        <div className="row g-5 pt--60">
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Receive tokens from beneficiaries
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Redeem tokens received
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        View recent transaction
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Transfer tokens
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Check total balance
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Supports offline transaction
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 rn-section-gapTop mb--40">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title mb--15">
                                Social Mobilizer App
                            </h3>
                            <p className="">
                                Rahat social mobilizer application is for
                                in-field volunteers and local partners. Through
                                the app, they can onboard beneficiaries and
                                assign them tokens on behalf of the aid agency.
                            </p>
                        </div>

                        <div className="row g-5 pt--60">
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Register beneficiaries on-site
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        View registered beneficiary list
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Assign tokens
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div
                                    className="category-style-one-custom"
                                    style={{ cursor: "pointer" }}
                                >
                                    <span
                                        className="category-label"
                                        style={{ fontWeight: "600" }}
                                    >
                                        Check project budget balance
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/op-rsm-final.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

OurPlatform.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

OurPlatform.defaultProps = {
    space: 1,
};

export default OurPlatform;

