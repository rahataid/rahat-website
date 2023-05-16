import { useWeb3React } from "@web3-react/core";
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

    return {
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
    };
};
