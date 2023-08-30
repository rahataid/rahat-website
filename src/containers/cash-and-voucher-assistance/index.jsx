import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import ProductFeatures from "@containers/product-features";

const CashAndVouvherAssistancePage = ({ space, className }) => (
    <>
        <ProductFeatures />
    </>
);

CashAndVouvherAssistancePage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

CashAndVouvherAssistancePage.defaultProps = {
    space: 1,
};

export default CashAndVouvherAssistancePage;

