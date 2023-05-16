import { setWalletName } from "@utils/sessionManager";
import MetaMaskCard from "@web3/components/Metamask";
import { useWalletConnector } from "@web3/hooks/useWalletConnector";
// import { useWalletConnector } from "@web3/hooks/useWalletConnector";
import { getName } from "@web3/utils";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

const WalletLoginButton = ({
    title,
    imgSrc,
    isActive,
    connector,
    ...restProps
}) => {
    const connectedWalletName = getName(connector);
    const onClick = async () => {
        setWalletName(connectedWalletName);
        await connector.activate();
    };

    console.log("connector", connector);

    const preTitle = isActive ? "Connected to " : "Login with ";
    const walletName = preTitle + connectedWalletName;
    return (
        <div
            onClick={onClick}
            type="button"
            className="another-login login-facebook"
            style={{ display: "flex", alignItems: "center" }}
        >
            <span className="small-image">
                <Image
                    src={imgSrc}
                    alt="google login"
                    width={26}
                    height={27}
                    layout="fixed"
                />
            </span>
            <span>{walletName}</span>
            {isActive && (
                <div style={{ marginLeft: "auto" }}>
                    <Button
                        className="connectBtn"
                        size="small"
                        onClick={() => {
                            if (connector?.deactivate) {
                                void connector.deactivate();
                            } else {
                                void connector.resetState();
                            }
                        }}
                    >
                        Disconnect
                    </Button>
                </div>
            )}
        </div>
    );
};

const SocialAuth = ({ className }) => {
    const { account, accounts, provider, balances } = useWalletConnector();
    return (
        <div className={clsx("social-share-media form-wrapper-one", className)}>
            <h6>Connect Wallet</h6>
            <p>Lorem ipsum dolor sit, amet sectetur adipisicing elit.cumque.</p>
            <MetaMaskCard
                imgSrc={"/images/icons/wallet/1.png"}
                title={"MetaMask"}
                component={WalletLoginButton}
            />
        </div>
    );
};

SocialAuth.propTypes = {
    className: PropTypes.string,
};
export default SocialAuth;
