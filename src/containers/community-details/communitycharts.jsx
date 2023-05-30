import Piechart from "@components/charts/Piechart";

const CommunityChart = ({ projectId }) => {
    const genderChart = useSelector(selectGenderDistributionReport);

    const GenderData = {
        title: "Gender Distrubition",
        colors,
        series: [
            { label: "male", value: 70 },
            { label: "female", value: 90 },
        ],
    };
    const phoneData = {
        title: "Gender Distrubition",
        colors,
        series: [
            { label: "male", value: 70 },
            { label: "female", value: 90 },
        ],
    };

    return (
        <div>
            <div className="mt-5 row text-center">
                <div className="col-6 ">
                    <Piechart chart={genderChart} title="Gender Distrubition" />
                </div>
                <div className="col-6">
                    <Piechart chart={phoneData} title={phoneData.title} />
                </div>
            </div>
        </div>
    );
};
export default CommunityChart;
