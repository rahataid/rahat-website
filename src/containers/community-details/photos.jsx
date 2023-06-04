import { ASSET_VIEW } from "@config";
import Image from "next/image";

const CommunityPhotos = ({ className, community, id }) => {
    return (
        <div id={id}>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <div className="section-title mt--100 mb--30 text-left">
                            <h2 className="title">Photos</h2>
                            <p className="description">
                                There are many variations of passages of Lorem
                                Ipsum available, <br /> but the majority have
                                suffered alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {community?.photos.length &&
                        community?.photos?.map((photo) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <Image
                                    src={`
                                            ${ASSET_VIEW}/${community?.walletAddress}/${photo}
                                        `}
                                />
                            </div>
                        ))}
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--20">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--20">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--20">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

CommunityPhotos.defaultProps = {
    space: 1,
};

export default Projects;
