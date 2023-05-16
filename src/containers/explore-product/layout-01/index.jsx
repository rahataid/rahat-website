import Product from "@components/product/layout-01";
import { ProductType, SectionTitleType } from "@utils/types";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "FILTER_TOGGLE":
            return { ...state, filterToggle: !state.filterToggle };
        case "SET_INPUTS":
            return { ...state, inputs: { ...state.inputs, ...action.payload } };
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

const ExploreProductArea = ({ className, space, data }) => {
    const [state, dispatch] = useReducer(reducer, {
        filterToggle: false,
        products: data.products || [],
        inputs: { price: [0, 100] },
    });

    return (
        <div
            className={clsx(
                "rn-product-area mt--50",
                className
            )}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                        <h3>Communities</h3>
                    </div>
                </div>
                <div className="row g-5">
                    {state.products.length > 0 ? (
                        <>
                            {state.products.slice(0, 10).map((prod) => (
                                <div
                                    key={prod.id}
                                    className="col-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <Product
                                        overlay
                                        title={prod.title}
                                        price={prod.price}
                                        slug={prod.slug}
                                        image={prod.images?.[0]}
                                    />
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>No item to show</p>
                    )}
                </div>
            </div>
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        products: PropTypes.arrayOf(ProductType),
        placeBid: PropTypes.bool,
    }),
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
