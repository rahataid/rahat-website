import React from "react";
import awardsData from "../../data/awards-and-prize.json";

const AwardAndPrizes = () => (
    <div className="pt-4 pb-4">
        <div className="container ">
            <div className="row mb-3">
                <div className="col-12 ">
                    <div className="title-area text-left">
                        <h3 className="title ">Awards</h3>
                        <p className="text-muted mb--10">
                            Showcase media features, milestones, or visual
                            highlights here.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 d-flex justify-content-left">
                    {awardsData.map((award, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="rn-about-wrapper-card-custom text-center h-100 d-flex flex-column justify-content-between">
                                        <img
                                            src={award.image}
                                            alt={award.alt}
                                            style={{
                                                maxHeight: "120%",
                                                maxWidth: "100%",
                                                objectFit: "contain",
                                                display: "block",
                                            }}
                                        />
                                        <p
                                            className="mt--10"
                                            style={{
                                                fontWeight: "500",
                                            }}
                                        >
                                            {award.title}
                                        </p>
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
