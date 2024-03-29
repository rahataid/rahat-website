import { MapView } from "@containers/maps";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const CounterComp = ({ total, inview }) => {
    const [focus, setFocus] = useState(false);

    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <CountUp
            start={focus ? 0 : null}
            end={total}
            duration={1}
            separator=","
        >
            {({ countUpRef }) => {
                return (
                    <div>
                        <span ref={countUpRef} />
                        <InView
                            as="span"
                            onChange={(inView) => visibleChangeHandler(inView)}
                        >
                            {inview}
                        </InView>
                    </div>
                );
            }}
        </CountUp>
    );
};

const FunFact = ({ community }) => {
    const summary = community?.summary?.[0] || {};

    return (
        <div className="container">
            <div className="row mt--15">
                <div className="col-12 col-md-6">
                    <div className="connect-thumbnail">
                        <div className="left-image">
                            <MapView
                                mapData={[
                                    {
                                        latitude: community?.latitude,
                                        longitude: community?.longitude,
                                    },
                                ]}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 ml--4">
                    <div className="row mb--10">
                        <div className="col-12 col-md-6 mt--5">
                            <div className={clsx("single-counter-up")}>
                                <div className="botton-title">Total Raised</div>
                                <div className="row">
                                    <span>{community?.localCurrency}</span>
                                    <div className="number counter-odomitter-active">
                                        <CounterComp
                                            total={community?.fundRaisedLocal}
                                        />
                                    </div>
                                </div>
                                <div className="row d-flex">
                                    <div className="d-flex align-items-center justify-content-end">
                                        <div>
                                            <p
                                                style={{
                                                    fontSize: "18px",
                                                    color: "#007bb6",
                                                }}
                                            >
                                                $
                                            </p>
                                        </div>
                                        <div style={{ fontSize: "18px" }}>
                                            <CounterComp
                                                total={community?.fundRaisedUsd}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt--5">
                            <div className={clsx("single-counter-up")}>
                                <div className="botton-title">
                                    Beneficiaries
                                </div>
                                <div className="row">
                                    <div className="number counter-odomitter-active">
                                        <CounterComp
                                            total={
                                                community?.summary?.[0]
                                                    ?.total_beneficiaries
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* ))} */}
                        </div>
                    </div>
                    <div className="row mb--10">
                        <div className="col-12 col-md-12 mt--5">
                            <div className={clsx("single-counter-up mt--5")}>
                                <div className="botton-title mb--50">
                                    Community Manager
                                </div>
                                <div className="row">
                                    <div>
                                        <h6>{community?.managers}</h6>
                                    </div>
                                </div>
                            </div>
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
