import { ethers } from "ethers";
import { useEffect, useState } from "react";

export function useBalances(provider, accounts) {
    const [balances, setBalances] = useState([]);

    useEffect(() => {
        if (provider && accounts?.length) {
            let stale = false;

            Promise.all(
                accounts.map((account) => provider.getBalance(account))
            ).then((balances) => {
                if (stale) return;
                const formattedBalances = balances.map((balance) =>
                    parseFloat(ethers.utils.formatEther(balance)).toFixed(4)
                );
                setBalances(formattedBalances);
            });

            return () => {
                stale = true;
                setBalances(undefined);
            };
        }
    }, [provider, accounts]);

    return balances;
}
