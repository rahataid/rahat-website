import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";

export function getName(connector) {
    if (connector instanceof MetaMask) return "MetaMask";
    if (connector instanceof WalletConnectV2) return "WalletConnect V2";
    if (connector instanceof WalletConnect) return "WalletConnect";
    if (connector instanceof CoinbaseWallet) return "Coinbase Wallet";
    if (connector instanceof Network) return "Network";
    if (connector instanceof GnosisSafe) return "Gnosis Safe";
    return "Unknown";
}

export async function signMessage(provider, account, message) {
    const signed = provider.getSigner(account);
    const sign = await signed.signMessage(message);
    return sign;
}
