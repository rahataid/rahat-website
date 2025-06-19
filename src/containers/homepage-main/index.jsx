import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import Link from "next/link";
import HeroArea from "@containers/hero";
import { normalizedData } from "@utils/methods";
import MainBannerHeroSection from "../../data/main-banner.json";
import MainSliderSection from "@containers/main-slider";

const MainBannerArea = () => {
    const content = normalizedData(MainBannerHeroSection?.content || []);
    return (
        <div className="slider-one rn-section-gapTop">
            <div className="container">
                <div className="row row-reverce-sm align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt_sm--50">
                        <h2 style={{ fontSize: "5.6rem" }}>
                            <span>
                                Supporting <br />
                            </span>

                            <span
                                style={{ color: "#2B7EC1", fontSize: "5.6rem" }}
                            >
                                {" "}
                                Vulnerable communities
                            </span>
                        </h2>

                        <p>
                            through an open-source blockchain-based Financial
                            Access Platform
                        </p>

                        <div className="button-group">
                            <Link
                                href="https://youtu.be/EDrsv7x97uc/"
                                target="_blank"
                            >
                                <Button>Watch video</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                        <main id="main-content">
                            <MainSliderSection
                                data={content["main-banner-hero-section"]}
                            />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

MainBannerArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(HeadingType),
        texts: PropTypes.arrayOf(TextType),
        buttons: PropTypes.arrayOf(ButtonType),
        images: PropTypes.arrayOf(ImageType),
    }),
};

export default MainBannerArea;

