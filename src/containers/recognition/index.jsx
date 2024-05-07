import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";
import Link from "next/link";
import Button from "@ui/button";
import RecognitionsSlider from "@containers/recognitions-slider";
import homepageData from "../../data/recognitions-image-slider.json";
import { normalizedData } from "@utils/methods";

const OurRecognitionPage = ({ space, className }) => {
    const content = normalizedData(homepageData?.content || []);

    return (
        <>
            <div
                className={clsx("rn-about-Quote-area", space === 1, className)}
            >
                <div className="container pt--80">
                    <div className="row row-reverce-sm align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1 custom-order-flexbox-2">
                            <div className="slider-thumbnail">
                                <Image
                                    src="https://assets.rumsan.net/rumsan-group/recognitions-rahat-unicef.png"
                                    alt=""
                                    width={400}
                                    height={408}
                                    priority
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                            <h2 className="mb--20">UNICEF Innovation Fund</h2>

                            <p>
                                Rahat completed UNICEF Innovation Fund's
                                program, receiving $100,000 equity-free
                                investment and year-long mentorship. Proud to
                                contribute to global efforts using blockchain
                                and open-source solutions for vulnerable
                                communities.
                            </p>

                            <div className="button-group">
                                <Link href="https://www.unicef.org/innovation/venturefund/blockchain-financial-inclusion-graduation">
                                    <Button>Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row row-reverce-sm align-items-center pt--80">
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1 mt_sm--50">
                            <h2 className="mb--20">GSMA</h2>

                            <p>
                                Rahat is one of the grantees of the GSMA
                                Innovation Fund for Anticipatory Humanitarian
                                Action, is collaborating with the UK Foreign,
                                Commonwealth & Development Office and esteemed
                                partner IFRC/Danish Red Cross to enhance its
                                platform with a blockchain-powered Anticipatory
                                Action (AA) module.
                            </p>

                            <div className="button-group">
                                <Link href="https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/blog/announcing-the-gsma-innovation-fund-for-anticipatory-humanitarian-action-cohort/">
                                    <Button>Learn More</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                            <div className="slider-thumbnail">
                                <Image
                                    src="https://assets.rumsan.net/rumsan-group/recognitions-rahat-gsma.png"
                                    alt=""
                                    width={400}
                                    height={408}
                                    priority
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row row-reverce-sm align-items-center pt--80">
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1 custom-order-flexbox-2">
                            <div className="slider-thumbnail">
                                <Image
                                    src="https://assets.rumsan.net/rumsan-group/recognitions-rahat-mit-solver.png"
                                    alt=""
                                    width={400}
                                    height={408}
                                    priority
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                            <h2 className="mb--20">MIT Solver 2023</h2>

                            <p>
                                Rahat was among the 31 winners of the MIT Solve
                                2023 Global Challenges and one of 6 solvers in
                                the financial inclusion cohort. We stood out
                                among 1,500 tech solutions and are now part of
                                the 2023 Solver Class.
                            </p>

                            <div className="button-group">
                                <Link href="https://bit.ly/3RkYZUC">
                                    <Button>Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row row-reverce-sm align-items-center pt--80">
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1 mt_sm--50">
                            <h2 className="mb--20">
                                Google Startups for Sustainable Development
                            </h2>

                            <p>
                                Rahat has been selected for the Google Startups
                                for Sustainable Development program! As part of
                                the program, we're working one-on-one with
                                Google's amazing mentors and experts to help
                                grow our business.
                            </p>

                            <div className="button-group">
                                <Link href="https://events.withgoogle.com/startups-for-sustainable-development/">
                                    <Button>Learn More</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
                            <div className="slider-thumbnail">
                                <Image
                                    src="https://assets.rumsan.net/rumsan-group/recognitions-rahat-google-startup.png"
                                    alt=""
                                    width={400}
                                    height={408}
                                    priority
                                    style={{ borderRadius: "10px" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row row-reverce-sm align-items-center pt--80">
                        <div
                            className="col-lg-5 col-md-6 col-sm-12 offset-lg-1
                         custom-order-flexbox-2"
                        >
                            <RecognitionsSlider
                                data={content["recogntion-section"]}
                            />
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
                            <h2 className="mb--20">
                                Impact Measurement Program
                            </h2>
                            <p>
                                We've completed the Google Startups for
                                Sustainable Development 2023 Impact Measurement
                                Program! We can measure our impact on the SDGs,
                                track our progress over time, identify areas for
                                improvement, and effectively communicate our
                                impact to stakeholders.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

OurRecognitionPage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

OurRecognitionPage.defaultProps = {
    space: 1,
};

export default OurRecognitionPage;

