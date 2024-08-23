import React from "react";
import Script from "next/script";

const GoogleAnalytics = () => {
    const googleId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${googleId}`}
            />

            <Script id="" strategy="lazyOnload">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleId}', {
              page_path: window.location.pathname,
              });
          `}
            </Script>
        </>
    );
};

export default GoogleAnalytics;

