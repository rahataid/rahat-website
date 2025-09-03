import { useState } from "react";
import Slider, { SliderItem } from "@ui/slider";
import { IDType, ImageType } from "@utils/types";
import PropTypes from "prop-types";
import MainBannerSlider from "./slide";
import Link from "next/link";

const sliderOptions = {
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    beforeChange: (oldIndex, newIndex) => {
        // This will trigger before the slide changes
    },
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

const MainSliderSection = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleBeforeChange = (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
    };

    return (
        <div
            className="card-container"
            style={{
                padding: "20px", // Add padding inside the card
                background: "#fff", // Set a white background for the card
                borderRadius: "10px", // Add rounded corners
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
                margin: "20px auto", // Center the card and add vertical spacing
                maxWidth: "1200px", // Optional: Limit the card's width
            }}
        >
            <div
                className="rn-slider-area fullscreen-slide"
                style={{ position: "relative" }}
            >
                {data?.banners && (
                    <>
                        <Slider
                            options={{
                                ...sliderOptions,
                                beforeChange: handleBeforeChange,
                            }}
                            className="slider-activation-banner-3 slick-activation-06 slick-arrow-between-main-banner rn-slick-dot-style-main-banner"
                        >
                            {data?.banners.map((banner, index) => (
                                <SliderItem
                                    key={banner.id}
                                    className="d-flex align-items-center padding-controler-slide-product-2 justify-content-center slide slide-style-2 fullscreen_image-banner-home-banner position-relative"
                                >
                                    <MainBannerSlider
                                        title={banner.title}
                                        subtitle={banner.subtitle}
                                        image={banner.image}
                                        isBtnDisabled={banner.isBtnDisabled}
                                        linkTo={banner.linkTo}
                                    />
                                </SliderItem>
                            ))}
                        </Slider>
                        <div
                            className="slider-description"
                            style={{
                                marginTop: "20px",
                                textAlign: "center",
                                fontSize: "18px",
                                color: "#333",
                            }}
                        >
                            <div style={{ padding: "20px 0 100px" }}>
                                <Link href={data.banners[currentSlide]?.linkTo}>
                                    <h5
                                        style={{
                                            textAlign: "start",
                                            transition: "color 0.2s",
                                        }}
                                        className="main-slider-link-title"
                                    >
                                        {data.banners[currentSlide]?.title}
                                    </h5>
                                </Link>
                                <style jsx>{`
                                    .main-slider-link-title:hover {
                                        color: #2b7ec1;
                                    }
                                `}</style>
                                <p style={{ textAlign: "start" }}>
                                    {data.banners[currentSlide]?.description}
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

MainSliderSection.propTypes = {
    data: PropTypes.shape({
        banners: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
                title: PropTypes.string.isRequired,
                subtitle: PropTypes.string,
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
            })
        ),
    }),
};

export default MainSliderSection;

