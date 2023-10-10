import React from "react";
const ImpactDescription = ({ data }) => {
    return (
        <div className="login-area message-area">
            <div className="container">
                <div className="section-title mt--50 mb--30 text-left">
                    <h2 className="title">Impact Fund</h2>
                </div>
                <div className="row align-items-center mt-5">
                    <div className=" row rn-address text-center">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <h4 className="text-muted">
                                    Amount: {data?.amount}
                                </h4>
                                <h4 h4 className="text-muted">
                                    Currency: {data?.currency}
                                </h4>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-3">
                                <h4 h4 className="text-muted">
                                    Fund Raised: ${data?.fundRaisedUsd}
                                </h4>
                                <h4 h4 className="text-muted">
                                    Fund Raised: NPR {data?.fundRaisedLocal}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactDescription;

