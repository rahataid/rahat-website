import clsx from "clsx";
import Image from "next/image";

const Activity = ({ data, className }) => (
    <div
        className={clsx("single-donation-wrapper", className)}
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
                    <div className="row">
                        <p>{data.description}</p>
                        <span>{data.amount}</span>
                    </div>
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

export default Activity;
