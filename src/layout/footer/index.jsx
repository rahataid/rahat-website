import { ItemType } from "@utils/types";
import FooterLinkWidget from "@widgets/footer-link";
import clsx from "clsx";
import PropTypes from "prop-types";

// Demo data
import footerData from "../../data/footer.json";

const Footer = ({ space, className, data }) => (
    <>
        <div
            className={clsx(
                "rn-footer-one bg-color--1",
                space === 1 && "rn-section-gap mt--100 mt_md--80 mt_sm--80",
                space === 2 && "rn-section-gap",
                space === 3 && "mt--100 mt_md--80 mt_sm--80",
                className
            )}
            id="footer"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="widget-content-wrapper">
                            <img
                                src="https://assets.rumsan.com/rumsan-group/rumsan-logo-raha-footer.png"
                                alt=""
                                style={{
                                    width: "245px",
                                    marginBottom: "9px",
                                    marginTop: "-30px",
                                }}
                            />
                            <p>
                                Rumsan provides blockchain consulting for your
                                business and engineering requirements. We
                                envision creating societal impact.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt_mobile--40">
                        <div className="">
                            <h6 className="widget-title">Techonolgy</h6>

                            <ul className="footer-list-one">
                                <li className="single-list">
                                    <a
                                        target="_blank"
                                        href="https://docs.rahat.io/docs/intro/"
                                    >
                                        For Developers
                                    </a>
                                </li>
                                <li className="single-list">
                                    <a
                                        target="_blank"
                                        href="https://github.com/esatya"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li className="single-list">
                                    <a
                                        target="_blank"
                                        href="https://drive.google.com/drive/folders/15pe-Stv9iDwV0sm6-ohHJWLHFnuV-wDG"
                                    >
                                        Media Kit
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                        <div className="">
                            <h6 className="widget-title">Get in Touch</h6>
                            <ul className="footer-list-one">
                                <li className="single-list">
                                    <i className="feather-mail"></i>
                                    <a
                                        style={{ marginLeft: "3px" }}
                                        href="mailto:team@rahat.io"
                                    >
                                        team@rahat.io
                                    </a>
                                </li>
                            </ul>
                            <ul className="social-share-custom">
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://twitter.com/rahataid"
                                    >
                                        <span className="icon">
                                            <i className="feather-twitter" />
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.linkedin.com/company/esatya/"
                                    >
                                        <span className="icon">
                                            <i className="feather-linkedin" />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://esatya.medium.com/"
                                    >
                                        <span className="icon">
                                            <i className="feather-book-open" />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                        <div className="">
                            <h6 className="widget-title">SDG Compliances</h6>
                            <div className="sdg-compliances">
                                <div
                                    className="row"
                                    style={{ marginTop: "-1rem" }}
                                >
                                    <div className="col-6">
                                        <img
                                            src="https://assets.rumsan.com/rumsan-group/sdc-compliances-rahat-01.jpg"
                                            alt=""
                                            style={{ marginTop: "1rem" }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            src="https://assets.rumsan.com/rumsan-group/sdc-compliances-rahat-02.jpg"
                                            alt=""
                                            style={{ marginTop: "1rem" }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            src="https://assets.rumsan.com/rumsan-group/sdc-compliances-rahat-05.jpg"
                                            alt=""
                                            style={{ marginTop: "1rem" }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <img
                                            src="https://assets.rumsan.com/esatya/sdg-climate-chane-13.png"
                                            alt=""
                                            style={{ marginTop: "1rem" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right-one ptb--20 bg-color--1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="copyright-left">
                            <span>
                                Copyright © 2023 Rahat. A{" "}
                                <a
                                    target="_blank"
                                    href="https://rumsan.com/"
                                    style={{ color: "#2b7ec1" }}
                                >
                                    Rumsan
                                </a>{" "}
                                Company.
                            </span>
                            <FooterLinkWidget
                                data={footerData["footer-link-widget"]}
                            />
                        </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="copyright-right">
                            <SocialWidget socials={contactData.socials} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>
);

Footer.propTypes = {
    space: PropTypes.oneOf([1, 2, 3]),
    className: PropTypes.string,
    data: PropTypes.shape({
        items: PropTypes.arrayOf(ItemType),
    }),
};

Footer.defaultProps = {
    space: 1,
};

export default Footer;

