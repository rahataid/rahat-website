import { ImageType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";

const IntroArea = ({ className, space, data }) => {
    return (
        <>
            <div className="rn-author-bg-area-donation position-relative ptb--150">
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
                    "rn-author-area-donation",
                    space === 1 && "mb--30 mt_dec--120",
                    className
                )}
            >
                <div className="container">
                    <div className="row padding-tb-50 align-items-center d-flex">
                        <div className="col-lg-12">
                            <div className="author-wrapper-donation">
                                <div className="author-inner">
                                    <div className="user-thumbnail">
                                        <Image
                                            src="/images/portfolio/tayaba.png"
                                            // alt={data.donor?.name}
                                            width={140}
                                            height={140}
                                            layout="fixed"
                                        />
                                    </div>
                                    <div className="rn-author-info-content">
                                        <h4 className="title">
                                            "Rahat"
                                            {/* {data.donor?.name} */}
                                        </h4>

                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam deserunt in tempora facere ipsam dignissimos mollitia nulla delectus totam ut. Fugiat temporibus eum eos est fuga facere vero sit mollitia?
                                            {/* {data.description} */}
                                        </p>
                                        {/* <div className="author-button-area">
                                            <button
                                                type="button"
                                                className="btn at-follw share-button"
                                                onClick={shareModalHandler}
                                            >
                                                <i className="feather-share-2" />
                                            </button>
                                            <Anchor
                                                path="/edit-profile"
                                                className="btn at-follw follow-button edit-btn"
                                            >
                                                <i className="feather feather-edit" />
                                            </Anchor>
                                        </div> */}
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

IntroArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
    data: PropTypes.shape({
        name: PropTypes.string,
        twitter: PropTypes.string,
        image: ImageType,
    }),
};
IntroArea.defaultProps = {
    space: 1,
};

export default IntroArea;
