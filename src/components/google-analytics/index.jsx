import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleAnalyticsWrapper = () => {
    const googleId =
        "G-ZE2FSW0Y79" || process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
    return (
        <>
            <GoogleAnalytics gaId={googleId} />
        </>
    );
};

export default GoogleAnalyticsWrapper;

