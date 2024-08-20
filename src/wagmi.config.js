"use client";

import { getDefaultConfig } from "connectkit";
import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const config = createConfig(
    getDefaultConfig({
        chains: [
            mainnet,
            // sepolia,
        ],
        batch: {
            multicall: true,
        },
        connectors: [
        ],
        transports: {
            [mainnet.id]: http(),
            [sepolia.id]: http(),
        },
        walletConnectProjectId: "",
        // Required App Info
        appName: "Rahat",

        // Optional App Info
        appDescription:
            "An open-source blockchain-based financial access platform to support vulnerable communities.",
        appUrl: "https://family.co", // your app's url
        appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
    })
);

