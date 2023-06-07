import { MapView } from "@containers/maps";
import { fCurrency } from "@utils/formatNumber";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const FunFact = ({ community }) => {
    console.log("community", community);
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
            <div className="row mt--50">
                <div className="col-12 col-md-6">
                    <div className="connect-thumbnail">
                        <div className="left-image">
                            <MapView />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 ml--4">
                    <div className="row">
                        <div className="col-6">
                            {community?.summary?.map((summary, key) => (
                                <div
                                    className={clsx("single-counter-up  mt--5")}
                                >
                                    <div className="botton-title">
                                        Beneficiaries
                                    </div>
                                    <div className="row">
                                        <div className="number counter-odomitter-active">
                                            <CountUp
                                                start={focus ? 0 : null}
                                                end={
                                                    summary.total_beneficiaries
                                                }
                                                duration={1}
                                            >
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span
                                                            ref={countUpRef}
                                                        />
                                                        <InView
                                                            as="span"
                                                            onChange={(
                                                                inView
                                                            ) =>
                                                                visibleChangeHandler(
                                                                    inView
                                                                )
                                                            }
                                                        ></InView>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-6">
                            {community?.summary?.map((summary, key) => (
                                <div
                                    className={clsx("single-counter-up  mt--5")}
                                >
                                    <div className="botton-title">
                                        Amount Raised
                                    </div>
                                    <div className="row">
                                        <div className="number counter-odomitter-active">
                                            <CountUp
                                                start={focus ? 0 : null}
                                                end={
                                                    fCurrency(community.totalDonations_usd)
                                                }
                                                duration={1}
                                            >
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span
                                                            ref={countUpRef}
                                                        />
                                                        <InView
                                                            as="span"
                                                            onChange={(
                                                                inView
                                                            ) =>
                                                                visibleChangeHandler(
                                                                    inView
                                                                )
                                                            }
                                                        ></InView>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {community?.summary?.map((summary, key) => (
                                <div
                                    className={clsx("single-counter-up  mt--5")}
                                >
                                    <div className="botton-title">
                                        Total Beneficiaries
                                    </div>
                                    <div className="row">
                                        <div className="number counter-odomitter-active">
                                            <CountUp
                                                start={focus ? 0 : null}
                                                end={
                                                    summary.total_beneficiaries
                                                }
                                                duration={1}
                                            >
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span
                                                            ref={countUpRef}
                                                        />
                                                        <InView
                                                            as="span"
                                                            onChange={(
                                                                inView
                                                            ) =>
                                                                visibleChangeHandler(
                                                                    inView
                                                                )
                                                            }
                                                        ></InView>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-6">
                            {community.summary.map((summary, key) => (
                                <div
                                    className={clsx("single-counter-up  mt--5")}
                                >
                                    <div className="botton-title">
                                        Total Beneficiaries
                                    </div>
                                    <div className="row">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="number counter-odomitter-active">
                                                <CountUp
                                                    start={focus ? 0 : null}
                                                    end={
                                                        summary.total_beneficiaries
                                                    }
                                                    duration={1}
                                                >
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span
                                                                ref={countUpRef}
                                                            />
                                                            <InView
                                                                as="span"
                                                                onChange={(
                                                                    inView
                                                                ) =>
                                                                    visibleChangeHandler(
                                                                        inView
                                                                    )
                                                                }
                                                            ></InView>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-6">
                            {community.summary.map((summary, key) => (
                                <div
                                    className={clsx("single-counter-up  mt--5")}
                                >
                                    <div className="botton-title">
                                        Total Beneficiaries
                                    </div>
                                    <div className="row">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="number counter-odomitter-active">
                                                <CountUp
                                                    start={focus ? 0 : null}
                                                    end={
                                                        summary.total_beneficiaries
                                                    }
                                                    duration={1}
                                                >
                                                    {({ countUpRef }) => (
                                                        <div>
                                                            <span
                                                                ref={countUpRef}
                                                            />
                                                            <InView
                                                                as="span"
                                                                onChange={(
                                                                    inView
                                                                ) =>
                                                                    visibleChangeHandler(
                                                                        inView
                                                                    )
                                                                }
                                                            ></InView>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
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
