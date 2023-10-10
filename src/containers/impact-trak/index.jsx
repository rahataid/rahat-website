import React from "react";
import clsx from "clsx";
import ImpactTrackSummaryCard from "@components/cards/impacttrack/ImpactTrackSummaryCard";
import ImpactTrackSummaryList from "@components/cards/impacttrack";

const ImpactTrakArea = ({ data, className }) => {
    return (
        <div className={clsx("rn-product-area mt--50", className)}>
            <div className="container">
                <div>
                    <div className=" card-deck row p-2">
                        <h3 className="">Summary</h3>
                        <ImpactTrackSummaryCard
                            cardTitle="Beneficiaries"
                            total={data.meta.totalBeneficiaries}
                        />
                        <ImpactTrackSummaryCard
                            cardTitle="Amount"
                            total={data.meta.totalAmount}
                        />
                        <ImpactTrackSummaryCard
                            cardTitle="Communities"
                            total={data.meta.totalCommunities}
                        />
                    </div>
                </div>

                <div>
                    <div className="card-deck  row p-2">
                        <h3>List</h3>
                        {data?.rows?.map((content) => {
                            return (
                                <ImpactTrackSummaryList
                                    donor={content?.donor}
                                    date={content?.timestamp}
                                    description={content?.description}
                                    amount={content?.amount}
                                    currency={content?.currency}
                                    donee={content?.donee}
                                    address={content?.donor?.address}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactTrakArea;

