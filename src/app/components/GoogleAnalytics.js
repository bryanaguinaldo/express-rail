import React from "react";
import Script from "next/script";

function GoogleAnalytics() {
    return (
        <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-6EEG5Z9ZP2" />
            <Script id="google-analytics">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6EEG5Z9ZP2');
        `}
            </Script>
        </>
    );
}

export default GoogleAnalytics;
