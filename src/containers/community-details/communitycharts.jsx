import Piechart from "@components/charts/Piechart";
import { object } from "prop-types";

const CommunityChart = ({ projectId, community }) => {
    console.log(community);
    const GenderData = community?.summary?.map((type) => {
        return Object.entries(type)
            ?.map(([key, values]) => {
                let splitedData = key.split(`_`);
                if (splitedData[0] == "gender") {
                    return {
                        label: splitedData[1],
                        value: Number(values),
                    };
                }
            })
            .filter((data) => data);
    })[0];
    const BankData = community?.summary?.map((type) => {
        return Object.entries(type)
            ?.map(([key, values]) => {
                let splitedData = key.split(`_`);
                if (splitedData[0] == "bank") {
                    return {
                        label:
                            splitedData[1] == "yes" ? "hasBank" : "hasNotBank",
                        value: Number(values),
                    };
                }
            })
            .filter((data) => data);
    })[0];
    const InternetData = community?.summary?.map((type) => {
        return Object.entries(type)
            ?.map(([key, values]) => {
                let splitedData = key.split(`_`);
                if (splitedData[0] == "internet") {
                    return {
                        label:
                            splitedData[1] == "yes"
                                ? "hasInternet"
                                : "hasNotInternet",
                        value: Number(values),
                    };
                }
            })
            .filter((data) => data);
    })[0];

    return (
        <div>
            <div className="mt-5 row text-center">
                <div className="col-4">
                    <Piechart chart={GenderData} title="Gender Distrubition" />
                </div>
                <div className="col-4">
                    <Piechart chart={BankData} title={"Bank Distribution"} />
                </div>
                <div className="col-4">
                    <Piechart
                        chart={InternetData}
                        title={"Internet Distribution"}
                    />
                </div>
            </div>
        </div>
    );
};
export default CommunityChart;
