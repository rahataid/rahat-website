import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import PropTypes from "prop-types";

const DonorDoneeInfo = ({ className, donation }) => (
    <div
        className={clsx("single-activity-wrapper mt--50", className)}
        style={{ border: "1px solid #cccaca", borderRadius: "15px" }}
    >
        <div className="inner">
            <div className="read-content">
                <div className="thumbnail">
                    <Image
                        src={donation?.donor.profile_image}
                        alt={donation?.donor.name}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="content text-center">
                    <h6 className="title">
                        Donation offered by {donation?.donor.name}
                    </h6>
                    <p>
                        Donation amount of {"NPR "}
                        {donation?.amount} was offered to {donation?.donee.name}
                        .
                    </p>
                    <div className="time-maintane">
                        <div className="time donation">
                            <i className="feather-clock" />
                            <span>
                                {moment
                                    .unix(donation?.timestamp)
                                    .format("DD/MM/YYYY")}
                            </span>{" "}
                        </div>
                        <div className="user-area donation text-center">
                            <i className="feather-user" />
                            <span>{donation?.donor.name}</span>
                        </div>
                    </div>
                </div>
                <div className="thumbnail">
                    <Image
                        src={donation?.donee.profile_image}
                        alt={donation?.donee.name}
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </div>
);

DonorDoneeInfo.propTypes = {
    className: PropTypes.string,

    status: PropTypes.oneOf(["follow", "sale", "like", "offer"]),
};

export default DonorDoneeInfo;
