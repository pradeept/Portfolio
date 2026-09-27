import type { PostHog } from 'posthog-js';

let clientPromise: Promise<PostHog | null> | undefined;

/** Load once, after hydration; missing configuration leaves analytics disabled. */
export function getPostHog(): Promise<PostHog | null> {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!token || !host) return Promise.resolve(null);

  clientPromise ??= import('posthog-js')
    .then(({ default: posthog }) => {
      posthog.init(token, {
        api_host: host,
        defaults: '2026-01-30',
        capture_pageview: 'history_change',
        capture_pageleave: true,
        autocapture: false,
        capture_dead_clicks: false,
        rageclick: false,
        person_profiles: 'never',
        disable_session_recording: true,
        enable_recording_console_log: false,
        advanced_disable_feature_flags: true,
        disable_surveys: true,
        loaded: (client) => {
          client.register({ app: 'portfolio', environment: process.env.NODE_ENV });
        },
      });
      return posthog;
    })
    .catch(() => {
      console.warn('PostHog could not initialize; analytics is unavailable.');
      return null;
    });

  return clientPromise;
}
