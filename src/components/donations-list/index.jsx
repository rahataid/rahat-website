import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";

const Activity = ({ data, className }) => (
    <div
        className={clsx("single-activity-wrapper", className)}
        style={{ border: "1px solid #cccaca", borderRadius: "15px" }}
    >
        <div className="inner">
            <div className="read-content">
                <div className="thumbnail">
                    <Image
                        src={data.donorImg}
                        alt={data?.donorName || "Nft_Profile"}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="content">
                    <h6>{data.donorName ?? 'haha'}</h6>
                    <p>{data.description}</p>
                    <div className="time-maintane">
                        <div className="time data">
                            <i className="feather-clock" />
                            <span>
                                {data.date}
                            </span>
                        </div>
                        <div className="user-area data">
                            <i className="feather-user" />
                            {data?.doneeName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Activity.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.shape({
        src: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])
            .isRequired,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
};

export default Activity;
