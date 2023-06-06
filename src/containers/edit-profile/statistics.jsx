import { MapView } from "@containers/maps";
import clsx from "clsx";
import Image from "next/image";
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
            <div className="row">
                <div className="col-12 col-lg-12">
                    <div className="section-title mt--50 mb--30 text-left">
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
                                            <div>
                                                <Image
                                                    style={{
                                                        marginRight: "6px",
                                                    }}
                                                    src={"/images/map.png"}
                                                    width={34}
                                                    height={34}
                                                />
                                            </div>
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
                                            <div>
                                                <Image
                                                    style={{
                                                        marginRight: "6px",
                                                    }}
                                                    src={"/images/map.png"}
                                                    width={34}
                                                    height={34}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            {community?.summary?.map((summary, key) => (
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
                                            <div>
                                                <Image
                                                    style={{
                                                        marginRight: "6px",
                                                    }}
                                                    src={"/images/map.png"}
                                                    width={34}
                                                    height={34}
                                                />
                                            </div>
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
                                            <div>
                                                <Image
                                                    style={{
                                                        marginRight: "6px",
                                                    }}
                                                    src={"/images/map.png"}
                                                    width={34}
                                                    height={34}
                                                />
                                            </div>
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
                                            <div>
                                                <Image
                                                    style={{
                                                        marginRight: "6px",
                                                    }}
                                                    src={"/images/map.png"}
                                                    width={34}
                                                    height={34}
                                                />
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
                                            <div>
                                                <Image
                                                    style={{
                                                        marginRight: "6px",
                                                    }}
                                                    src={"/images/map.png"}
                                                    width={34}
                                                    height={34}
                                                />
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
