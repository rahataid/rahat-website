import Iconify from "@components/iconify";
import ShareModal from "@components/modals/share-modal";
import { AWS_ROOT_FOLDER_NAME, STAGE_ENV } from "@config";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { connector } from "@web3/connectors/metaMask";

const AuthorIntroArea = ({ className, space, community }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);

    const customLoader = ({ src, width, quality }) => {
        return `https://rahat-rumsan.s3.us-east-1.amazonaws.com/${AWS_ROOT_FOLDER_NAME}/${community.name}/${community?.images?.cover}`;
    };

    const coverImage = community?.images?.cover
        ? `https://rahat-rumsan.s3.us-east-1.amazonaws.com/${AWS_ROOT_FOLDER_NAME}/${community.name}/${community?.images?.cover}`
        : "/images/bg/cover.jpg";

    useEffect(() => {
        void connector.connectEagerly().catch(() => {
            console.debug("Failed to connect eagerly to metamask");
        });
    }, []);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src={coverImage}
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    loader={customLoader}
                />
                <div className="overlay" />
            </div>
            <div
                className={clsx(
                    "rn-author-area",
                    space === 1 && "mb--30 mt_dec--120",
                    className
                )}
            >
                <div className="container">
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-12">
                            <div className="author-wrapper">
                                <div className="author-inner">
                                    <div className="rn-author-info-content ">
                                        <h4 className="title ">
                                            {community?.name
                                                ? community.name
                                                : "Community Name"}
                                        </h4>
                                        <p className="address mb--15">
                                            {community?.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

AuthorIntroArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        image: ImageType,
    }),
};
AuthorIntroArea.defaultProps = {
    space: 1,
};

export default AuthorIntroArea;

