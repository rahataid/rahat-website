import Image from "next/image";
import clsx from "clsx";
import PropTypes from "prop-types";
import Slider, { SliderItem } from "@ui/slider";
import { SectionTitleType, TextType } from "@utils/types";
import { normalizedData } from "@utils/methods";
import HeroArea from "@containers/hero";
import VideoArea from "@components/youtube-video";

import RahatBeemaData from "../../data/rahat-beema.json";
import RahatBeemaVideo from "@components/rahat-beema-video";
import AchievementsBadges from "./achievements-badges";
import KeyComponents from "./key-components";

const sliderOptions = {
    // adaptiveHeight: true,
    speed: 500,
    autoplay: true,
    infinite: true,
    // responsive: [
    //     {
    //         breakpoint: 1124,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //         },
    //     },
    //     {
    //         breakpoint: 868,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: false,
    //             arrows: true,
    //         },
    //     },
    //     {
    //         breakpoint: 576,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             arrows: false,
    //         },
    //     },
    // ],
};

const RahatBeemaPage = ({ space, className }) => {
    const content = normalizedData(RahatBeemaData?.content || []);

    return (
        <>
            <main id="main-content">
                <HeroArea data={content["beema-hero-section"]} />
            </main>
            <RahatBeemaVideo data={content["video-section"]} />
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
                                            Rahat Beema is dedicated to serving
                                            vulnerable communities often
                                            overlooked by traditional insurance
                                            systems, promoting financial
                                            inclusion and economic stability for
                                            all.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main
                id="main-content"
                className="bg-info mt--100"
                style={{ position: "relative" }}
            >
                <div className="row pb--40 pl--50 pt--80 ">
                    <div className="col-lg-8">
                        <h2>
                            Annually, Natural Disasters Push 26 Million People
                            into Poverty, Affecting Vulnerable Communities
                        </h2>
                        <br />
                        <p className="pr--30">
                            Rahat Beema serves marginalized communities,
                            including low-income families, smallholder farmers,
                            migrant labor workers, and vulnerable populations in
                            disaster-prone regions. These individuals and
                            families often lack the means to cope with the
                            aftermath of disasters, making recovery difficult.
                            <br />
                            Traditional insurance schemes are unaffordable and
                            come with complex claims processes, leaving them
                            exposed to significant financial risks. Rahat Beema
                            empowers them through accessible and affordable
                            parametric microinsurance, leveraging blockchain
                            smart contracts to ensure direct payouts and
                            strengthen the financial resilience for those who
                            need it the most.
                        </p>
                        <div className="row">
                            <div className="col-3 d-flex flex-column align-items-center">
                                <Image
                                    src="/images/icon/farmer.png"
                                    alt="farmer-icon"
                                    width={150}
                                    height={150}
                                />
                                <h4>1800+</h4>
                                <p className="text-center">
                                    Access to smallholder <br />
                                    farmers
                                </p>
                            </div>
                            <div className="col-3 d-flex flex-column align-items-center">
                                <Image
                                    src="/images/icon/mobilizer.png"
                                    alt="mobilizer-icon"
                                    width={150}
                                    height={150}
                                />
                                <h4>100+</h4>
                                <p>Mobilizers</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4"
                        style={{
                            position: "absolute",
                            top: "-50px",
                            right: "10px",
                            height: "10vh",
                            borderRadius: "20px",
                        }}
                    >
                        <div
                            style={{ borderRadius: "20px", overflow: "hidden" }}
                        >
                            <Slider options={sliderOptions}>
                                <SliderItem>
                                    <Image
                                        style={{
                                            borderRadius: "20px",
                                        }}
                                        src="/images/bg/beema-mini-slider-banner-2.JPG"
                                        alt="banner-1"
                                        width={400}
                                        height={800}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </SliderItem>
                                <SliderItem>
                                    <Image
                                        style={{
                                            borderRadius: "20px",
                                        }}
                                        src="/images/bg/test.png"
                                        alt="banner-1"
                                        width={400}
                                        height={400}
                                        layout="responsive"
                                        objectFit="cover"
                                    />
                                </SliderItem>
                            </Slider>
                        </div>
                    </div>
                </div>
            </main>
            <KeyComponents />
            <AchievementsBadges />
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

