import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
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
                <div className="row justify-content-center mb-3">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={600}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={16000}
                                    duration={2}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={600}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={600}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mb-3">
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={600}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                                <>
                                                    <span>+</span>
                                                </>
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={600}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={600}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-6">
                        <div
                            className={clsx(
                                "single-counter-up text-center",
                                className
                            )}
                        >
                            <div className="number counter-odomitter-active">
                                <CountUp
                                    start={focus ? 0 : null}
                                    end={600}
                                    duration={5}
                                >
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            ></InView>
                                        </div>
                                    )}
                                </CountUp>
                            </div>
                            <div className="botton-title">Raghav</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FunFact.propTypes = {
    className: PropTypes.string,
    counter: PropTypes.number.isRequired,
    title: PropTypes.string,
    suffix: PropTypes.string,
};

export default FunFact;

