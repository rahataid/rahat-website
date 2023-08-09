import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const BeneficiaryCommunicationIvrSms = ({ space, className }) => (
    <>
        <div className="rn-author-bg-area position-relative ptb--150">
            <Image
                src="https://assets.rumsan.com/rumsan-group/sms-banner-feature-page.jpg"
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
                            <h4 className="title">
                                Beneficiary Communication (IVR/SMS)
                            </h4>
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
                <div className="row align-items-center g-5">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title">
                                Interactive Voice Response (IVR)
                            </h3>
                            <p className="">
                                Engage beneficiaries through an interactive
                                voice-based system. Deliver important
                                information, updates, and instructions via
                                automated voice calls through the integration
                                with Mobile network service providers.
                            </p>
                            <h3 className="title">Wide Reach</h3>
                            <p className="">
                                Reach a large number of beneficiaries
                                simultaneously, delivering vital information to
                                a diverse group of recipients in a
                                cost-effective manner.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/ivr.png"
                                alt=""
                                style={{ width: "450px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/sms-messaging.png"
                                alt=""
                                style={{ width: "450px" }}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title">SMS Messaging</h3>
                            <p className="">
                                Reach out to beneficiaries through SMS messaging
                                for quick and efficient communication. Send
                                early warnings, timely updates, reminders, and
                                important notifications directly to their mobile
                                phones.
                            </p>
                            <h3 className="title">Customized Messaging</h3>
                            <p className="">
                                Tailor messages to meet the specific needs of
                                your aid programs. Personalize communication to
                                provide relevant information, instructions, and
                                support to beneficiaries.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title">
                                Language and Accessibility
                            </h3>
                            <p className="">
                                Cater to the language preferences and
                                accessibility needs of beneficiaries. Provide
                                multilingual messaging options and ensure
                                compatibility with assistive technologies for
                                inclusive communication.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/language-ivr-sms-.png"
                                alt=""
                                style={{ width: "500px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

BeneficiaryCommunicationIvrSms.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

BeneficiaryCommunicationIvrSms.defaultProps = {
    space: 1,
};

export default BeneficiaryCommunicationIvrSms;

