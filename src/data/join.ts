/**
 * ─────────────────────────────────────────────────────────────
 *  JOINING THE CLUB
 *  Steps, deadlines and links for the Join page.
 *  Every [bracketed] string is a placeholder — replace it.
 * ─────────────────────────────────────────────────────────────
 */

export interface JoinLink {
  label: string;
  href: string;
  /** Opens in a new tab (default true). Set false for same-site downloads. */
  external?: boolean;
}

export interface JoinStep {
  title: string;
  subtitle: string;
  deadline?: string;
  body: string;
  links?: JoinLink[];
}

export const schoolYear = '[Year]';

export const dues = {
  yearly: '[$000]',
  quarterly: '[$00]',
  payTo: '[Here is a short text blurb]',
  note: '[Short note]',
};

const body =
  '[block]';

export const joinSteps: JoinStep[] = [
  {
    title: '[Step title]',
    subtitle: '[Short subtitle]',
    deadline: '[Deadline]',
    body,
    links: [{ label: '[Download link]', href: '/static/UCD_Physical.pdf', external: false }],
  },
  { title: '[Step title]', subtitle: '[Short subtitle]', deadline: '[Deadline]', body },
  {
    title: '[Step title]',
    subtitle: '[Short subtitle]',
    body,
    links: [
      { label: '[External link]', href: '#' },
      { label: '[External link]', href: '#' },
    ],
  },
  { title: '[Step title]', subtitle: '[Short subtitle]', body, links: [{ label: '[External link]', href: '#' }] },
  { title: '[Step title]', subtitle: '[Short subtitle]', deadline: '[Deadline]', body, links: [{ label: '[External link]', href: '#' }] },
  { title: '[Step title]', subtitle: '[Short subtitle]', body },
];
