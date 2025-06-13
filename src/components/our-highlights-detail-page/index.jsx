import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import { ImageType } from "@utils/types";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import PropTypes from "prop-types";

const OurHighlightDetailPage = ({ space, className, OurhighlightsContent }) => {
    console.log(OurhighlightsContent, "----------->");
    console.log("i am erererer");
    // console.log("singleBlog", singleBlog);
    // const date = new Date(post.date);
    return (
        <>
            <Wrapper>
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
                    <div className="col-lg-12 custom-page-banner">
                        <div className="author-wrapper">
                            <div className="author-inner">
                                <div className="rn-author-info-content-custom-two">
                                    <h4 className="title">
                                        {OurhighlightsContent?.title}
                                    </h4>
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
                            <div className="col-lg-8 col-12">
                                <div
                                    className={clsx(
                                        "blog-details-area",
                                        className
                                    )}
                                >
                                    <div className="bd-thumbnail">
                                        <div className="large-img mb--30">
                                            <Image
                                                className="w-100"
                                                src={
                                                    OurhighlightsContent?.image_banner
                                                        ? OurhighlightsContent?.image_banner
                                                        : "-"
                                                }
                                                alt={
                                                    OurhighlightsContent?.title
                                                        ? OurhighlightsContent?.title
                                                        : "-"
                                                }
                                                width={919}
                                                height={517}
                                                objectFit="cover"
                                                objectPosition="center"
                                                layout="responsive"
                                            />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <div className="category-info">
                                            <div className="meta">
                                                <span>
                                                    <i className="feather-calendar" />
                                                    {OurhighlightsContent?.created_at
                                                        ? moment(
                                                              OurhighlightsContent?.created_at
                                                          ).format("LL")
                                                        : "-"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="news-details ptb--20"
                                        dangerouslySetInnerHTML={{
                                            __html: OurhighlightsContent?.content,
                                        }}
                                    />
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

OurHighlightDetailPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    post: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        image: ImageType,
        content: PropTypes.string,
    }),
};

OurHighlightDetailPage.defaultProps = {
    space: 1,
};

export default OurHighlightDetailPage;

