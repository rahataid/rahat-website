import Slider, { SliderItem } from "@ui/slider";
import { IDType, ImageType } from "@utils/types";
import PropTypes from "prop-types";
import SingleSlide from "./slide";

const sliderOptions = {
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
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
const HeroArea = ({ data }) => (
    <div className="rn-slider-area fullscreen-slide">
        {data?.banners && (
            <Slider
                options={sliderOptions}
                className="slider-activation-banner-3 game-banner-slick-wrapper  slick-activation-06 slick-arrow-between rn-slick-dot-style"
            >
                {data?.banners.map((banner) => (
                    <SliderItem
                        key={banner.id}
                        className="d-flex align-items-center padding-controler-slide-product-2 justify-content-center slide slide-style-2 fullscreen_image-banner position-relative"
                    >
                        <SingleSlide
                            title={banner.title}
                            subtitle={banner.subtitle}
                            image={banner.image}
                            isBtnDisabled={banner.isBtnDisabled}
                            linkTo={banner.linkTo}
                        />
                    </SliderItem>
                ))}
            </Slider>
        )}
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        banners: PropTypes.arrayOf(
            PropTypes.shape({
                id: IDType,
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
            })
        ),
    }),
};

export default HeroArea;

