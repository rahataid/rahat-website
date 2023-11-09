import Image from "next/image";
import React from "react";

const AchievementsBadges = () => (
    <div className="rn-section-gapTop">
        <div className="container">
            <div className="row mb--40">
                <div className="title-area text-center">
                    <h3 className="title mb--15">
                        Achievements (Badges/ Logos)
                    </h3>
                </div>
            </div>
            <div className="rn-weAre-one color-shape-7">
                <div className="row g-5 d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="rn-about-wrapper">
                            <Image
                                src="/images/achievements/2023-solver-team-seal.png"
                                alt="data-monitoring.png"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="rn-about-wrapper">
                            <div className="thumbnail d-flex justify-content-center align-items-center">
                                <img
                                    src="https://assets.rumsan.net/rumsan-group/qwertyui.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <div className="rn-about-wrapper">
                            <div className="thumbnail d-flex justify-content-center">
                                <img
                                    src="https://assets.rumsan.net/rumsan-group/poiuytrewq.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AchievementsBadges;

