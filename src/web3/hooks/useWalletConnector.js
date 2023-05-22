import { useWeb3React } from "@web3-react/core";
import { getName, signMessage } from "@web3/utils";
import { useState } from "react";
import { useBalances } from "./useBalances";

export const useWalletConnector = () => {
    const {
        connector,
        ENSName,
        ENSNames,
        account,
        accounts,
        chainId,
        hooks,
        isActivating,
        isActive,
        provider,
    } = useWeb3React();

    const [error, setError] = useState(undefined);
    const balances = useBalances(provider, accounts);

    const signWallet = async (message) => {
        try {
            // Sign the message
            const signedMessage = await signMessage(provider, account, message);
            return signedMessage;
        } catch (error) {
            console.log("error", error);
            setError(error); // Set the error state if the promise is rejected
            if (connector?.deactivate) {
                void connector.deactivate();
            } else {
                void connector.resetState();
            }
        }
    };

    return {
        signWallet,
        connector,
        balances,
        ENSName,
        ENSNames,
        account,
        accounts,
        chainId,
        hooks,
        isActivating,
        isActive,
        provider,
        error,
        connectedWalletName: getName(connector),
    };
};
