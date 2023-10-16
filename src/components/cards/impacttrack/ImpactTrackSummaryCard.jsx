import React from "react";

const ImpactTrackSummaryCard = ({ cardTitle, total }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="rn-address">
                <div>
                    <h5 className="card-title">{total}</h5>
                    <p className="card-text">{cardTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ImpactTrackSummaryCard;

