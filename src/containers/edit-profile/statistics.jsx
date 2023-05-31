import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const FunFact = ({ className, counter, community }) => {
    console.log(community);
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-12">
                    <div className="section-title mt--50 mb--30 text-center">
                        <h2 className="title">Community Metrics</h2>
                        <p className="description">
                            There are many variations of passages of Lorem Ipsum
                            available, <br /> but the majority have suffered
                            alteration.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    {community.summary.map((summary, key) => (
                        <div className={clsx("single-counter-up text-center", className)}>
                            <div className="number counter-odomitter-active">
                                <CountUp start={focus ? 0 : null} end={summary.gender_male} duration={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>

                            </div>
                            <div className="botton-title">Male</div>
                        </div>
                    ))}
                </div>
                <div className="col-6">
                    {community.summary.map((summary, key) => (
                        <div className={clsx("single-counter-up text-center", className)}>
                            <div className="number counter-odomitter-active">
                                <CountUp start={focus ? 0 : null} end={summary.gender_female} duration={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>

                            </div>
                            <div className="botton-title">Female</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="row mt--10">
                <div className="col-6">
                    {community.summary.map((summary, key) => (
                        <div className={clsx("single-counter-up text-center", className)}>
                            <div className="number counter-odomitter-active">
                                <CountUp start={focus ? 0 : null} end={summary.total_beneficiaries} duration={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>

                            </div>
                            <div className="botton-title">Total Beneficiaries</div>
                        </div>
                    ))}
                </div>
                <div className="col-6">
                    {community.summary.map((summary, key) => (
                        <div className={clsx("single-counter-up text-center", className)}>
                            <div className="number counter-odomitter-active">
                                <CountUp start={focus ? 0 : null} end={summary.bank_yes} duration={1}>
                                    {({ countUpRef }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <InView
                                                as="span"
                                                onChange={(inView) =>
                                                    visibleChangeHandler(inView)
                                                }
                                            >
                                            </InView>
                                        </div>
                                    )}
                                </CountUp>

                            </div>
                            <div className="botton-title">Total Bank Accounts</div>
                        </div>
                    ))}
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
