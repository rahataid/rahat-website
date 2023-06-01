const path = require("path");

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "./src/assets/scss")],
    },
    image: {
        domains: ["www.ifrc.org"],
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.ignoreWarnings = [
            ...(config.ignoreWarnings || []),
            {
                module: /magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth/,
            },
        ];
        return config;
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};
