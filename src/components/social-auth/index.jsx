import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";

const SocialAuth = ({ className }) => (
    <div className={clsx("social-share-media form-wrapper-one", className)}>
        <h6>Connect Wallet</h6>
        <p>Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.</p>
        <button type="button" className="another-login login-facebook">
            <span className="small-image">
                <Image
                    src="/images/icons/wallet/1.png"
                    alt="google login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>Log in with Metamask</span>
        </button>
    </div>
);

SocialAuth.propTypes = {
    className: PropTypes.string,
};
export default SocialAuth;
