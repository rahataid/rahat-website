import Image from "next/image";
import Slider from "@ui/slider";

const sliderOptions = {
    speed: 500,
    autoplay: true,
    infinite: true,
};

const Annually = () => {
    return (
        <main id="main-content" className="mt--100 main-content">
            <div className="content-wrapper">
                <div className="row pb--40 pl--50 pt--80 padding">
                    <div className="col-lg-8">
                        <h2 className="text-white">
                            Annually, Natural Disasters Push 26 Million People
                            into Poverty, Affecting Vulnerable Communities
                        </h2>
                        <div className="col-lg-3 mobile-slider-wrapper d-block d-sm-none">
                            <Slider options={sliderOptions} className="slider">
                                <img
                                    className="slides"
                                    src="/images/bg/main-banner-04.png"
                                />
                                <img
                                    className="slides"
                                    src="/images/bg/beema-mini-slider-banner-2.JPG"
                                />
                            </Slider>
                        </div>
                        <br />
                        <p className="text-white">
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
                            <div className="col-5 d-flex flex-column align-items-center">
                                <Image
                                    src="/images/icon/farmer.png"
                                    alt="farmer-icon"
                                    width={150}
                                    height={150}
                                />
                                <h4 className="text-white">1800+</h4>
                                <p className="text-center text-white">
                                    Access to smallholder <br />
                                    farmers
                                </p>
                            </div>
                            <div className="col-5 d-flex flex-column align-items-center">
                                <Image
                                    src="/images/icon/mobilizer.png"
                                    alt="mobilizer-icon"
                                    width={150}
                                    height={150}
                                />
                                <h4 className="text-white">100+</h4>
                                <p className="text-white">Mobilizers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 slider-wrapper d-none d-lg-block">
                        <Slider options={sliderOptions} className="slider">
                            <img
                                className="slides"
                                src="/images/bg/main-banner-04.png"
                            />
                            <img
                                className="slides"
                                src="/images/bg/beema-mini-slider-banner-2.JPG"
                            />
                        </Slider>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Annually;
