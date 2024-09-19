import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const FinancialDigitalLiteracyHomePage = ({ space, className }) => (
    <>
        <div className={clsx("rn-about-Quote-area", space === 1, className)}>
            <div className="container pt--50">
                <div className="row align-items-center g-5">
                    <div className="col-12 ">
                        <div className="title-area">
                            <p style={{ margin: "0px 0 20px" }}>
                                The evolution of digital financial services
                                provides immense opportunities to deepen
                                financial inclusion and expand access to the
                                financial system for previously underserved
                                groups. But, limited awareness and insufficient
                                digital and financial literacy, impede the
                                effective adoption and utilization of these
                                digital financial services.
                            </p>
                            <p style={{ margin: "0px 0 20px" }}>
                                Moreover, women are disproportionately affected,
                                lacking access to phones, digital literacy, and
                                financial services compared to men. Our projects
                                have revealed stark disparities: women often
                                lack the skills to utilize phones and access
                                banking services compared to men. Women from
                                marginalized communities, such as rural areas or
                                low-income households, face greater exclusion
                                due to limited access to digital devices and
                                lower digital literacy levels compared to men.
                                Cultural beliefs and stereotypes often
                                discourage women from learning about technology
                                or seeking digital literacy training,
                                reinforcing gender disparities in access to
                                opportunities and economic empowerment.
                            </p>
                            <p style={{ margin: "0px 0 20px" }}>
                                We recognize the importance of addressing and
                                managing the risk for underserved groups in this
                                fast-paced digital financial environment.
                                Through Rahat, we empower local communities to
                                bridge the opportunity divide through targeted
                                digital and financial literacy activities. We
                                aim to address gender-specific challenges by
                                advocating for gender-inclusive approaches, and
                                fostering community engagement to promote
                                women's participation in the digital economy,
                                ultimately empowering them economically and
                                socially.
                            </p>
                            <p style={{ margin: "0px 0 20px" }}>
                                By fostering strong connections and actively
                                involving, empowering, and educating community
                                representatives, beneficiaries, organizations,
                                volunteers, and government bodies, we strive to
                                create sustainable impacts and contribute
                                significantly to the overall development of the
                                communities we support.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <h3>Community Representatives</h3>
                            <p className="mt-4">
                                We support community representatives including{" "}
                                <b>vendors</b> and <b>local mobilizers</b> with
                                digital and financial literacy training. They
                                play a crucial role in bridging the gap between
                                Rahat and the beneficiaries, facilitating
                                communication, providing on-the-ground support,
                                and ensuring our initiatives effectively meet
                                local needs. Their involvement helps foster
                                resilience and self-sufficiency within the
                                community.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                style={{ width: "600px" }}
                                src="https://assets.rumsan.net/rumsan-group/community-repersentatives-banner.jpg"
                                alt="ommunity-repersentatives-banner"
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 mt-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                style={{ width: "600px" }}
                                src="https://assets.rumsan.net/rumsan-group/stakeholders-banner.jpg"
                                alt="stakeholders-banner"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-1">
                        <div className="title-area">
                            <h3>Stakeholders</h3>
                            <p className="mt-4">
                                We conduct training sessions and workshops for
                                stakeholders, including <b>organizations,</b>{" "}
                                <b>volunteers,</b> and{" "}
                                <b>government entities,</b> on the use of
                                technology to streamline their workflow and
                                build more cost and time-efficient approaches.
                                This training ensures they can effectively
                                support and implement their initiatives,
                                enhancing their overall impact.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 mt-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 custom-order-flexbox-2">
                        <div className="title-area">
                            <h3>Beneficiaries </h3>
                            <p
                                className="mt-4"
                                style={{ margin: "0px 0 10px" }}
                            >
                                We also provide basic digital and financial
                                literacy training to <b>beneficiaries,</b> with
                                support from our local mobilizers and
                                coordinators.
                            </p>
                            <p>
                                We also provide basic digital and financial
                                literacy training to beneficiaries, with support
                                from our local mobilizers and coordinators.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <img
                                style={{ width: "600px" }}
                                src="https://assets.rumsan.net/rumsan-group/beneficiaries-banner.jpg"
                                alt="beneficiaries-banner"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

FinancialDigitalLiteracyHomePage.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

FinancialDigitalLiteracyHomePage.defaultProps = {
    space: 1,
};

export default FinancialDigitalLiteracyHomePage;

