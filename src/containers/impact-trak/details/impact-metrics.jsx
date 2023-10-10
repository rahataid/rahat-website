import Summary from "@components/donation-summary";
import ChartData from "./chartData";

const ImpactCharts = ({ data }) => {
    return (
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-12">
                    <div className="section-title mt--50 mb--30 text-left">
                        <h2 className="title">Impact Metrics</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <ChartData summary={data?.summary} />
            </div>
        </div>
    );
};

export default ImpactCharts;

