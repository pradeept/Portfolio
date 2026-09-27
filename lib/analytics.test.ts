import { describe, expect, it } from 'vitest';
import { analyticsAttributes, readAnalyticsEvent } from './analytics';

function element(attributes: Record<string, string>): Element {
  return { getAttribute: (name: string) => attributes[name] ?? null } as Element;
}

describe('analytics event metadata', () => {
  it('preserves titles containing quotes and markup without reading arbitrary DOM text', () => {
    const properties = {
      location: 'writing_featured',
      article_title: 'A "paper" <explained>',
      destination: 'https://example.com/paper',
    };
    expect(readAnalyticsEvent(element(analyticsAttributes('article_clicked', properties)))).toEqual(
      { event: 'article_clicked', properties },
    );
  });

  it.each([
    { 'data-analytics-event': 'unknown_event', 'data-analytics-properties': '{"location":"hero"}' },
    { 'data-analytics-event': 'article_clicked', 'data-analytics-properties': 'broken JSON' },
    { 'data-analytics-event': 'article_clicked', 'data-analytics-properties': 'null' },
    { 'data-analytics-event': 'article_clicked', 'data-analytics-properties': '{"location":42}' },
    { 'data-analytics-event': 'article_clicked', 'data-analytics-properties': '{}' },
  ])('ignores invalid metadata without throwing (%j)', (attributes) => {
    expect(readAnalyticsEvent(element(attributes))).toBeNull();
  });
});
