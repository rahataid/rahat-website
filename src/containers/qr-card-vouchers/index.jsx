import PropTypes from "prop-types";
import clsx from "clsx";
import { TextType, SectionTitleType } from "@utils/types";
import Image from "next/image";

const DigitalPrintedQrCards = ({ space, className }) => (
    <>
        <div className="rn-author-bg-area position-relative ptb--150">
            <Image
                src="https://assets.rumsan.com/rumsan-group/qr-card-feature-banner.jpg"
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
                                Digital/Printed QR Card Vouchers
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
                            <h3 className="title">QR Card Generation</h3>
                            <p className="">
                                Generate unique QR code vouchers for aid
                                distribution. Each card contains
                                beneficiary-specific information, ensuring
                                accuracy and accountability.
                            </p>
                            <h3 className="title">
                                Enhanced Tracking & Accountability
                            </h3>
                            <p className="">
                                Track the usage and redemption of QR card
                                vouchers, enabling aid agencies to maintain
                                accurate records, monitor distribution
                                activities, and ensure accountability.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/qr-card-vouchers-banner.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/offline-redemption-banner.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title">Offline Redemption</h3>
                            <p className="">
                                Enable beneficiaries without phones or limited
                                access to technology to participate in aid
                                distribution. They can present their QR cards at
                                designated locations for redemption, ensuring
                                inclusivity.
                            </p>
                            <h3 className="title">
                                Simplified Redemption Process
                            </h3>
                            <p className="">
                                Enable beneficiaries to easily redeem their
                                vouchers by scanning the QR codes at designated
                                vendor locations, streamlining the process.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center g-5 pt--50">
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div className="title-area">
                            <h3 className="title">
                                Flexibility & Customization
                            </h3>
                            <p className="">
                                Customize the design and details of the QR card
                                vouchers to align with your organization and
                                program requirements, enhancing recognition and
                                reinforcing trust.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/customization-banner.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

DigitalPrintedQrCards.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    data: PropTypes.shape({
        section_title: SectionTitleType,
        texts: PropTypes.arrayOf(TextType),
    }),
};

DigitalPrintedQrCards.defaultProps = {
    space: 1,
};

export default DigitalPrintedQrCards;

