import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const FunFact = ({ className }) => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <div className="rn-section-gapTop">
            <div className="container">
                <div className="row g-5 justify-content-center mb-3">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/launch.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={32}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            />
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">
                                Projects Launched
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/registered.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={109}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "40px",
                                                        }}
                                                    >
                                                        K
                                                    </span>
                                                </>
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">
                                Beneficiaries Impacted
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/social-engagement.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={170}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Vendors Engaged</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/rahat-metrics-woman.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={53}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "40px",
                                                        }}
                                                    >
                                                        K
                                                    </span>
                                                </>
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Women Impacted</div>
                        </div>
                    </div>
                </div>

                <div className="row g-5 justify-content-center mt-3 mb-3">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/children-mertics-rahat.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={3900}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">
                                Children Impacted
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/local-partners-impact.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={32}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            />
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Local Partners</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/nepal-pakistan-rahat-impact.png"
                                    alt=""
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={8}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                {" "}
                                                <></>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Countries</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up-custom text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <img
                                    src="https://assets.rumsan.net/rahat/digital-literacy.png"
                                    alt="digital-literacy"
                                    style={{
                                        width: "60px",
                                    }}
                                />
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={4100}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div style={{ marginTop: "-30px" }}>
                                            {/* <>
                                                <span
                                                    style={{
                                                        fontSize: "30px",
                                                    }}
                                                >
                                                    $
                                                </span>
                                            </> */}
                                            <span
                                                className="odometer-custom"
                                                ref={countUpRef}
                                                style={{ fontSize: "4.5rem" }}
                                            />

                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                {/* <>
                                                    <span
                                                        style={{
                                                            fontSize: "40px",
                                                        }}
                                                    >
                                                        K
                                                    </span>
                                                </> */}
                                                <>
                                                    <span
                                                        style={{
                                                            fontSize: "50px",
                                                        }}
                                                    >
                                                        +
                                                    </span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>

                            <div className="botton-title">Digital Literacy</div>
                        </div>
                    </div>
                </div>

                <div className="contact-cta-box-short spacing-custom">
                    <h3>Let's Chat !</h3>

                    <a
                        href="/contact-form"
                        className="btn btn-medium btn-primary"
                    >
                        Try Our Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

FunFact.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    suffix: PropTypes.string,
};

export default FunFact;

