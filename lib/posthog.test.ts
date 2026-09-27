import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { init, register, client } = vi.hoisted(() => {
  const register = vi.fn();
  const init = vi.fn();
  return { init, register, client: { init, register } };
});

vi.mock('posthog-js', () => ({ default: client }));

beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  vi.stubEnv('NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN', 'ph_test_portfolio');
  vi.stubEnv('NEXT_PUBLIC_POSTHOG_HOST', 'https://analytics.example.test');
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe('PostHog initialization', () => {
  it.each(['NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN', 'NEXT_PUBLIC_POSTHOG_HOST'])(
    'does not initialize when %s is missing',
    async (variable) => {
      vi.stubEnv(variable, '');
      const { getPostHog } = await import('./posthog');
      expect(await getPostHog()).toBeNull();
      expect(init).not.toHaveBeenCalled();
    },
  );

  it('initializes once for simultaneous callers and keeps recording/autocapture disabled', async () => {
    const { getPostHog } = await import('./posthog');
    const first = getPostHog();
    expect(getPostHog()).toBe(first);
    expect(await first).toBe(client);
    expect(init).toHaveBeenCalledTimes(1);
    expect(init).toHaveBeenCalledWith(
      'ph_test_portfolio',
      expect.objectContaining({
        api_host: 'https://analytics.example.test',
        capture_pageview: 'history_change',
        capture_pageleave: true,
        autocapture: false,
        disable_session_recording: true,
        person_profiles: 'never',
      }),
    );
    init.mock.calls[0][1].loaded(client);
    expect(register).toHaveBeenCalledWith({ app: 'portfolio', environment: 'test' });
  });

  it('contains initialization failures without breaking the site or retrying on every click', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    init.mockImplementationOnce(() => {
      throw new Error('SDK unavailable');
    });
    const { getPostHog } = await import('./posthog');
    expect(await getPostHog()).toBeNull();
    expect(await getPostHog()).toBeNull();
    expect(init).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledTimes(1);
  });
});
