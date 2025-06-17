import ReadMoreBtn from "@components/read-more-button";
import React from "react";

const AwardAndPrizes = () => (
    <div className="rn-section-gapTop-custom">
        <div className="container">
            <div className="row mb--20">
                <div className="title-area">
                    <h4 className="title mb--15">Awards</h4>
                </div>
            </div>
            <div className="rn-weAre-one color-shape-7">
                <div className="row g-5 d-flex justify-content-center">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="rn-about-wrapper-card-custom text-center">
                            <img
                                src="https://assets.rumsan.net/rumsan-group/mit-solve-award-banner.png"
                                alt="mit-solve"
                                width="200px"
                            />
                            <p className="mt--10">
                                MIT Solve
                                <br /> Community Award
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="rn-about-wrapper-card-custom text-center">
                            <img
                                src="https://assets.rumsan.net/rumsan-group/cresent-enterprises-award.png"
                                alt="cresent-enterprises"
                                width="200px"
                            />
                            <p className="mt--10">
                                Crescent Enterprise Climate Innovation Prize
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 text-center">
                        <div className="rn-about-wrapper-card-custom">
                            <img
                                src="https://assets.rumsan.net/rumsan-group/partners-gsr-foundation.png"
                                alt="gsr-foundation-logo"
                                width="200px"
                            />
                            <p className="mt--10">
                                GSR <br /> Foundation Prize{" "}
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="rn-about-wrapper-card-custom text-center">
                            <img
                                src="https://assets.rumsan.net/rumsan-group/partners-circle-png.png"
                                alt="circle-logo"
                                width="200px"
                            />
                            <p className="mt--10">
                                Unlocking Impact pitch competition
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <a
                            href="https://medium.com/stellar-community/scf-30-round-recap-3da4be482add"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="rn-about-wrapper-card-custom text-center">
                                <img
                                    src="https://assets.rumsan.net/rahat/stellar-rahat-award.png"
                                    alt="stellar-logo"
                                    width="200px"
                                />
                                <p className="mt--10">
                                    Stellar Community Build Award of 150K
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <a
                            href="https://algorand.co/blog/change-the-game-hackathon-winners"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="rn-about-wrapper-card-custom text-center">
                                <img
                                    src="https://assets.rumsan.net/rahat/algorand-rahat-award-1.png"
                                    alt="circle-logo"
                                    width="200px"
                                />
                                <p className="mt--10">
                                    Winner of Consumer Track in Algorand's
                                    Change the Game Hackathon.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AwardAndPrizes;

