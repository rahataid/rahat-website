export const IMPACTS_HOST = process.env.NEXT_PUBLIC_IMPACT_HOST || "";

export const COMMUNITY_HOST = process.env.NEXT_PUBLIC_COMMUNITY_HOST || "";

export const UPLOAD_ASSET_HOST =
    process.env.NEXT_PUBLIC_UPLOAD_ASSET_HOST || "";

const ASSET_VIEW_HOST = process.env.NEXT_PUBLIC_ASSET_VIEW_HOST || "";

const ASSET_VIEW_FOLDER = process.env.NEXT_PUBLIC_ASSET_VIEW_FOLDER || "";

export const ASSET_VIEW = ASSET_VIEW_HOST + "/" + ASSET_VIEW_FOLDER;
