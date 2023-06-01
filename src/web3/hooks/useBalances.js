import { formatEther } from "ethers";
import { useEffect, useState } from "react";

export function useBalances(provider, accounts) {
    const [balances, setBalances] = useState([]);

    useEffect(() => {
        if (provider && accounts?.length) {
            let stale = false;

            Promise.all(accounts.map((account) => provider.getBalance(account)))
                .then((balances) => {
                    if (stale) return;
                    const formattedBalances = balances.map((balance) => {
                        try {
                            const etherValue = formatEther(balance);
                            return parseFloat(etherValue).toFixed(4);
                        } catch (error) {
                            console.error("Error formatting balance:", error);
                            return "N/A"; // Set a default value for invalid balances
                        }
                    });
                    setBalances(formattedBalances);
                })
                .catch((error) => {
                    console.error("Error retrieving balances:", error);
                });

            return () => {
                stale = true;
                setBalances(undefined);
            };
        }
    }, [provider, accounts]);

    return balances;
}
