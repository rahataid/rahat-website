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
