import Button from "@ui/button";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import OurHighlightsData from "../../data/our-highlights.json";

const OurHighlightListPage = ({ space, className }) => (
    <>
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop-custom",
                className
            )}
        >
            <div className="container">
                <div className="row mb--20">
                    <div className="title-area">
                        <h4 className="title mb--15">Our highlights</h4>
                    </div>
                </div>
                <div className="row g-5">
                    {OurHighlightsData.map((d) => {
                        return (
                            <>
                                <div
                                    key={d._id}
                                    className="col-lg-4 col-md-6 col-12 sal-animate"
                                    data-sal="slide-up"
                                    data-sal-duration="800"
                                    data-sal-delay="150"
                                >
                                    <div className={clsx("rn-blog", className)}>
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Image
                                                    src={d.image_banner}
                                                    alt={
                                                        d.title ? d.title : "-"
                                                    }
                                                    width={489}
                                                    height={366}
                                                />
                                            </div>

                                            <div className="content">
                                                <h4
                                                    className="title"
                                                    style={{
                                                        fontSize: "2rem",
                                                        fontWeight: "500",
                                                    }}
                                                >
                                                    <Link
                                                        className="short-title"
                                                        href=""
                                                    >
                                                        {d?.title}
                                                    </Link>
                                                </h4>

                                                <Link
                                                    href={`/our-highlights/${d?.slug}`}
                                                >
                                                    <Button
                                                        className="mt-5"
                                                        size="medium"
                                                    >
                                                        Read More
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    </>
);

OurHighlightListPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

OurHighlightListPage.defaultProps = {
    space: 1,
};

export default OurHighlightListPage;

