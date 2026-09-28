/**
 * ─────────────────────────────────────────────────────────────
 *  SITE-WIDE SETTINGS
 *  Club name, contact email, social links, navigation.
 *  Edit here and every page (nav + footer) updates.
 * ─────────────────────────────────────────────────────────────
 */

export interface NavLink {
  label: string;
  href: string;
}

export const site = {
  name: '[Club Name]',
  shortName: '[CLUB]',
  /** Used in <title> tags: "Page — [Club Name]" */
  titleSuffix: '[Club Name]',
  email: 'hello@example.com',
  /** Where we practice — shown in the footer and on the Events page. */
  practiceLocation: '[Location]',

  socials: {
    instagram: '#',
    discord: '#',
    facebook: '#',
  },

  /** Left and right halves of the nav bar. The Fall Open button sits in the middle. */
  navLeft: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about.html' },
    { label: 'Events', href: '/events.html' },
  ] satisfies NavLink[],
  navRight: [
    { label: 'Board', href: '/board.html' },
    { label: 'Join', href: '/join.html' },
  ] satisfies NavLink[],

  /** The highlighted centre button. `shortLabel` is used on phones. */
  navCta: { label: 'Davis Fall Open', shortLabel: 'Fall Open', href: '/fall-open.html' },

  footer: {
    credit: 'Developed by Richard Huang',
    creditHref: 'https://www.linkedin.com/in/ridhuang/',
    note: '[Here is a short footer note]',
  },
} as const;
