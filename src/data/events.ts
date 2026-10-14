/**
 * ─────────────────────────────────────────────────────────────
 *  EVENTS & PROGRAMS
 *  Rendered on the Events page (full list) and the Home page
 *  (only the ones with `featured: true`).
 *  `icon` is one of the keys in src/components/icons.ts.
 *  Each event links to /event.html?e=<slug>, rendered from
 *  src/content/events/<slug>.mdx — add a card here AND an .mdx file.
 *  Every [bracketed] string is a placeholder — replace it.
 * ─────────────────────────────────────────────────────────────
 */

import type { IconName } from '../components/icons';

export interface ClubEvent {
  /** Matches src/content/events/<slug>.mdx — the event's own page */
  slug: string;
  title: string;
  /** Short tag line under the title, e.g. "Mon · Wed · Fri" */
  meta: string;
  description: string;
  icon: IconName;
  photo: string;
  featured?: boolean;
}

/** Weekly schedule — shown at the top of the Events page. */
export const practiceSchedule = {
  days: '[Days]',
  time: '[Time]',
  location: '[Location]',
  note: '[Here is a medium text blurb a sentence or two of practical notes about the weekly schedule.]',
};

const blurb = '[Here is a medium text blurb one or two sentences describing this event.]';

export const events: ClubEvent[] = [
  { slug: 'weekly-practices', title: '[Event one]', meta: '[Short meta line]', description: blurb, icon: 'racket', photo: '/img/practice.jpg', featured: true },
  { slug: 'school-meets', title: '[Event two]', meta: '[Short meta line]', description: blurb, icon: 'trophy', photo: '/img/collegiate-ding.jpg', featured: true },
  { slug: 'bonding-events', title: '[Event three]', meta: '[Short meta line]', description: blurb, icon: 'heart', photo: '/img/boba-bonding.jpg', featured: true },
  { slug: 'irvine-trip', title: '[Event four]', meta: '[Short meta line]', description: blurb, icon: 'car', photo: '/img/kickback.jpg' },
  { slug: 'collegiate-nationals', title: '[Event five]', meta: '[Short meta line]', description: blurb, icon: 'flag', photo: '/img/boston-team.jpg' },
  { slug: 'year-end-banquet', title: '[Event six]', meta: '[Short meta line]', description: blurb, icon: 'sparkle', photo: '/img/banquet-team.jpg' },
  {
    slug: 'davis-open',
    title: 'Davis Open',
    meta: 'Largest tournament in Northern California',
    description:
      'Our student-run tournament with 400+ entries across 20 events, hosted at the University Credit Union Center with 13 courts, trophies and cash prizes.',
    icon: 'shuttle',
    photo: '/img/davis-open-team.jpg',
  },
];
