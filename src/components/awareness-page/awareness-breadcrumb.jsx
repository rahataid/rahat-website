import { SectionTitleType, TextType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { FaAccessibleIcon } from "react-icons/fa6";

const AwarenessBreadcrumb = ({ space, className }) => (
    <>
        <div className="rn-author-bg-area position-relative awareness-breadcrumb"></div>
        <div className="row padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12 awareness-page-banner">
                <div className="author-wrapper">
                    <div className="author-inner">
                        <div className="rn-author-info-content-breadcrumb">
                            <h4 className="title">Anticipatory Action Bingo</h4>
                            <p>A Fun Guide to Disaster Preparedness Learning</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

AwarenessBreadcrumb.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

AwarenessBreadcrumb.defaultProps = {
    space: 1,
};

export default AwarenessBreadcrumb;

