import Piechart from "@components/charts/Piechart";

const CommunityChart = ({ projectId, community }) => {
    const GenderData = community?.summary?.map((type) => {
        return Object.entries(type)
            ?.map(([key, values]) => {
                let splitedData = key.split(`_`);
                if (splitedData[0] == "gender") {
                    if (values > 0) {
                        return {
                            label: splitedData[1],
                            value: Number(values),
                        };
                    }
                }
            })
            .filter((data) => data);
    })[0];
    const BankData = community?.summary?.map((type) => {
        return Object.entries(type)
            ?.map(([key, values]) => {
                let splitedData = key.split(`_`);
                if (splitedData[0] == "bank") {
                    if (values > 0) {
                        return {
                            label:
                                splitedData[1] == "yes"
                                    ? "hasBank"
                                    : "hasNotBank",
                            value: Number(values),
                        };
                    }
                }
            })
            .filter((data) => data);
    })[0];
    const summaryData = community?.summary?.map((type) => {
        return Object.entries(type)
            ?.map(([key, values]) => {
                let splitedData = key.split(`_`);
                if (splitedData[0] == "internet") {
                    if (values > 0) {
                        return {
                            label:
                                splitedData[1] == "yes"
                                    ? "hasInternet"
                                    : "hasNotInternet",
                            value: Number(values),
                        };
                    }
                }
            })
            .filter((data) => data);
    })[0];

    return (
        <div>
            <div className="mt-5 row text-center">
                {GenderData?.[0] && (
                    <div className="col-12 col-md-6 col-lg-4">
                        <Piechart
                            chart={GenderData}
                            title="Gender"
                        />
                    </div>
                )}

                {BankData?.[0] && (
                    <div className="col-12 col-md-6 col-lg-4">
                        <Piechart
                            chart={BankData}
                            title={"Access To Bank"}
                        />
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
export default CommunityChart;
