import PropTypes from "prop-types";
import clsx from "clsx";
import Wrapper from "@layout/wrapper";
import SEO from "@components/seo";
import Image from "next/image";
import Header from "@layout/header/header-01";
import Footer from "@layout/footer/footer-01";
import { getMonth } from "@utils/methods";
import { ImageType } from "@utils/types";

const BlogDetailPage = ({ space, className, post }) => {
    // const date = new Date(post.date);
    return (
        <>
            <Wrapper>
                <SEO pageTitle="blogs page" />
                <Header />

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
                                    <h4 className="title">Blogs Details</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(
                        "rn-blog-area",
                        space === 1 && "rn-section-gapTop",
                        className
                    )}
                >
                    <div className="container">
                        <div className="row g-5 d-flex justify-content-center align-items-center">
                            <div className="col-lg-10 ol-12">
                                <div
                                    className={clsx(
                                        "blog-details-area",
                                        className
                                    )}
                                >
                                    <div className="blog-content-top">
                                        <h2 className="title">ff</h2>
                                        {/* <span className="date">
                    {date.getDate().toString().padStart(2, "0")}{" "}
                    {getMonth(date)}, {date.getFullYear()}
                </span> */}
                                    </div>
                                    <div className="bd-thumbnail">
                                        <div className="large-img mb--30">
                                            <Image
                                                className="w-100"
                                                src="https://assets.rumsan.com/rumsan-group/graduation-banner.jpg"
                                                alt="Blog Images"
                                                width={919}
                                                height={517}
                                                layout="responsive"
                                            />
                                        </div>
                                    </div>
                                    {/* <div
                className="news-details"
                dangerouslySetInnerHTML={{ __html: post.content }}
            /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </Wrapper>
        </>
    );
};

BlogDetailPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        image: ImageType,
        content: PropTypes.string,
    }),
};

BlogDetailPage.defaultProps = {
    space: 1,
};

export default BlogDetailPage;

