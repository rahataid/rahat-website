import Piechart from "@components/charts/Piechart";
import React from "react";

const ChartData = ({ summary }) => {
    console.log(summary);

    // const GenderData =
    //     Object?.entries(summary?.gender).map(([label, value]) => ({
    //         label,
    //         value: parseInt(value),
    //     })) || [];

    const BankData = Object.keys(summary?.bankStatus || {}).map((subAspect) => {
        const value = summary.bankStatus[subAspect];
        return {
            label: subAspect.replace(/_/g, " "), // Replace underscores with spaces
            value: Number(value),
        };
    });
    const GenderData = Object.keys(summary?.gender || {}).map((subAspect) => {
        const value = summary.gender[subAspect];
        return {
            label: subAspect.replace(/_/g, " "), // Replace underscores with spaces
            value: Number(value),
        };
    });
    // const BankData =
    //     Object?.entries(summary?.bankStatus).map(([label, value]) => ({
    //         label,
    //         value: parseInt(value),
    //     })) || [];

    const summaryData = Object.keys(summary?.internetAccess || {}).map(
        (subAspect) => {
            const value = summary.internetAccess[subAspect];
            return {
                label: subAspect.replace(/_/g, " "), // Replace underscores with spaces
                value: Number(value),
            };
        }
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

