import MetaMaskCard from "@web3/components/Metamask";
// import { useWalletConnector } from "@web3/hooks/useWalletConnector";
import CoinbaseCard from "@web3/components/Coinbase";
import { useWalletConnector } from "@web3/hooks/useWalletConnector";
import clsx from "clsx";
import PropTypes from "prop-types";
import WalletLoginButton from "./WalletLogin";

const SocialAuth = ({ className }) => {
    const { error } = useWalletConnector();
    console.log("error", JSON.stringify(error, null, 2));
    return (
        <div className={clsx("social-share-media form-wrapper-one", className)}>
            <h6>Connect Wallet</h6>
            <p>Please select a wallet to connect into Rahat System.</p>
            {error && error?.reason}
            <MetaMaskCard
                imgSrc={"/images/icon/metamask.png"}
                title={"MetaMask"}
                component={WalletLoginButton}
            />
            {/* <CoinbaseCard
                imgSrc={"/images/icons/wallet/2.png"}
                title={"Coinbase"}
                component={WalletLoginButton}
            /> */}
        </div>
    );
};

SocialAuth.propTypes = {
    className: PropTypes.string,
};
export default SocialAuth;

