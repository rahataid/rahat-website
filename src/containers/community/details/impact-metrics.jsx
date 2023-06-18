import CommunityChart from "./community-charts";

const CommunityCharts = ({ id, community }) => (
    <div id={id} className="container">
        <div className="row g-5">
            <div className="col-lg-12">
                <div className="section-title mt--100 mb--30 text-left">
                    <h2 className="title">Impact Metrics</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <CommunityChart community={community} />
        </div>
    </div>
);

export default CommunityCharts;
