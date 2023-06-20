import { SectionTitleType, TextType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import MobileTeam from "../../data/mobile-our-team.json";
import OurTeam from "../../data/our-team1.json";
import Team from "../../data/our-team2.json";

const AboutUsDetails = ({ space, className }) => (
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
        <div className="row g-5 padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12">
                <div className="author-wrapper">
                    <div className="author-inner">
                        <div className="rn-author-info-content">
                            <h4 className="title">About Us</h4>
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
                <div className="rn-about-title-wrapper">
                    <div className="custom-text-about-us">
                        <p style={{ margin: "0px" }}>
                            Rahat (relief in Nepali) is an open source
                            blockchain-based token cash and voucher assistance
                            platform.
                        </p>

                        <p>
                            Rahat manages and monitors the flow of transactions
                            in token distribution projects maintaining end to
                            end transparency for humanitarian agencies who need
                            a transparent, efficient and cheaper way to
                            distribute cash or goods in emergency response.
                        </p>

                        <h5>Our Mission</h5>

                        <p>
                            We aim to make humanitarian aid distribution
                            efficient and transparent to support marginalized
                            communities.
                        </p>

                        <p style={{ margin: "0px" }}>
                            Rahat strengthens financial inclusion for vulnerable
                            community members and helps them receive cash
                            transfers through local vendors in their
                            communities.
                        </p>
                    </div>
                </div>

                <div
                    className="rn-about-title-wrapper"
                    style={{ textAlign: "center" }}
                >
                    <h1>Our Partners & Collaborators</h1>
                    {/* For Desktop View Only */}
                    <div className="d-none d-lg-block">
                        <div className="row justify-content-center g-5 pt--50">
                            <div className="col-lg-4 col-12">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-unicef.png"
                                        alt="unicef"
                                    />
                                    <p>UNICEF Venture Fund StartUp Portfolio</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partner-and-collab-rahat.png"
                                        alt="digital-public-goods"
                                    />
                                    <p>
                                        We are certified as Digital Public
                                        Goods.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collad-eth-foundation.png"
                                        alt="unicef"
                                    />
                                    <p>Sponsored by Ethereum Foundation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center g-5 ptb--50">
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-g20-indonesia.png"
                                        alt="g20"
                                    />
                                    <p>We are one of the finalists of</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-usaid.png"
                                        alt="digital-public-goods"
                                    />
                                    <p>We are one of the finalists of</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-calp-network.png"
                                        alt="calp-network"
                                    />
                                    <p>We are a member of the</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-ccg.png"
                                        alt="ccg"
                                    />
                                    <p>We are a member of the</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center g-5 pb--50">
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-nrcs.png"
                                        alt="redcross-nepal"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-rotaract.png"
                                        alt="rotaract-club-yala"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-tayaba.png"
                                        alt="tayaba"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-rahat-leo.png"
                                        alt="leo-club"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-somleng.png"
                                        alt="somleng"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-srso.png"
                                        alt="srso"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* For Mobile View Only */}
                    <div className="d-block d-lg-none">
                        <div className="row justify-content-center g-5 pt--50">
                            <div className="col-lg-4 col-12">
                                <p style={{ margin: "15px" }}>
                                    UNICEF Venture Fund StartUp Portfolio
                                </p>
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-unicef.png"
                                        alt="unicef"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <p style={{ margin: "15px" }}>
                                    We are certified as Digital Public Goods.
                                </p>
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partner-and-collab-rahat.png"
                                        alt="digital-public-goods"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <p style={{ margin: "15px" }}>
                                    Sponsored by Ethereum Foundation.
                                </p>

                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collad-eth-foundation.png"
                                        alt="unicef"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center g-5 ptb--50">
                            <div className="col-12 justify-content-center">
                                <p style={{ margin: "-15px" }}>
                                    We are one of the finalists of
                                </p>
                            </div>
                            <div className="col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-g20-indonesia.png"
                                        alt="g20"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-usaid.png"
                                        alt="digital-public-goods"
                                    />
                                </div>
                            </div>

                            <div className="col-12 justify-content-center">
                                <p style={{ margin: "-15px" }}>
                                    We are a member of the
                                </p>
                            </div>
                            <div className="col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-calp-network.png"
                                        alt="calp-network"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-ccg.png"
                                        alt="ccg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center g-5 pb--50">
                            <div className="col-12 justify-content-center">
                                <p style={{ margin: "-15px" }}>
                                    Our Pilot Partners
                                </p>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-nrcs.png"
                                        alt="redcross-nepal"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-rotaract.png"
                                        alt="rotaract-club-yala"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-tayaba.png"
                                        alt="tayaba"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-rahat-leo.png"
                                        alt="leo-club"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-somleng.png"
                                        alt="somleng"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-srso.png"
                                        alt="srso"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="rn-about-title-wrapper"
                        style={{ textAlign: "center" }}
                    >
                        <h1>Our Team</h1>
                    </div>
                    {/* For Desktop View Only Our Team*/}
                    <div className="d-none d-lg-block">
                        <div className="row g-5 justify-content-center align-items-center pt--50">
                            {OurTeam.map((d) => (
                                <>
                                    <div key={d.id} className="col-lg-2">
                                        <div className="user-thumbnail">
                                            <img
                                                style={{ borderRadius: "50%" }}
                                                src={d.team_image}
                                                alt={d.fname}
                                            />

                                            <div className="title-post pt--20">
                                                <h5
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "18px",
                                                    }}
                                                >
                                                    {d.fname}
                                                </h5>
                                                <p
                                                    className="pt--10"
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "15px",
                                                    }}
                                                >
                                                    {d.designation}
                                                </p>
                                            </div>

                                            <ul
                                                className="social-copyright d-flex justify-content-center align-items-center"
                                                style={{ padding: "0px" }}
                                            >
                                                <li
                                                    style={{
                                                        listStyle: "none",
                                                    }}
                                                >
                                                    <a
                                                        href={d.link_mail}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <i
                                                            className={
                                                                d.icon_mail
                                                            }
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    style={{
                                                        listStyle: "none",
                                                        marginLeft: "10px",
                                                    }}
                                                >
                                                    <a
                                                        href={d.link_linkedin}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <i
                                                            className={
                                                                d.icon_linkedin
                                                            }
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>

                        <div className="row g-5 justify-content-center align-items-center pt--40">
                            {Team.map((d) => (
                                <>
                                    <div key={d.id} className="col-lg-2">
                                        <div className="user-thumbnail">
                                            <img
                                                style={{ borderRadius: "50%" }}
                                                src={d.team_image}
                                                alt={d.fname}
                                            />

                                            <div className="title-post pt--20">
                                                <h5
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "18px",
                                                    }}
                                                >
                                                    {d.fname}
                                                </h5>
                                                <p
                                                    className="pt--10"
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "15px",
                                                    }}
                                                >
                                                    {d.designation}
                                                </p>
                                            </div>

                                            <ul
                                                className="social-copyright d-flex justify-content-center align-items-center"
                                                style={{ padding: "0px" }}
                                            >
                                                <li
                                                    style={{
                                                        listStyle: "none",
                                                    }}
                                                >
                                                    <a
                                                        href={d.link_mail}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <i
                                                            className={
                                                                d.icon_mail
                                                            }
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    style={{
                                                        listStyle: "none",
                                                        marginLeft: "10px",
                                                    }}
                                                >
                                                    <a
                                                        href={d.link_linkedin}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <i
                                                            className={
                                                                d.icon_linkedin
                                                            }
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                    {/* For Mobile View Only Our Team */}
                    <div className="d-block d-lg-none">
                        <div className="row g-5 justify-content-center align-items-center pt--50">
                            {" "}
                            {MobileTeam.map((d) => (
                                <>
                                    <div key={d.id} className="col-6">
                                        <div className="user-thumbnail">
                                            <img
                                                style={{ borderRadius: "50%" }}
                                                src={d.team_image}
                                                alt={d.fname}
                                            />

                                            <div className="title-post pt--20">
                                                <h5
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "18px",
                                                    }}
                                                >
                                                    {d.fname}
                                                </h5>
                                                <p
                                                    className="pt--10"
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "15px",
                                                    }}
                                                >
                                                    {d.designation}
                                                </p>
                                            </div>

                                            <ul
                                                className="social-copyright d-flex justify-content-center align-items-center"
                                                style={{ padding: "0px" }}
                                            >
                                                <li
                                                    style={{
                                                        listStyle: "none",
                                                    }}
                                                >
                                                    <a
                                                        href={d.link_mail}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <i
                                                            className={
                                                                d.icon_mail
                                                            }
                                                        />
                                                    </a>
                                                </li>
                                                <li
                                                    style={{
                                                        listStyle: "none",
                                                        marginLeft: "10px",
                                                    }}
                                                >
                                                    <a
                                                        href={d.link_linkedin}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <i
                                                            className={
                                                                d.icon_linkedin
                                                            }
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

AboutUsDetails.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

AboutUsDetails.defaultProps = {
    space: 1,
};

export default AboutUsDetails;

