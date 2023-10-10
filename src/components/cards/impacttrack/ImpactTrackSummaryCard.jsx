import React from "react";

const ImpactTrackSummaryCard = ({ cardTitle, total }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="rn-address">
                <div>
                    <h4 className="card-title display-5">{cardTitle}</h4>
                    <p className="card-text">{total}</p>
                </div>
            </div>
        </div>
    );
};

export default ImpactTrackSummaryCard;

