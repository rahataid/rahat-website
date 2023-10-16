import React from "react";

const ImpactDescCard = ({ data }) => {
    return (
        <div className="login-area message-area">
            <div className="container">
                <div className="row align-items-center mt-5 ">
                    <div class="col">
                        <div class="rn-address h-100 shadow-sm">
                            <div class="card-body">
                                <div class="clearfix mb-3"></div>
                                <div class="my-2 text-center">
                                    <h3>{data?.donor?.name}</h3>
                                </div>
                                <div class="mb-3">
                                    <h5 class=" text-center role text-muted">
                                        Donor
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="rn-address h-100 shadow-sm">
                            <div class="card-body">
                                <div class="clearfix mb-3"></div>

                                <div class="my-2 text-center">
                                    <h3>{data?.donee?.name}</h3>
                                </div>
                                <div class="mb-3">
                                    <h5 class="text-center role text-muted">
                                        Receiver
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactDescCard;

