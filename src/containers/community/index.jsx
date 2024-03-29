import CommunityCard from "@components/cards/community";
// import Pagination from "@components/pagination/pagination";
import Pagination from "@components/pagination";
import SearchForm from "@components/search-form";
import { TablePagination } from "@mui/material";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

const ExploreProductArea = ({
    className,
    space,
    communities,
    data,
    categories,
    countries,
    meta,
}) => {
    const sanitizedCategories = categories
        .filter((c) => c?.name !== "Charitable Organization")
        .map((cat) => ({
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
                                The Rahat Community Platform establishes
                                connections between communities in need and
                                potential donors or funders, encouraging
                                effective communication and collaboration. It
                                transparently shares community information,
                                including needs, impacts, metrics, and
                                statistics. This transparency ensures everyone
                                sees how assistance creates positive change,
                                emphasizing transparency and accountability in
                                managing aid.
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
                                    Rahat community is a beneficial platform
                                    that facilitates effective communication and
                                    collaboration between communities in need
                                    and potential donors or funders by allowing
                                    communities to register and share their
                                    impacts, metrics, and statistics, the
                                    platform enables transparency and
                                    accountability in aid management.
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
                                        district={community?.district}
                                    />
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>No item to show</p>
                    )}

                    <Pagination
                        pagination={meta}
                        currentPage={meta?.currentPage}
                        rootPage="/communities"
                    />
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

