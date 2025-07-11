import { useState } from "react";
import Image from "next/image";
import Slider from "@ui/slider";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const sliderOptions = {
    speed: 500,
    autoplay: true,
    infinite: true,
};

const AnticipatoryActionAnnually = () => {
    const [focus, setFocus] = useState(false);
    const visibleChangeHandler = (isVisible) => {
        if (isVisible) {
            if (!focus) {
                setFocus(true);
            }
        }
    };
    return (
        <main id="main-content" className="mt--100 main-content">
            <div className="content-wrapper">
                <div className="row pb--40 pl--50 pt--80 padding">
                    <div className="col-lg-8">
                        <h2 className="text-white">
                            Most humanitarian systems struggle to act in time.
                            The lead time between a forecast and an actual
                            disaster is often too short to coordinate aid,
                            approvals, and outreach.
                        </h2>
                        <div className="col-lg-3 mobile-slider-wrapper d-block d-lg-none">
                            <Slider options={sliderOptions} className="slider">
                                <img
                                    className="slides"
                                    src="/images/bg/beema-mini-slider-banner-1.png"
                                />
                                <img
                                    className="slides"
                                    src="/images/bg/beema-mini-slider-banner-2.JPG"
                                />
                            </Slider>
                        </div>
                        <br />
                        <p className="text-white">
                            As a result, vulnerable communities, especially
                            those in remote or low-income areas, face delays
                            that cost lives and livelihoods. Rahat’s
                            Anticipatory Action platform solves this by
                            automating early warning alerts and cash aid
                            distribution through smart contracts. Once disaster
                            thresholds are met, aid is delivered instantly,
                            transparently, and efficiently reaching communities
                            before the crisis hits.
                        </p>
                        <div className="row">
                            <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                                <Image
                                    src="https://assets.rumsan.net/rahat/aa-annual-03.png"
                                    alt="farmer-icon"
                                    width={122}
                                    height={150}
                                />
                                <div className="d-flex">
                                    <CountUp
                                        start={focus ? 0 : null}
                                        end={105}
                                        duration={5}
                                    >
                                        {({ countUpRef }) => (
                                            <div>
                                                <span
                                                    className="odometer-custom text-white"
                                                    ref={countUpRef}
                                                    style={{
                                                        fontSize: "20px",
                                                        fontWeight: "600",
                                                    }}
                                                />
                                                <InView
                                                    as="span"
                                                    onChange={(inView) =>
                                                        visibleChangeHandler(
                                                            inView
                                                        )
                                                    }
                                                ></InView>
                                            </div>
                                        )}
                                    </CountUp>
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "600",
                                            marginLeft: "2px",
                                        }}
                                    >
                                        k
                                    </span>
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        +
                                    </span>
                                </div>
                                <p
                                    className="text-center text-white"
                                    style={{ fontSize: "16px" }}
                                >
                                    of lives impacted
                                </p>
                            </div>
                            <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                                <Image
                                    src="https://assets.rumsan.net/rahat/aa-annual-01.png"
                                    alt="mobilizer-icon"
                                    width={122}
                                    height={150}
                                />
                                <div className="d-flex">
                                    <CountUp
                                        start={focus ? 0 : null}
                                        end={4608}
                                        duration={5}
                                    >
                                        {({ countUpRef }) => (
                                            <div>
                                                <span
                                                    className="odometer-custom text-white"
                                                    ref={countUpRef}
                                                    style={{
                                                        fontSize: "20px",
                                                        fontWeight: "600",
                                                    }}
                                                />
                                                <InView
                                                    as="span"
                                                    onChange={(inView) =>
                                                        visibleChangeHandler(
                                                            inView
                                                        )
                                                    }
                                                ></InView>
                                            </div>
                                        )}
                                    </CountUp>
                                    {/* <span
                                        className="text-white"
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        +
                                    </span> */}
                                </div>
                                <p
                                    className="text-white"
                                    style={{
                                        fontSize: "16px",
                                        textAlign: "center",
                                    }}
                                >
                                    of individuals who received early warning
                                    communications
                                </p>
                            </div>
                            <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                                <Image
                                    src="https://assets.rumsan.net/rahat/aa-annual-04.png"
                                    alt="farmer-icon"
                                    width={122}
                                    height={150}
                                />
                                <div className="d-flex">
                                    <CountUp
                                        start={focus ? 0 : null}
                                        end={6483}
                                        duration={5}
                                    >
                                        {({ countUpRef }) => (
                                            <div>
                                                <span
                                                    className="odometer-custom text-white"
                                                    ref={countUpRef}
                                                    style={{
                                                        fontSize: "20px",
                                                        fontWeight: "600",
                                                    }}
                                                />
                                                <InView
                                                    as="span"
                                                    onChange={(inView) =>
                                                        visibleChangeHandler(
                                                            inView
                                                        )
                                                    }
                                                ></InView>
                                            </div>
                                        )}
                                    </CountUp>
                                    {/* <span
                                        className="text-white"
                                        style={{
                                            fontSize: "20px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        +
                                    </span> */}
                                </div>
                                <p
                                    className="text-center text-white"
                                    style={{
                                        fontSize: "16px",
                                        textAlign: "center",
                                    }}
                                >
                                    of beneficiaries at risk of climate shocks
                                    and are supported via Rahat platform
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 slider-wrapper d-none d-lg-block">
                        <Slider options={sliderOptions} className="slider">
                            <img
                                className="slides"
                                src="https://assets.rumsan.net/rahat/aa-slider-01.png"
                            />
                            <img
                                className="slides"
                                src="https://assets.rumsan.net/rahat/aa-slider-02.png"
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AnticipatoryActionAnnually;

