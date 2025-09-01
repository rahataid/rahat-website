import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

import { IDType, ImageType } from "@utils/types";

const MainBannerSlider = ({
    title,
    image,
    subtitle,
    isBtnDisabled,
    linkTo,
}) => {
    // Always return the image content, but wrap with Link only if linkTo exists and not disabled
    return (
        <>
            {image?.src && (
                <>
                    {linkTo && !isBtnDisabled ? (
                        <Link
                            href={linkTo}
                            style={{
                                cursor: "pointer",
                                display: "block",
                                height: "100%",
                                width: "100%",
                            }}
                        >
                            <Image
                                src={image.src}
                                alt="Slider BG"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                priority
                                className="slider-bg"
                            />
                        </Link>
                    ) : (
                        <Image
                            src={image.src}
                            alt="Slider BG"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                            className="slider-bg"
                        />
                    )}
                </>
            )}
        </>
    );
};

MainBannerSlider.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    latestBid: PropTypes.string.isRequired,
    price: PropTypes.string,
    likeCount: PropTypes.number,
    image: ImageType,
    auction_date: PropTypes.string,
    authors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            image: ImageType,
        })
    ),
    bitCount: PropTypes.number,
    highest_bid: PropTypes.shape({
        user: PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            image: ImageType,
        }),
        amount: PropTypes.string.isRequired,
    }),
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType,
            value: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ),
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            id: IDType,
            value: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
        })
    ),
};

export default MainBannerSlider;

