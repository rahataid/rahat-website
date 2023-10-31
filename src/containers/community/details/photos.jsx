import { ASSET_VIEW, STAGE_ENV } from "@config";
import Image from "next/image";

const CommunityPhotos = ({ className, community, id }) => {
    if (community?.images?.gallery?.length)
        return (
            <div id={id}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12">
                            <div className="section-title mt--100 mb--30 text-left">
                                <h2 className="title">Photos</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {community?.images?.gallery?.map((photo, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <Image
                                    className="grid-img"
                                    src={`
                                    https://rahat-rumsan.s3.us-east-1.amazonaws.com/${AWS_ROOT_FOLDER_NAME}/${community?.name}/${photo}
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

