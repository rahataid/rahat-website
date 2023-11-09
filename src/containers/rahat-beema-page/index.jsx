import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";
import { SectionTitleType, TextType } from "@utils/types";
import { normalizedData } from "@utils/methods";
import HeroArea from "@containers/hero";
import VideoArea from "@components/youtube-video";
import RahatBeemaData from "../../data/rahat-beema.json";

const RahatBeemaPage = ({ space, className }) => {
    const content = normalizedData(RahatBeemaData?.content || []);

    return (
        <>
            <main id="main-content">
                <HeroArea data={content["beema-hero-section"]} />
            </main>
            <VideoArea data={content["video-section"]} />
            <div
                className={clsx(
                    "rn-about-Quote-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
                id="our-ecosystem"
            >
                <div className="container">
                    <div className="row mb--40">
                        <div className="title-area text-center">
                            <h3 className="title mb--15">Why Rahat Beema ?</h3>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="rn-service-one-our-ecosystem color-shape-7">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Image
                                            src="/images/icon/efficient.png"
                                            alt="efficient-icon"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title-feature">
                                            <a href="/cash-and-voucher-assistance-platform">
                                                Efficient
                                            </a>
                                        </h4>
                                        <p className="description-feature">
                                            Rahat Beema utilizes blockchain
                                            technology to streamline processes,
                                            automating weather data assessment,
                                            and enabling quick claims processing
                                            for a smoother user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="rn-service-one-our-ecosystem color-shape-7">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Image
                                            src="/images/icon/cheaper.png"
                                            alt="cheaper-icon"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title-feature">
                                            <a href="/rahat-beema">Cheaper</a>
                                        </h4>
                                        <p className="description-feature">
                                            By reducing administrative costs
                                            through blockchain, Rahat Beema
                                            offers cost-effective coverage,
                                            making insurance accessible to
                                            low-income farmers and migrants.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="rn-service-one-our-ecosystem color-shape-7">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Image
                                            src="/images/icon/transparent.png"
                                            alt="transparent-icon"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title-feature">
                                            <a href="/rahat-anticipatory-actions">
                                                Transparent
                                            </a>
                                        </h4>
                                        <p className="description-feature">
                                            Our blockchain-based platform
                                            ensures complete transparency by
                                            making all insurance-related data
                                            and transactions visible, immutable,
                                            and auditable. This fosters trust
                                            and accountability, benefiting all
                                            stakeholders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="rn-service-one-our-ecosystem color-shape-7">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Image
                                            src="/images/icon/inclusive.png"
                                            alt="inclusive-icon"
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                    <div className="content">
                                        <h4 className="title-feature">
                                            <a href="/rahat-anticipatory-actions">
                                                Inclusive
                                            </a>
                                        </h4>
                                        <p className="description-feature">
                                            Our blockchain-based platform
                                            ensures complete transparency by
                                            making all insurance-related data
                                            and transactions visible, immutable,
                                            and auditable. This fosters trust
                                            and accountability, benefiting all
                                            stakeholders.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

RahatBeemaPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

RahatBeemaPage.defaultProps = {
    space: 1,
};

export default RahatBeemaPage;

