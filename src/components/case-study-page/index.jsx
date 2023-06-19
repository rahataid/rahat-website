import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";
import CaseStudy from "../../data/case-study.json";
import Link from "next/link";

const CaseStudyPage = ({ space, className }) => (
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
                            <h4 className="title">Project Showcase</h4>
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
                    {CaseStudy.map((d) => (
                        <>
                            <div
                                key={d.id}
                                className="col-lg-4 col-md-6 col-12 sal-animate"
                                data-sal="slide-up"
                                data-sal-duration="800"
                                data-sal-delay="150"
                            >
                                <div className={clsx("rn-blog", className)}>
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Image
                                                src={d.background_image}
                                                alt={d.title ? d.title : "-"}
                                                width={489}
                                                height={366}
                                            />
                                        </div>

                                        <div className="content">
                                            <h4 className="title">
                                                <Link
                                                    target="_blank"
                                                    href={d.link ? d.link : "#"}
                                                >
                                                    {d.title ? d.title : "-"}
                                                </Link>
                                            </h4>

                                            <Link
                                                target="_blank"
                                                href={d.link ? d.link : "#"}
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

CaseStudyPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

CaseStudyPage.defaultProps = {
    space: 1,
};

export default CaseStudyPage;

