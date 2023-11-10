import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";
import RahatVideoButton from "@ui/rahat-beema-video-button";

const RahatBeemaVideo = ({
    className,
    space,
    data: { title, subtitle, subtitle2, images, video },
}) => (
    <div
        className={clsx(
            "vedio-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5 d-flex align-items-center">
                <div className="col-12 col-lg-6 col-sm-12 position-relative">
                    {video?.videoId && (
                        <RahatVideoButton videoId={video.videoId} />
                    )}
                    {images?.[0]?.src && (
                        <div className="vedio-wrapper">
                            <Image
                                src={images[0].src}
                                alt={images[0]?.alt || "Video BG"}
                                width={1368}
                                height={610}
                            />
                            <p>Source: MIT Solve</p>
                        </div>
                    )}
                </div>
                <div className="col-12 col-lg-6 col-sm-12">
                    <div className="rn-about-title-wrapper">
                        <h1>{title}</h1>
                        <p className="mt-3">{subtitle}</p>
                        <p className="mt-3">{subtitle2}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

RahatBeemaVideo.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
        }),
        images: PropTypes.arrayOf(ImageType),
        video: PropTypes.shape({
            videoId: PropTypes.string,
        }),
    }),
};

RahatBeemaVideo.defaultProps = {
    space: 1,
};

export default RahatBeemaVideo;

