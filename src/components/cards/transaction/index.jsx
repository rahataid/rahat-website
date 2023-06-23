import Iconify from "@components/iconify";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const TransactionCard = ({ data, className }) => {
    return (
        // <Link to={`donations/${data?.id}`}>
        <div
            className={clsx("single-donation-wrapper", className)}
            style={{ border: "1px solid #cccaca", borderRadius: "15px" }}
        >
            <Link href={`/donations/${data?.id}`}>
                <div className="inner">
                    <div className="status">{data.status ?? "-"}</div>
                    <div className="read-content">
                        <div className="thumbnail">
                            <Image
                                src={
                                    data.donorImg
                                        ? data.donor.profileImage
                                        : "/images/portfolio/rahat.jpeg"
                                }
                                alt={data?.donor?.name || "Nft_Profile"}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="content">
                            <h6>
                                {data?.donor?.name}{" "}
                                <Iconify icon="teenyicons:arrow-right-solid" />{" "}
                                {data?.donee?.name}
                            </h6>
                            <p>
                                {data?.description ||
                                    "Donation for wounded soldiers of Ukraine.Donation for wounded soldiers of Ukraine."}
                            </p>
                            <div className="time-maintane">
                                <div className="time data">
                                    <i className="feather-clock" />
                                    <span>{data.date ?? "12 June 2023"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="icone-area">
                        <span>${data.amount ?? "-"}</span>
                    </div>
                </div>
            </Link>
        </div>
        // </Link>
    );
};

export default TransactionCard;
