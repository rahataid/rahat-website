import Activity from "@components/activity";
import { IDType, ImageType } from "@utils/types";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

const ActivityArea = ({ space, className, data }) => {
    const [activities, setActivities] = useState(data?.activities || []);
    return (
        <div
            className={clsx(
                "rn-activity-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row mb--30">
                    <h3 className="title">Community List</h3>
                </div>
                <div className="row g-6 activity-direction">
                    <div className="col-lg-12 mb_dec--15">
                        {activities?.map((item) => (
                            <Activity
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                path={item.slug}
                                desc={item.description}
                                time={item.time}
                                date={item.date}
                                author={item.author}
                                status={item.status}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

ActivityArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        activities: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string,
                slug: PropTypes.string,
                description: PropTypes.string,
                date: PropTypes.string,
                time: PropTypes.string,
                author: PropTypes.shape({
                    name: PropTypes.string,
                    slug: PropTypes.string,
                }),
                image: ImageType,
                status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
                marketFilters: PropTypes.arrayOf(PropTypes.string),
                userFilters: PropTypes.arrayOf(PropTypes.string),
            })
        ),
    }),
};

ActivityArea.defaultProps = {
    space: 1,
};

export default ActivityArea;
