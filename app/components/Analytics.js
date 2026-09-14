"use client";

import Script from "next/script";

/**
 * Placeholder analytics snippet, loaded with next/script.
 *
 * strategy="afterInteractive" means Next injects it once the page has become
 * interactive: late enough not to block first paint or hydration, early enough
 * to record the page view. ("beforeInteractive" would block rendering, which no
 * analytics tag deserves; "lazyOnload" would wait for every other resource and
 * risk missing short visits.)
 */
export default function Analytics() {
  return (
    <Script id="placeholder-analytics" strategy="afterInteractive">
      {`
        window.courseAnalytics = window.courseAnalytics || { events: [] };
        window.courseAnalytics.track = function (name, data) {
          window.courseAnalytics.events.push({
            name: name,
            data: data || {},
            at: new Date().toISOString(),
          });
          console.log("[analytics]", name, data || {});
        };
        window.courseAnalytics.track("page_view", { path: location.pathname });
      `}
    </Script>
  );
}
