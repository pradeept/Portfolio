"use client";

import { useEffect } from "react";
import { readAnalyticsEvent } from "@/lib/analytics";
import { getPostHog } from "@/lib/posthog";

export function Analytics() {
  useEffect(() => {
    const client = getPostHog();

    function trackClick(event: MouseEvent) {
      if (event.type === "auxclick" ? event.button !== 1 : event.button !== 0) return;
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest("[data-analytics-event]");
      if (!element) return;
      const analytics = readAnalyticsEvent(element);
      if (!analytics) return;
      const pagePath = window.location.pathname;

      void client.then((posthog) => {
        posthog?.capture(
          analytics.event,
          { ...analytics.properties, page_path: pagePath },
          { transport: "sendBeacon" },
        );
      });
    }

    // Capture phase includes streamed cards, SVG children, and mobile-menu portals.
    document.addEventListener("click", trackClick, true);
    document.addEventListener("auxclick", trackClick, true);
    return () => {
      document.removeEventListener("click", trackClick, true);
      document.removeEventListener("auxclick", trackClick, true);
    };
  }, []);

  return null;
}
