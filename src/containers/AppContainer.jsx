import { useWalletConnector } from "@web3/hooks/useWalletConnector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const AppContainer = ({ children }) => {
    const dispatch = useDispatch();
    const { provider } = useWalletConnector();

    console.log("provider", provider);

    useEffect(() => {
        // Dispatch the login action
        // dispatch(
        //     login({
        //         user: {
        //             name: "Authenticated User",
        //             email: "testauth@.mailinator.com",
        //         },
        //         token: "jWtTokEn",
        //     })
        // );
    }, []);
    return <>{children}</>;
};

export default AppContainer;
