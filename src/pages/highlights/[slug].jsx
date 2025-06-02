import React from "react";

import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

import clsx from "clsx";

import Image from "next/image";
import PropTypes from "prop-types";

// Rename to HighlightDetailPage for clarity
const HighlightDetailPage = ({ space,description, className }) => {
    // If there was an error fetching, you could show a 404 or an error message

    return (
        <Wrapper>
            <Header />

            {/* ─── Top Banner ─── */}
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src="/images/banner/contact-main-banner.jpg"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="overlay"></div>
            </div>

            {/* ─── Page Title / Breadcrumb ─── */}
            <div className="row padding-tb-50 align-items-center d-flex">
                <div className="col-lg-12 custom-page-banner">
                    <div className="author-wrapper">
                        <div className="author-inner">
                            <div className="rn-author-info-content-custom-two">
                                <h4 className="title">abcd</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── Blog/Highlight Content ─── */}
            <div
                className={clsx(
                    "rn-blog-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <div className="container">
                    <div className="row g-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-8 col-12">
                            <div
                                className={clsx("blog-details-area", className)}
                            >
                                {/* Large image */}
                                <div className="bd-thumbnail">
                                    <div className="large-img mb--30">
                                        <Image
                                            className="w-100"
                                            src=""
                                            alt=""
                                            width={919}
                                            height={517}
                                        />
                                    </div>
                                </div>

                                {/* Actual HTML content */}
                                <div className="news-details ptb--20">
                                    abcd{}
                                    {/* dangerouslySetInnerHTML={{
                                     __html: singleBlog?.content,
                                    }} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Wrapper>
    );
};

HighlightDetailPage.propTypes = {
    singleBlog: PropTypes.shape({
        title: PropTypes.string,
        image_url: PropTypes.string,
        subhead: PropTypes.string,
        published_date: PropTypes.string,
        created_at: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
    }),
    error: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

HighlightDetailPage.defaultProps = {
    space: 1,
    className: "",
};

export default HighlightDetailPage;
