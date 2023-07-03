import CommunityCard from "@components/cards/community";
import SearchForm from "@components/search-form";
import clsx from "clsx";
import PropTypes from "prop-types";

const ExploreProductArea = ({
    className,
    space,
    communities,
    data,
    categories,
    countries,
}) => {
    const sanitizedCategories = categories.map((cat) => ({
        value: cat.id,
        text: cat.name,
    }));

    return (
        <div className={clsx("rn-product-area mt--50", className)}>
            <div className="container">
                <div className="d-none d-lg-block">
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb--25">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <h3>Rahat Communities</h3>
                            </div>
                            <SearchForm
                                categories={sanitizedCategories}
                                countries={countries}
                            />
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb--25">
                            <p>
                                Rahat community is a user-friendly web-based
                                platform that enables communities to register
                                and share their impacts, metrics, and statistics
                                for raining fund to their organization. The
                                platform is designed with varying levels of
                                access for managers and moderators to update the
                                community details.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="d-block d-lg-none">
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-between mb--25">
                            <div className="col-12">
                                <h3 className="mb--25">Rahat Communities</h3>
                                <p>
                                    Rahat community is a user-friendly web-based
                                    platform that enables communities to
                                    register and share their impacts, metrics,
                                    and statistics for raining fund to their
                                    organization. The platform is designed with
                                    varying levels of access for managers and
                                    moderators to update the community details.
                                </p>
                                <SearchForm
                                    categories={sanitizedCategories}
                                    countries={countries}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    {communities?.length > 0 ? (
                        <>
                            {communities?.map((community) => (
                                <div
                                    key={community.id}
                                    className="col-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <CommunityCard
                                        overlay
                                        name={community.name}
                                        country={community.country}
                                        fundRaisedLocal={
                                            community.fundRaisedLocal
                                        }
                                        currency={community.localCurrency}
                                        category={community?.category?.name}
                                        location={community.location}
                                        cover={community?.images?.cover}
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

                    {/* <Pagination
                        pagination={communities?.meta}
                        currentPage={communities?.meta?.currentPage}
                        rootPage="/communities"
                    /> */}
                </div>
            </div>
        </div>
    );
};

ExploreProductArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    communities: PropTypes.array,
    categories: PropTypes.array,
    countries: PropTypes.array,
};

ExploreProductArea.defaultProps = {
    space: 1,
};

export default ExploreProductArea;

