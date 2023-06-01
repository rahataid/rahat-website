import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import {
    connector as coinbaseWallet,
    hooks as coinbaseWalletHooks,
} from "./connectors/coinbaseWallet";
import {
    connector as metaMask,
    hooks as metaMaskHooks,
} from "./connectors/metaMask";
import { getName } from "./utils";

const connectors = [
    [metaMask, metaMaskHooks],
    // [walletConnect, walletConnectHooks],
    // [walletConnectV2, walletConnectV2Hooks],
    [coinbaseWallet, coinbaseWalletHooks],
    // [network, networkHooks],
];

function Child({ children }) {
    const { connector } = useWeb3React();
    console.log(`Priority Connector is: ${getName(connector)}`);
    return children;
}

export default function ProviderExample({ children }) {
    return (
        <Web3ReactProvider connectors={connectors}>
            <Child>{children}</Child>
        </Web3ReactProvider>
    );
}
