import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleAnalyticsWrapper = () => {
    const googleId =
        "G-S2DNTDJS97" || process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
    return (
        <>
            <GoogleAnalytics gaId={googleId} />
        </>
    );
};

export default GoogleAnalyticsWrapper;

