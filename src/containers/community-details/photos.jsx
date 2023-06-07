import { ASSET_VIEW } from "@config";
import Image from "next/image";

const CommunityPhotos = ({ className, community, id }) => {
    console.log("community?.images?.gallery", community?.images?.gallery);
    if (community?.images?.gallery?.length)
        return (
            <div id={id}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title mt--100 mb--30 text-left">
                                <h2 className="title">Photos</h2>
                                <p className="description">
                                    There are many variations of passages of
                                    Lorem Ipsum available, <br /> but the
                                    majority have suffered alteration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {community?.images?.gallery?.map((photo, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <Image
                                    className="grid-img"
                                    src={`
                                            ${ASSET_VIEW}/${community?.address}/${photo}
                                        `}
                                    alt={`${community?.name}-photo-${index}`}
                                    width={533}
                                    height={533}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );

    return null;
};

CommunityPhotos.defaultProps = {
    space: 1,
};

export default CommunityPhotos;
