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

const Annually = () => {
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
                            Annually, Natural Disasters Push 26 Million People
                            into Poverty, Affecting Vulnerable Communities
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
                            Rahat Beema supports underserved communities, such
                            as low-income households, small-scale farmers,
                            migrant laborers, and disaster-prone populations. By
                            offering affordable, blockchain-based parametric
                            microinsurance, it simplifies claims and provides
                            direct payouts, enhancing financial resilience for
                            those facing disaster-related financial challenges.
                        </p>
                        <div className="row">
                            <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                                <Image
                                    src="/images/icon/farmer.png"
                                    alt="farmer-icon"
                                    width={122}
                                    height={150}
                                />
                                <div className="d-flex">
                                    <CountUp
                                        start={focus ? 0 : null}
                                        end={1800}
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
                                        }}
                                    >
                                        +
                                    </span>
                                </div>
                                <p
                                    className="text-center text-white"
                                    style={{ fontSize: "16px" }}
                                >
                                    Access to smallholder <br />
                                    farmers
                                </p>
                            </div>
                            <div className="col-12 col-lg-3 d-flex flex-column align-items-center">
                                <Image
                                    src="/images/icon/mobilizer.png"
                                    alt="mobilizer-icon"
                                    width={122}
                                    height={150}
                                />
                                <div className="d-flex">
                                    <CountUp
                                        start={focus ? 0 : null}
                                        end={100}
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
                                        }}
                                    >
                                        +
                                    </span>
                                </div>
                                <p
                                    className="text-white"
                                    style={{ fontSize: "16px" }}
                                >
                                    Mobilizers
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 slider-wrapper d-none d-lg-block">
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
                </div>
            </div>
        </main>
    );
};

export default Annually;

