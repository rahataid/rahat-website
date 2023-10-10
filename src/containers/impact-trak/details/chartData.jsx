import Piechart from "@components/charts/Piechart";
import Summary from "@components/donation-summary";
import React from "react";

const ChartData = ({ summary }) => {
    const GenderData = Object.entries(summary?.gender).map(
        ([label, value]) => ({
            label,
            value: parseInt(value),
        })
    );

    const BankData = Object.entries(summary?.bankStatus).map(
        ([label, value]) => ({
            label,
            value: parseInt(value),
        })
    );

    const summaryData = Object.entries(summary?.internetAccess).map(
        ([label, value]) => ({
            label,
            value: parseInt(value),
        })
    );

    return (
        <div>
            <div className="mt-5 row text-center">
                {GenderData?.[0] && (
                    <div className="col-12 col-md-6 col-lg-4">
                        <Piechart chart={GenderData} title="Gender" />
                    </div>
                )}

                {BankData?.[0] && (
                    <div className="col-12 col-md-6 col-lg-4">
                        <Piechart chart={BankData} title={"Access To Bank"} />
                    </div>
                )}
                {summaryData?.[0] && (
                    <div className="col-12 col-md-6 col-lg-4">
                        <Piechart
                            chart={summaryData}
                            title={"Internet Distribution"}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChartData;

