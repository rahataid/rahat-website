import { ASSET_VIEW } from "@config";
import Anchor from "@ui/anchor";
import { bufferToWalletAddress } from "@utils/string";
import moment from "moment";
import Image from "next/image";

const Summary = ({ donation }) => {
    const doneeProfileImage = donation?.donee?.profileImage
        ? `${ASSET_VIEW}/${bufferToWalletAddress(
              donation?.donee?.address?.data
          )}/${donation?.donee?.profileImage}`
        : "/images/portfolio/rahat.jpeg";

    const donorProfileImage = donation?.donor?.profileImage
        ? `${ASSET_VIEW}/${bufferToWalletAddress(
              donation?.donor?.address?.data
          )}/${donation?.donor?.profileImage}`
        : "/images/portfolio/rahat.jpeg";

    return (
        <div className="mt--50 mb--50">
            <div className="container">
                <div className="row">
                    <div className="rn-about-card d-flex justify-content-between align-items-center">
                        <div className="col-lg-4 col-md-12 col-12 text-center">
                            <Anchor
                                path={`/organizations/${donation?.donor?.id}`}
                            >
                                <Image
                                    className="summary-img mb--15"
                                    src={donorProfileImage}
                                    width={140}
                                    height={140}
                                />
                                <h6>{donation?.donor?.name}</h6>
                            </Anchor>
                        </div>
                        <div className="text col-lg-4 col-md-12 col-12">
                            <p
                                className="text-center"
                                style={{ marginBottom: "5px" }}
                            >
                                <span style={{ color: "#007bb6" }}>
                                    Transaction Hash:
                                </span>{" "}
                                {/* TODO: convert buffer to string */}
                                {bufferToWalletAddress(
                                    donation?.txHash?.data
                                )?.substring(0, 16)}
                            </p>
                            <p
                                className="text-center"
                                style={{ marginBottom: "5px" }}
                            >
                                <span style={{ color: "#007bb6" }}>Date</span>:
                                {moment(donation?.createdAt).format(
                                    "MMMM Do YYYY"
                                )}
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 text-center">
                            <Anchor
                                path={`/organizations/${donation?.donee?.id}`}
                            >
                                <Image
                                    className="summary-img mb--15"
                                    src={doneeProfileImage}
                                    width={140}
                                    height={140}
                                    hideControls={true}
                                />
                                <h6>{donation?.donee?.name}</h6>
                            </Anchor>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="rn-about-card d-flex justify-content-center align-items-center">
                        <div className="col-12">
                            <p className="text-center">
                                {donation?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
