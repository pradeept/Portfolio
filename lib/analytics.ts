export const analyticsEvents = [
  "navigation_clicked",
  "hero_cta_clicked",
  "project_clicked",
  "project_repository_clicked",
  "article_clicked",
  "writing_archive_clicked",
  "paper_reference_clicked",
  "contact_clicked",
  "profile_clicked",
  "mobile_menu_open_clicked",
  "mobile_menu_close_clicked",
  "hero_collage_shuffled",
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];

export type AnalyticsProperties = {
  location: string;
  destination?: string;
  section?: string;
  project_id?: string;
  project_title?: string;
  repository_name?: string;
  article_title?: string;
  paper_id?: string;
  paper_title?: string;
  link_label?: string;
  platform?: string;
};

/** Explicit attributes keep content components on the server. */
export function analyticsAttributes(
  event: AnalyticsEvent,
  properties: AnalyticsProperties,
) {
  return {
    "data-analytics-event": event,
    "data-analytics-properties": JSON.stringify(properties),
  };
}

export function readAnalyticsEvent(element: Element) {
  const event = element.getAttribute("data-analytics-event");
  if (!analyticsEvents.some((name) => name === event)) return null;

  try {
    const properties: unknown = JSON.parse(
      element.getAttribute("data-analytics-properties") || "{}",
    );
    if (
      !properties ||
      typeof properties !== "object" ||
      !("location" in properties) ||
      typeof properties.location !== "string"
    ) {
      return null;
    }

    return {
      event: event as AnalyticsEvent,
      properties: properties as AnalyticsProperties,
    };
  } catch {
    return null;
  }
}
