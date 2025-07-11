import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import Button from "@ui/button";
import Link from "next/link";
import AaCaseStudy from "../../data/aniticipatory-action-case-study.json";

const AnticipatoryActionCaseStudy = ({ space, className }) => (
    <>
        <div className="row mb--40 mt--60">
            <div className="title-area text-center">
                <h3 className="title">Case Studies</h3>
            </div>
            <div className="title-area text-center">
                <p
                    className="title mt--20"
                    style={{ maxWidth: "1200px", margin: "0 auto" }}
                >
                    You can explore our case studies below showcasing how the
                    Rahat AA module has been used to implement anticipatory
                    action projects across different types of disasters.
                </p>
            </div>
        </div>

        <div className="container">
            <div
                className="row g-5"
                style={{ display: "flex", justifyContent: "center" }}
            >
                {AaCaseStudy.map((d) => (
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
                                    {d.background_image && (
                                        <div className="thumbnail">
                                            <Image
                                                src={d.background_image}
                                                alt={d.title ? d.title : "-"}
                                                width={489}
                                                height={366}
                                            />
                                        </div>
                                    )}

                                    <div className="content">
                                        <h4 className="title">
                                            <Link
                                                target="_blank"
                                                href={d.link ? d.link : "#"}
                                            >
                                                {d.title ? d.title : "-"}
                                            </Link>
                                        </h4>

                                        {d.link && (
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
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    </>
);

AnticipatoryActionCaseStudy.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

AnticipatoryActionCaseStudy.defaultProps = {
    space: 1,
};

export default AnticipatoryActionCaseStudy;

