import PropTypes from "prop-types";
import statsData from "../../../data/custom-community-stat-data.json";

const CustomStats = ({ communityId }) => {
    const stats = statsData[communityId];
    if (!stats) return null;
    return (
        <div className="row mt--10">
            {stats.map((stat, idx) => (
                <div className="col-12 col-md-4 mt--5" key={idx}>
                    <div className="single-counter-up">
                        <div className="botton-title d-flex align-items-center">
                            {stat.icon && (
                                <span style={{ marginRight: 8 }}>
                                    <i className={stat.icon} />
                                </span>
                            )}
                            {stat.label}
                        </div>
                        <div className="number counter-odomitter-active">
                            {stat.value}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

CustomStats.propTypes = {
    communityId: PropTypes.string.isRequired,
};

export default CustomStats;
