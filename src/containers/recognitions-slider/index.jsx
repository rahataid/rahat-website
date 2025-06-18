import PropTypes from "prop-types";
import OurRecognitionsImageSlider from "@containers/recognitions-slider/slide";
import Slider, { SliderItem } from "@ui/slider";
import { FeatureProductsType } from "@utils/types";

const SliderOptions = {
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
};

const HeroArea = ({ data }) => (
    <div className="banner-three slider-style-3">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-11">
                    <div className="wrapper">
                        {data?.largeProducts && (
                            <Slider
                                options={SliderOptions}
                                className="slider slider-activation-banner-3"
                            >
                                {data.largeProducts.map((prod) => (
                                    <SliderItem
                                        key={prod.id}
                                        className="single-slide"
                                    >
                                        <OurRecognitionsImageSlider
                                            image={prod.image}
                                        />
                                    </SliderItem>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HeroArea.propTypes = {
    data: PropTypes.shape({
        largeProducts: PropTypes.arrayOf(FeatureProductsType),
        smallProducts: PropTypes.arrayOf(FeatureProductsType),
    }),
};

export default HeroArea;

