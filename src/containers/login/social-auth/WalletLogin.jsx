import { loginWithWallet } from "@redux/slices/app";
import { setLoginMethod } from "@utils/sessionManager";
import { useWalletConnector } from "@web3/hooks/useWalletConnector";
import { getName } from "@web3/utils";
import Image from "next/image";
import { useDispatch } from "react-redux";

const WalletLoginButton = ({
    title,
    imgSrc,
    account,
    isActive,
    connector,
    ...restProps
}) => {
    const dispatch = useDispatch();
    const { signWallet, connectedWalletName } = useWalletConnector();
    const walletName = getName(connector);

    const onClick = async () => {
        try {
            // Connect the user to the wallet
            await connector.activate();

            const signed = await signWallet("Login into Rahat System");

            // Dispatch the function with the signed message
            dispatch(loginWithWallet(signed));
            setLoginMethod(connectedWalletName);
        } catch (error) {
            console.error("Error occurred:", error);
            // Handle the error, e.g., show an error message to the user
        }
    };

    const preTitle = isActive ? "Connected to " : "Login with ";
    const walletMessage = preTitle + walletName;
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
            <span>{walletMessage}</span>
        </div>
    );
};

export default WalletLoginButton;
