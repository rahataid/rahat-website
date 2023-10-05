import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";

const Benefits = ({ space, className }) => (
    <div
        className={clsx(
            "rn-about-Quote-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb--40">
                <div className="title-area text-center">
                    <h3 className="title mb--15">Benefits</h3>
                    <p className="subtitle">
                        Rahat provides complete transparency of the flow of
                        funds, enabling faster, cheaper, and effective aid
                        distributions.
                    </p>
                </div>
            </div>

            <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one-custom">
                        <div className="inner">
                            <div className="mb-4">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/transparency.png"
                                    alt=""
                                    style={{ width: "60px" }}
                                />
                            </div>

                            <h4 className="title">Transparent</h4>
                            <p>
                                <ul>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>Tokenized flow of funds</p>
                                    </li>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>Real-time monitoring</p>
                                    </li>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>Decentralized distribution</p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one-custom">
                        <div className="inner">
                            <div className="mb-4">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/clock-fast.png"
                                    alt=""
                                    style={{ width: "60px" }}
                                />
                            </div>

                            <h4 className="title">Faster</h4>
                            <p>
                                <ul>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>
                                            One platform to mint, manage and
                                            monitor
                                        </p>
                                    </li>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>Simple user interface</p>
                                    </li>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>Low onboarding hurdle</p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="rn-service-one-custom">
                        <div className="inner">
                            <div className="mb-4">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/losses.png"
                                    alt=""
                                    style={{ width: "60px" }}
                                />
                            </div>

                            <h4 className="title">Cheaper</h4>
                            <p>
                                <ul>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>Pay as you go</p>
                                    </li>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>No double spending</p>
                                    </li>
                                    <li
                                        style={{
                                            listStyle: "disc",
                                            color: "black",
                                            fontSize: "16px",
                                        }}
                                    >
                                        <p>Cut admin & audit costs</p>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Benefits.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

Benefits.defaultProps = {
    space: 1,
};

export default Benefits;

