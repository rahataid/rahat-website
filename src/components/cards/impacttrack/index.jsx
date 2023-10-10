import Anchor from "@ui/anchor";
import React from "react";

const ImpactTrackSummaryList = ({
    donor,
    date,
    description,
    amount,
    currency,
    donee,
    path = "/impact-trak",
    address,
}) => {
    const changedDate = new Date(date);
    const formattedDate = changedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 w-100">
            <Anchor path={`${path}/${address}`}>
                <div className="rn-address mt--20">
                    <div className="">
                        <div className="row">
                            <div className="col"> {formattedDate}</div>
                            <div className="col text-right">
                                <h6 className="strong">
                                    <small className="text-muted">
                                        Amount : {amount}
                                    </small>
                                </h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col">
                                <h6 className="strong">
                                    <small className="text-muted">
                                        Donor : {donor.name}
                                    </small>
                                </h6>
                            </div>
                            <div className="col text-right">
                                <h6 className="strong">
                                    <small className="text-muted">
                                        Receiver : {donee.name}
                                    </small>
                                </h6>
                            </div>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </Anchor>
        </div>
    );
};

export default ImpactTrackSummaryList;

