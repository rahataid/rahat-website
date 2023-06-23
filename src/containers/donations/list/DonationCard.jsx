import clsx from "clsx";
import Image from "next/image";

const TransactionCard = ({
    donorImg,
    donorName,
    description,
    date,
    amount,
    status,
    className,
}) => (
    <div
        className={clsx("single-donation-wrapper", className)}
        style={{ border: "1px solid #cccaca", borderRadius: "15px" }}
    >
        <div className="inner">
            <div className="status">{status ?? "Approved"}</div>
            <div className="read-content">
                <div className="thumbnail">
                    <Image
                        src={donorImg ?? "/images/portfolio/rahat.jpeg"}
                        alt={donorName || "Nft_Profile"}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="content">
                    <h6>{donorName ?? "Rahat --> Red Cross"}</h6>
                    <p>
                        {description ||
                            "Donation for wounded soldiers of Ukraine.Donation for wounded soldiers of Ukraine."}
                    </p>
                    <div className="time-maintane">
                        <div className="time data">
                            <i className="feather-clock" />
                            <span>{date ?? "12 June 2023"}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icone-area">
                <span>${amount ?? "50,000"}</span>
            </div>
        </div>
    </div>
);

export default TransactionCard;
