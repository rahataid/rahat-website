import Piechart from "@components/charts/Piechart";
import { object } from "prop-types";

import { useSelector } from "react-redux";

const CommunityChart = ({ projectId, community }) => {
    const GenderData = Object.entries(community.summary)?.map(
        ([key, values]) => {
            let splitedData = key.split(`_`);
            if (splitedData[0] == "bank") {
                return {
                    label: splitedData[1] == "yes" ? "hasBank" : "hasNotBank",
                    value: values,
                };
            }
        }
    );

    const phoneData = {
        title: "Gend Distrubition",
        // colors,
        series: [
            { label: "male", value: 70 },
            { label: "female", value: 90 },
        ],
    };

    return (
        <div>
            <div className="mt-5 row text-center">
                <div className="col-6 ">
                    <Piechart chart={GenderData} title="Gender Distrubition" />
                </div>
                <div className="col-6">
                    <Piechart
                        chart={phoneData.series}
                        title={phoneData.title}
                    />
                </div>
            </div>
        </div>
    );
};
export default CommunityChart;
