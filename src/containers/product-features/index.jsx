import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
// import Button from "@ui/button";
import ReadMoreBtn from "@components/read-more-button";

const ProductFeatures = ({ space, className }) => {
    return (
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
            id="our-features"
        >
            <div className="container">
                <div className="row mb--40">
                    <div className="title-area text-center">
                        <h3 className="title mb--15">Rahat CVA Features</h3>
                        <p className="subtitle">
                            Empower aid distribution with our streamlined tool,
                            personalized vouchers, inclusive communication,
                            transparent donations, and impactful insights for
                            effective assistance.
                        </p>
                    </div>
                </div>

                <div className="row g-5">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one color-shape-7">
                            <div className="inner">
                                <div className="icon">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/cash-in-kind-logo.png"
                                        alt=""
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        Cash/ In Kind Distribution Management
                                        Tool
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Efficiently manage cash and in-kind
                                        distributions with our streamlined
                                        distribution management tool.
                                    </p>

                                    <ReadMoreBtn linkTo="/cash-in-kind-distribution" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one color-shape-7">
                            <div className="inner">
                                <div className="icon">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/qr-card-logo.png"
                                        alt=""
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        Digital/Printed QR Card Vouchers
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Empowering Efficient and Inclusive Aid
                                        Distribution with QR Card Voucher
                                        Solutions.
                                    </p>
                                    <ReadMoreBtn linkTo="/digital-printed-qr-card-vouchers" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one color-shape-7">
                            <div className="inner">
                                <div className="icon">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/beneficiary-communication-logo.png"
                                        alt=""
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        Beneficiary Communication (IVR/SMS)
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Empower communities through IVR/SMS.
                                        Personalized updates, and multilingual
                                        outreach bridge gaps for inclusive,
                                        efficient beneficiary communication and
                                        support.
                                    </p>
                                    <ReadMoreBtn linkTo="/beneficiary-communication-ivr-sms" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="rn-service-one color-shape-7">
                            <div className="inner">
                                <div className="icon">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/community-access-platform-logo.png"
                                        alt=""
                                    />
                                </div>
                                <div className="content">
                                    <h4 className="title-feature">
                                        Community Access Platform
                                    </h4>
                                    <p className="description-feature short-title-features">
                                        Revolutionize the way donors and donees
                                        connect, ensuring seamless and
                                        transparent transactions through the
                                        power of blockchain technology.{" "}
                                    </p>
                                    <ReadMoreBtn linkTo="/community-access-platform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductFeatures.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

ProductFeatures.defaultProps = {
    space: 1,
};

export default ProductFeatures;

