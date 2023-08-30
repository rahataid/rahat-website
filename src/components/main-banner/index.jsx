import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const MainBannerPage = ({ pageTitle, imageLink }) => (
    <>
        <div className="rn-author-bg-area position-relative ptb--150">
            <Image
                src={imageLink}
                alt="Slider BG"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />

            <div className="overlay"></div>
        </div>
        <div className="row padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12 custom-page-banner">
                <div className="author-wrapper">
                    <div className="author-inner">
                        <div className="rn-author-info-content-custom">
                            <h4 className="title">{pageTitle}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

MainBannerPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

MainBannerPage.defaultProps = {
    space: 1,
};

export default MainBannerPage;

