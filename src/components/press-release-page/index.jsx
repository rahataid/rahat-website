import Button from "@ui/button";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import PressReleased from "../../data/press-release.json";

const PressReleaseViewPage = ({ space, className }) => (
    <>
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
        <div className="row padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12 custom-page-banner">
                <div className="author-wrapper">
                    <div className="author-inner">
                        <div className="rn-author-info-content-custom">
                            <h4 className="title">Press Release</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            className={clsx(
                "rn-about-Quote-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row g-5">
                    {PressReleased.map((d) => {
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
                                                <div className="category-info">
                                                    <div className="meta">
                                                        <span>
                                                            <i className="feather-calendar" />
                                                            {d.created_at
                                                                ? moment(
                                                                      d.created_at
                                                                  ).format("LL")
                                                                : "-"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <h4 className="title">
                                                    <Link
                                                        className="short-title"
                                                        href=""
                                                    >
                                                        {d?.title}
                                                    </Link>
                                                </h4>

                                                <Link
                                                    href={`/press-release/${d?.slug}`}
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

PressReleaseViewPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

PressReleaseViewPage.defaultProps = {
    space: 1,
};

export default PressReleaseViewPage;

