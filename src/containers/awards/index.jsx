import React from "react";
import awardsData from "../../data/awards-and-prize.json";

const AwardAndPrizes = () => (
    <div className="pt-4 pb-4">
        <div className="container ">
            <div className="row mb--10">
                <div className="title-area text-left">
                    <h3 className="title ">
                        Awards
                        <p className="text-muted">
                            Showcase media features, milestones, or visual
                            highlights here.
                        </p>
                    </h3>
                </div>
            </div>

            <div className="rn-weAre-one color-shape-7">
                <div className="row g-5 d-flex justify-content-left">
                    {awardsData.map((award, index) => {
                        return (
                            <React.Fragment key={index}>
                                {index === 4 && <div className="w-100"></div>}
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="rn-about-wrapper-card-custom text-center h-100 d-flex flex-column justify-content-between">
                                        <img
                                            src={award.image}
                                            alt={award.alt}
                                            style={{
                                                width: "250px",
                                                height: "250px",
                                                objectFit: "contain",
                                                margin: "0 auto",
                                            }}
                                        />
                                        <p className="mt--10">{award.title}</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
);

export default AwardAndPrizes;
