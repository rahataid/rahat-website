import ethers from "ethers";

export const extractAssetUploadData = (responseData) => {
    if (!responseData) {
        return null;
    }
    const matches = responseData.match(
        /"Location":"(.*?)","Bucket":"(.*?)","Key":"(.*?)","ETag":".*?","cid":"(.*?)"/
    );

    if (matches && matches.length === 5) {
        const location = matches[1];
        const bucket = matches[2];
        const key = matches[3];
        const cid = matches[4];

        return { location, bucket, key, cid };
    }

    return null;
};

export const truncateEthAddress = (address) => {
    if (!address) return "";
    const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;
    const match = address.match(truncateRegex);
    if (!match) return address;
    return `${match[1]}…${match[2]}`;
};

export function bufferToWalletAddress(buffer) {
    return `0x${Buffer.from(buffer).toString("hex")}`;
}
