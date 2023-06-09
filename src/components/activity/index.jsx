import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import PropTypes from "prop-types";

const Activity = ({ className, data }) => (
    <div
        className={clsx("single-activity-wrapper mt--50", className)}
        style={{ border: "1px solid #cccaca", borderRadius: "15px" }}
    >
        <div className="inner">
            <div className="read-content">
                <div className="thumbnail">
                    <Image
                        src={data.donor.profile_image}
                        alt={data.donor.name}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="content text-center">
                    <h6 className="title">
                        Donation offered by {data.donor.name}
                    </h6>
                    <p>
                        Donation amount of {"NPR "}
                        {data.amount} was offered to {data.donee.name}.
                    </p>
                    <div className="time-maintane">
                        <div className="time data">
                            <i className="feather-clock" />
                            <span>
                                {moment
                                    .unix(data.timestamp)
                                    .format("DD/MM/YYYY")}
                            </span>{" "}
                        </div>
                        <div className="user-area data text-center">
                            <i className="feather-user" />
                            <span>{data.donor.name}</span>
                        </div>
                    </div>
                </div>
                <div className="thumbnail">
                    <Image
                        src={data.donee.profile_image}
                        alt={data.donee.name}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </div>
);

Activity.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        donor: PropTypes.shape({
            profile_image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        donee: PropTypes.shape({
            profile_image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
        amount: PropTypes.number.isRequired,
        timestamp: PropTypes.number.isRequired,
    }).isRequired,
    status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
};

export default Activity;
