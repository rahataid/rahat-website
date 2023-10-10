import React from "react";
import ImpactCharts from "./impact-metrics";
import ImpactDescription from "./impactDescription";
import ImpactDescCard from "./impactDescCard";

const ImpactDetailsPage = ({ data }) => {
    return (
        <div className="rn-authore-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <h3>ImpactTrak</h3>
                        <ImpactDescCard data={data} />
                        <ImpactDescription data={data} />
                        <ImpactCharts data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactDetailsPage;

