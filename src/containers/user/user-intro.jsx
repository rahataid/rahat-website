import ShareModal from "@components/modals/share-modal";
import ShareDropdown from "@components/share-dropdown";
import Anchor from "@ui/anchor";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";


const AuthorIntroArea = ({ className, space, data }) => {
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const shareModalHandler = () => setIsShareModalOpen((prev) => !prev);
    return (
        <>
            <ShareModal
                show={isShareModalOpen}
                handleModal={shareModalHandler}
            />
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src="/images/bg/bg-img.jpg"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
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
                            <div className="user-wrapper">
                                <div className="user-inner">
                                    {data?.image?.src && (
                                        <div className="thumbnail">
                                            <Image
                                                src={data.image.src}
                                                alt={
                                                    data.image?.alt || data.name
                                                }
                                                width={140}
                                                height={140}
                                                layout="fixed"
                                            />
                                        </div>
                                    )}

                                    <div className="rn-user-info-content">
                                        <h4 className="title">{data.name}</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis expedita, recusandae est dolorum consequatur voluptas, ab beatae deserunt voluptatem omnis ullam officia exercitationem dolores non sed eum dignissimos hic laboriosam.</p>
                                        <div className="author-button-area">
                                            <button
                                                type="button"
                                                className="btn at-follw share-button"
                                                onClick={shareModalHandler}
                                            >
                                                <i className="feather-share-2" />
                                            </button>

                                            <div className="count at-follw">
                                                <ShareDropdown />
                                            </div>
                                            <Anchor
                                                path="/user/1/edit-profile"
                                                className="btn at-follw follow-button edit-btn"
                                            >
                                                <i className="feather feather-edit" />
                                            </Anchor>
                                        </div>
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
        followers: PropTypes.string,
        following: PropTypes.string,
        image: ImageType,
    }),
};
AuthorIntroArea.defaultProps = {
    space: 1,
};

export default AuthorIntroArea;
