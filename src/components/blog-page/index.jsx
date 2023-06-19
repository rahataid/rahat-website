import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";
import Link from "next/link";

const BLogPage = ({ space, className, blogs }) => (
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
            <div className="col-lg-12">
                <div className="author-wrapper">
                    <div className="author-inner">
                        <div className="rn-author-info-content">
                            <h4 className="title">Blogs </h4>
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
                    {blogs.map((blog) => (
                        <>
                            <div
                                className="col-lg-4 col-md-6 col-12 sal-animate"
                                data-sal="slide-up"
                                data-sal-duration="800"
                                data-sal-delay="150"
                            >
                                <div className={clsx("rn-blog", className)}>
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Image
                                                src={blog.image_url}
                                                alt=""
                                                width={489}
                                                height={366}
                                            />
                                        </div>

                                        <div className="content">
                                            <div className="category-info">
                                                <div className="meta">
                                                    <span>
                                                        <i className="feather-calendar" />
                                                        29th May , 2023
                                                    </span>
                                                </div>
                                            </div>
                                            <h4 className="title">
                                                <Link target="_blank" href="#">
                                                    {blog.title}
                                                </Link>
                                            </h4>

                                            <Link
                                                target="_blank"
                                                href={`/blogs/${blog.slug}`}
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
                    ))}
                </div>
            </div>
        </div>
    </>
);

BLogPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

BLogPage.defaultProps = {
    space: 1,
};

export default BLogPage;

