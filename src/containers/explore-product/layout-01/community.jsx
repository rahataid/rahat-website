import Product from "@components/product/layout-01/community";
import SearchForm from "@components/search-form/layout-01";
import clsx from "clsx";
import PropTypes from "prop-types";

const ExploreProductArea = ({ className, space, communities, data }) => {
    console.log("communities", communities);
    return (
        <div className={clsx("rn-product-area mt--50", className)}>
            <div className="container">
                <div className="row">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <h3>Communities</h3>
                        </div>
                        <SearchForm />
                    </div>
                </div>
                <div className="row g-5">
                    {communities?.length > 0 ? (
                        <>
                            {communities.map((community) => (
                                <div
                                    key={community.id}
                                    className="col-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <Product
                                        overlay
                                        name={community.name}
                                        country={community.country}
                                        totalDonationsUsd={
                                            community.totalDonations_usd
                                        }
                                        category={community?.category?.name}
                                        location={community.location}
                                        logo={community?.images?.logo}
                                        description={community.description}
                                        id={community.id}
                                        address={community?.address}
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
    communities: PropTypes.array,
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;
