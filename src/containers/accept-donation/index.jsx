import Button from "@ui/button";
import clsx from "clsx";
import PropTypes from "prop-types";

const PrivacyPolicyArea = ({ className, space, donations }) => (
    <div
        className={clsx(
            "rn-privacy-policy-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row mb_dec--50">
                <div className="offset-lg-2 col-lg-8 ">
                    <div className="privacy-wrapper">
                        <h4>Accept donation from {donations.donee.name} ?</h4>
                        <p>{donations.donor.description}</p>

                        <h4>Terms and Conditions</h4>
                        <p>{donations.terms}</p>
                    </div>
                </div>
            </div>
            <div className="row mt--50">
                <div className="offset-lg-2 col-lg-8">
                    <Button path="#" size="medium" className="mr--15 ml--25">
                        Accept
                    </Button>
                    <Button path="#" color="primary-alta" size="medium">
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    </div>
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
