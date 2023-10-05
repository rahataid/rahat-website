import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const CommunityAccessPlatformDetails = ({ space, className }) => (
    <>
        <div className="rn-author-bg-area position-relative ptb--150">
            <Image
                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/community-feature-banner-main.jpg"
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
                            <h4 className="title">Community Access Platform</h4>
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
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <h3 className="title">Donor Connectivity</h3>
                            <p className="">
                                Easily connect your Ethereum wallet to our
                                platform, enabling donations using the secure
                                and transparent blockchain technology.
                                Experience the convenience of direct
                                transactions, revolutionizing the way you
                                contribute.
                            </p>
                            <h3 className="title">
                                Donation History and Impact
                            </h3>
                            <p className="">
                                Gain deep insights into your donation history
                                and witness how your contributions have been
                                utilized by donees. Track the impact of your
                                generosity and see the positive change your
                                donations have made in real-time.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/access-1-.png"
                                alt=""
                                style={{ width: "600px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/access-2.png"
                                alt=""
                                style={{ width: "600px" }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-1">
                        <div className="title-area">
                            <h3 className="title">Multi-Donation Management</h3>
                            <p className="">
                                Efficiently manage multiple donations from
                                different donors as a donee. Keep track of
                                donation statuses, utilization, and maintain
                                effective communication and reporting for
                                seamless collaboration.
                            </p>
                            <h3 className="title">
                                Direct Donations on the Platform
                            </h3>
                            <p className="">
                                Experience the convenience of donating directly
                                to donees through the Rahat website. Enjoy a
                                seamless donation process without the need to
                                switch to other payment methods or leave the
                                platform.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <h3 className="title">Donor Insights</h3>
                            <p className="">
                                Donor Insights: Access valuable donor
                                information and their donation history, allowing
                                you to better understand their interests and
                                preferences. Foster stronger connections, tailor
                                engagement strategies, and cultivate
                                long-lasting relationships.
                            </p>
                            <h3 className="title">Comprehensive Reporting</h3>
                            <p className="">
                                Comprehensive Reporting: Administrators can
                                generate comprehensive reports on donation
                                trends and patterns, such as frequency, size,
                                and utilization. Gain valuable insights to
                                inform platform development, marketing
                                strategies, and drive impactful decision-making.
                                long-lasting relationships.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end custom-order-flexbox-1">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/access-3.png"
                                alt=""
                                style={{ width: "600px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start">
                        <div>
                            <img
                                src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/access-4.png"
                                alt=""
                                style={{ width: "600px" }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-1">
                        <div className="title-area">
                            <h3 className="title">
                                Public ERC20 Token Donations
                            </h3>
                            <p className="">
                                Make a difference by contributing public ERC20
                                tokens with value that donees can distribute
                                directly to beneficiaries. Enable efficient
                                allocation of resources and direct impact on the
                                lives of those in need.
                            </p>
                            <h3 className="title">
                                Effective Communication Channel
                            </h3>
                            <p className="">
                                Stay connected and engage with donors through
                                our platform. Provide timely updates on donation
                                utilization progress, respond to queries or
                                feedback, and foster a transparent and
                                collaborative environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

CommunityAccessPlatformDetails.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

CommunityAccessPlatformDetails.defaultProps = {
    space: 1,
};

export default CommunityAccessPlatformDetails;

