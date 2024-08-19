import { SectionTitleType, TextType } from "@utils/types";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
// import MobileTeam from "../../data/mobile-our-team.json";
import OurTeam from "../../data/our-team1.json";
import PartnersAndCollab from "@components/partners-and-collaborators";
import CollabAndPartners from "@components/collabs-and-partners";
// import Team from "../../data/our-team2.json";
import PhoneView from "../../data/our-team-mobile-latest.json";

const iconStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
};

const iconItemStyles = {
    width: "150px" /* Adjust the width of the icon container */,
    height: "100px" /* Adjust the height of the icon container */,
    margin: "10px" /* Adjust the margin between icons */,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

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
        <div className="row padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12 custom-page-banner">
                <div className="author-wrapper">
                    <div className="author-inner">
                        <div className="rn-author-info-content-custom">
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
                        <p style={{ margin: "0px 0px 10px" }}>
                            Rahat (relief in Nepali) is an open-source
                            blockchain-based financial access platform to
                            support vulnerable communities.
                        </p>

                        <p style={{ margin: "0px 0px 10px" }}>
                            We are building resilience against the impact of
                            climate shocks through decentralized and transparent
                            financial access.
                        </p>

                        <h5 className="mt-5" style={{ margin: "0px 0px 10px" }}>
                            Our Mission
                        </h5>

                        <p style={{ margin: "0px 0px 10px" }}>
                            To bridge the opportunity divide and break the
                            poverty cycle by providing immediate access to
                            financial aid, building financial resilience, and
                            fostering digital financial literacy for the last
                            billion.
                        </p>
                        <h5 className="mt-5" style={{ margin: "0px 0px 10px" }}>
                            Our Vision
                        </h5>
                        <p style={{ margin: "0px" }}>
                            Financial Inclusion & Access for the last billion.
                        </p>
                    </div>
                </div>

                <div
                    className="rn-about-title-wrapper"
                    style={{ textAlign: "center" }}
                >
                    {/* For Desktop View Only
                    <div className="d-none d-lg-block">
                        <div className="row justify-content-center g-5 pt--50">
                            <div className="col-lg-3 col-12">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-unicef.png"
                                        alt="unicef"
                                    />
                                    <p>UNICEF Venture Fund StartUp Portfolio</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partner-and-collab-rahat.png"
                                        alt="digital-public-goods"
                                    />
                                    <p>
                                        We are certified as Digital Public
                                        Goods.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collad-eth-foundation.png"
                                        alt="unicef"
                                    />
                                    <p>Sponsored by Ethereum Foundation.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="rn-about-wrapper">
                                    <a
                                        href="https://bc100plus.org/"
                                        target="_blank"
                                    >
                                        <img
                                            src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/bc100-icon.png"
                                            alt="unicef"
                                        />
                                        <p>We are a member of the BCC100+</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center g-5 ptb--50">
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-g20-indonesia.png"
                                        alt="g20"
                                    />
                                    <p>We are one of the finalists of</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-usaid.png"
                                        alt="digital-public-goods"
                                    />
                                    <p>We are one of the finalists of</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-calp-network.png"
                                        alt="calp-network"
                                    />
                                    <p>We are a member of the</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-ccg.png"
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
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-nrcs.png"
                                        alt="redcross-nepal"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-rotaract.png"
                                        alt="rotaract-club-yala"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-tayaba.png"
                                        alt="tayaba"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-rahat-leo.png"
                                        alt="leo-club"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-somleng.png"
                                        alt="somleng"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-srso.png"
                                        alt="srso"
                                    />
                                    <p>Our Pilot Partners</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="d-none d-lg-block">
                        <h1 className="mb-5">Our Collaborators & Supporters</h1>
                        <PartnersAndCollab />
                    </div>

                    <div className="d-block d-lg-none">
                        <h1 className="mb-5" style={{ fontSize: "20px" }}>
                            Our Collaborators & Supporters
                        </h1>
                        <CollabAndPartners />
                    </div>

                    {/* For Mobile View Only
                    <div className="d-block d-lg-none">
                        <div className="row justify-content-center g-5 pt--50">
                            <div className="col-lg-4 col-12">
                                <p style={{ margin: "15px" }}>
                                    UNICEF Venture Fund StartUp Portfolio
                                </p>
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-unicef.png"
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
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partner-and-collab-rahat.png"
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
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collad-eth-foundation.png"
                                        alt="unicef"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <a
                                    href="https://bc100plus.org/"
                                    target="_blank"
                                >
                                    <p style={{ margin: "15px" }}>
                                        We are a member of the BCC100+
                                    </p>
                                    <div className="rn-about-wrapper">
                                        <img
                                            src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/bc100-icon.png"
                                            alt="bcc100+"
                                        />
                                    </div>
                                </a>
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
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-g20-indonesia.png"
                                        alt="g20"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-usaid.png"
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
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-calp-network.png"
                                        alt="calp-network"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-ccg.png"
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
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-nrcs.png"
                                        alt="redcross-nepal"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-rotaract.png"
                                        alt="rotaract-club-yala"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-tayaba.png"
                                        alt="tayaba"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-rahat-leo.png"
                                        alt="leo-club"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-somleng.png"
                                        alt="somleng"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-4">
                                <div className="rn-about-wrapper">
                                    <img
                                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-srso.png"
                                        alt="srso"
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div
                        className="rn-about-title-wrapper"
                        style={{ textAlign: "center" }}
                    ></div>

                    {/* For Desktop View Only Our Team*/}
                    <div className="d-none d-lg-block">
                        <h1>Our Team</h1>
                        <div className="row g-5 justify-content-center align-items-center pt--50">
                            {OurTeam.map((d) => (
                                <>
                                    <div key={d.id} className="col-lg-3 col-6">
                                        <div className="user-thumbnail">
                                            <img
                                                style={{
                                                    borderRadius: "50%",
                                                    width: "250px",
                                                }}
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
                                                        fontSize: "14px",
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

                    <div className="d-block d-lg-none">
                        <h1 style={{ fontSize: "21px" }}>Our Team</h1>
                        <div className="row g-5 justify-content-center align-items-center pt--50">
                            {PhoneView.map((d) => (
                                <>
                                    <div key={d.id} className="col-lg-2 col-6">
                                        <div className="user-thumbnail">
                                            <img
                                                style={{
                                                    borderRadius: "50%",
                                                    width: "200px",
                                                }}
                                                src={d.team_image}
                                                alt={d.fname}
                                            />

                                            <div className="title-post pt--20">
                                                <h5
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "14px",
                                                    }}
                                                >
                                                    {d.fname}
                                                </h5>
                                                <p
                                                    className=""
                                                    style={{
                                                        margin: "0",
                                                        fontSize: "10px",
                                                        whiteSpace: "nowrap",
                                                        marginLeft: "-5px",
                                                    }}
                                                >
                                                    {d.designation}
                                                </p>
                                            </div>

                                            <ul
                                                className="social-copyright d-flex justify-content-center align-items-center"
                                                style={{
                                                    padding: "0px",
                                                    marginTop: "-5px",
                                                }}
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

                    {/* For Mobile View Only Our Team
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
                    </div> */}
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
