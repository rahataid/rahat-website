import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const CvaPage = ({ space, className }) => (
    <>
        <div className="rn-author-bg-area position-relative ptb--150">
            <Image
                src="https://assets.rumsan.com/rumsan-group/cva-main-banner-feature.jpg"
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
                                Cash In Kind Distribution Management Tool
                            </h4>
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
                <div className="row g-5"></div>
            </div>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <h3 className="title">Aid Agency Dashboard</h3>
                            <p className="">
                                Create, manage and monitor aid distribution
                                projects with real-time visibility
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>Project Creation</li>
                                <li>Budget Allocation</li>
                                <li>Beneficiary Registration tool with KYC</li>
                                <li>Token Creation, Distribution and burn</li>
                                <li>Existing Data Integration</li>
                                <li>Real-time Monitoring</li>
                                <li>Onboarding and Management</li>
                                <ul style={{ listStyle: "circle" }}>
                                    <li>Vendors</li>
                                    <li>Financial Service Providers</li>
                                    <li>Social Mobilizers</li>
                                </ul>
                                <li>Turn-Key Project Reporting</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/agency-dashboard-banner.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 rn-section-gapTop">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/vendor-app-main-banner.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-1">
                        <div className="title-area">
                            <h3 className="title">Vendor app</h3>
                            <p className="">
                                Vendors receive tokens from beneficiaries and
                                redeem them
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>Receive tokens from beneficiaries</li>
                                <li>View recent real time transactions</li>
                                <li>Beneficiary Registration tool with KYC</li>
                                <li>Check total balance</li>
                                <li>Redeem token received</li>
                                <li>Transfer tokens</li>
                                <li>Supports offline transactions </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 rn-section-gapTop ">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <h3 className="title">Social Mobilizer App</h3>
                            <p className="">
                                Support in-field mobilizers to register, assign,
                                and redeem tokens for beneficiaries
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>Register beneficiaries on-site</li>
                                <li>View registered beneficiary list</li>
                                <li>Assign tokens</li>
                                <li>Check project budget balance</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/social-mobilizer-app-banner.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 rn-section-gapTop">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/beneficiary-management-banner.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-1">
                        <div className="title-area">
                            <h3 className="title">Beneficiaries Management</h3>
                            <p className="">
                                Manage and Track beneficiary information
                            </p>
                        </div>

                        <div className="row g-5 pt--10 container">
                            <ol
                                style={{
                                    listStyleType: "disc",
                                }}
                            >
                                <li>Beneficiary registration</li>
                                <li>Verification</li>
                                <li>Ensure accurate & up-to-date record</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

CvaPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

CvaPage.defaultProps = {
    space: 1,
};

export default CvaPage;

