import { login } from "@redux/slices/app";
import { getCurrentUser, getLoginMethod } from "@utils/sessionManager";
import { useWalletConnector } from "@web3/hooks/useWalletConnector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const loginMethod = getLoginMethod();
const user = getCurrentUser();

const AppContainer = ({ children }) => {
    const dispatch = useDispatch();

    const { isActive, connectedWalletName } = useWalletConnector();

    useEffect(() => {
        const initialSetup = () => {
            if (isActive && loginMethod === connectedWalletName) {
                dispatch(
                    login({
                        user,
                    })
                );
            }
        };
        initialSetup();
    }, []);
    return <>{children}</>;
};

export default AppContainer;
