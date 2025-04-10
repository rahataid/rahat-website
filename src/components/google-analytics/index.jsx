import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleAnalyticsWrapper = () => {
    const googleId =
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "G-ZE2FSW0Y79";
    return (
        <>
            <GoogleAnalytics gaId={googleId} />
        </>
    );
};

export default GoogleAnalyticsWrapper;

