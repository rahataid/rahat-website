import Image from "next/image";
import PropTypes from "prop-types";

import { IDType, ImageType } from "@utils/types";

const SingleSlide = ({ title, image, subtitle }) => {
    return (
        <>
            {image?.src && (
                <Image
                    src={image.src}
                    alt="Slider BG"
                    layout="fill"
                    // objectFit="cover"
                    quality={100}
                    priority
                    className="slider-bg"
                />
            )}

            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <h2
                                style={{ color: "#fff" }}
                                className="title theme-gradient"
                            >
                                {title}
                            </h2>
                            <h5
                                style={{ color: "#fff" }}
                                className="banner-disc-one"
                            >
                                {subtitle}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

SingleSlide.propTypes = {
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

export default SingleSlide;

