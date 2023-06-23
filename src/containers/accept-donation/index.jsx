import Icon from '@components/iconify';
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
                    <div className="rn-accept-card">
                        <h4 className='mb--15'>Accept donation from {"Rahat"} ?</h4>
                        <span className='mr--25'><Icon style={{ color: '#007bb6', fontSize: '24px', marginBottom: '2px' }} icon="solar:hand-money-linear" /> 50,000</span>
                        <span><Icon style={{ color: '#007bb6', fontSize: '22px', marginBottom: '2px' }} icon="clarity:date-line" /> 20/11/2023</span>

                    </div>
                    <div className="rn-accept-card">

                        <h4>Terms and Conditions</h4>
                        <p>{"lorem"}</p>
                    </div>
                </div>
            </div>
            <div className="row mt--50">
                <div className="offset-lg-2 col-lg-8">
                    <Button path="#" size="medium" className="mr--15">
                        Accept
                    </Button>
                    <Button path="#" color="primary-alta" size="medium">
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    </div >
);

PrivacyPolicyArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};
PrivacyPolicyArea.defaultProps = {
    space: 1,
};

export default PrivacyPolicyArea;
