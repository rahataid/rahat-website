import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import { HeadingType, TextType, ButtonType, ImageType } from "@utils/types";
import Link from "next/link";

const MainBannerArea = () => (
    <div className="slider-one rn-section-gapTop">
        <div className="container">
            <div className="row row-reverce-sm align-items-center">
                <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                    <h2>Supporting Vulnerable communities</h2>

                    <p>
                        through an open-source blockchain-based Financial Access
                        Platform
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
                <div className="col-lg-6 col-md-6 col-sm-12 offset-lg-1">
                    <div className="slider-thumbnail">
                        <Image
                            src="https://assets.rumsan.net/rumsan-group/rahat-test1244444.jpeg"
                            alt=""
                            width={585}
                            height={593}
                            priority
                            style={{ borderRadius: "10px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

MainBannerArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(HeadingType),
        texts: PropTypes.arrayOf(TextType),
        buttons: PropTypes.arrayOf(ButtonType),
        images: PropTypes.arrayOf(ImageType),
    }),
};

export default MainBannerArea;

