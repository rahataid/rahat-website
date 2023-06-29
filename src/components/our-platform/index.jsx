import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@ui/button";
import { TextType, SectionTitleType } from "@utils/types";

const OurPlatform = ({ space, className }) => (
    <div
        className={clsx(
            "rn-about-Quote-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
        id="our-platform"
    >
        <div className="container">
            <div className="row align-items-center g-5 mb--40">
                <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                    <div className="title-area">
                        <h3 className="title mb--15">Our Platform</h3>
                        <p className="">
                            Rahat provides complete transparency of the flow of
                            funds, enabling faster, cheaper, and effective aid
                            distributions.
                        </p>
                    </div>

                    <div className="row pt--60">
                        <div className="col-sm-6">
                            <div
                                className="category-style-one"
                                style={{ cursor: "pointer" }}
                            >
                                <span
                                    className="category-label"
                                    style={{ fontWeight: "600" }}
                                >
                                    Aid Agency Dashboard
                                </span>
                                <span className="category-label">
                                    Create, manage and monitor aid distribution
                                    projects with real-time visibility.
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div
                                className="category-style-one"
                                style={{ cursor: "pointer" }}
                            >
                                <span
                                    className="category-label"
                                    style={{ fontWeight: "600" }}
                                >
                                    Vendor/Partner App
                                </span>
                                <span className="category-label">
                                    A wallet app for vendors to receive tokens
                                    from beneficiaries and redeem them.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center pt--30">
                        <div className="col-sm-6">
                            <div
                                className="category-style-one"
                                style={{ cursor: "pointer" }}
                            >
                                <span
                                    className="category-label"
                                    style={{ fontWeight: "600" }}
                                >
                                    Social Mobilizer App
                                </span>
                                <span className="category-label">
                                    Support in-field mobilizers to register,
                                    assign, and redeem tokens for beneficiaries.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <a href="/platform-page">
                            <Button className="mt-5" size="medium">
                                <i
                                    className="feather-list"
                                    style={{
                                        position: "relative",
                                        top: "1.5px",
                                    }}
                                ></i>
                                Learn More
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                    <div>
                        <img
                            src="https://assets.rumsan.com/esatya/homepage-edited.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
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

