"use client";

import { config } from "src/wagmi.config";
import { WagmiProvider } from "wagmi";

export const Wagmi = ({ children }) => {
    return <WagmiProvider config={config}>{children}</WagmiProvider>;
};

