/**
 * ─────────────────────────────────────────────────────────────
 *  DAVIS FALL OPEN — PROMO CONTENT
 *  Everything on /fall-open.html and the promo card on the
 *  Home page comes from this file.
 *
 *  ▶ Fill in the PLACEHOLDER values below when details are set.
 *    Set `registrationOpen: true` once sign-ups go live.
 * ─────────────────────────────────────────────────────────────
 */

export interface FallOpenEventCategory {
  name: string;
  /** e.g. "Men's · Women's · Mixed" or "A / B / C / D" */
  detail: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const fallOpen = {
  /** Short name used in the nav button & cards */
  name: 'Davis Fall Open',
  /** Big headline on the promo page */
  headline: 'Davis Fall Open',
  year: '2026',
  tagline: 'Northern California’s biggest collegiate badminton weekend is back.',

  // ── PLACEHOLDERS ──────────────────────────────────────────
  date: 'Date TBA',                       // e.g. 'November 14–15, 2026'
  venue: 'University Credit Union Center', // venue name
  venueAddress: 'UC Davis, Davis, CA',     // e.g. '1 Shields Ave, Davis, CA 95616'
  registrationOpen: false,                 // flip to true when live
  registrationUrl: '#',                    // e.g. 'https://forms.gle/...'
  registrationDeadline: 'TBA',             // e.g. 'November 1, 2026'
  entryFee: 'TBA',                         // e.g. '$25 per event'
  // ─────────────────────────────────────────────────────────

  /** Quick facts row under the headline */
  stats: [
    { value: '400+', label: 'Entries' },
    { value: '20', label: 'Events' },
    { value: '13', label: 'Courts' },
    { value: '$', label: 'Cash prizes' },
  ],

  /** Event categories — update as the bracket list is finalised */
  categories: [
    { name: 'Singles', detail: 'Men’s · Women’s — A / B / C / D' },
    { name: 'Doubles', detail: 'Men’s · Women’s — A / B / C / D' },
    { name: 'Mixed Doubles', detail: 'A / B / C / D' },
  ] satisfies FallOpenEventCategory[],

  /** Placeholder schedule — replace with real times */
  schedule: [
    { time: 'Day 1 · Morning', title: 'Check-in & singles preliminaries' },
    { time: 'Day 1 · Afternoon', title: 'Doubles preliminaries' },
    { time: 'Day 2 · Morning', title: 'Mixed doubles & quarterfinals' },
    { time: 'Day 2 · Afternoon', title: 'Semifinals, finals & awards' },
  ] satisfies ScheduleItem[],

  faq: [
    { q: 'Who can play?', a: 'The Davis Open is open to all players, college students and the wider community alike. Events are split by skill level so everyone gets competitive matches.' },
    { q: 'Do I need a partner?', a: 'For doubles and mixed, yes. Post in our Discord if you are looking for one — plenty of players are in the same boat.' },
    { q: 'Are birds provided?', a: 'Feather shuttles are provided for all matches.' },
    { q: 'How do I get updates?', a: 'Follow @badminton_ucd on Instagram and join the Discord, every announcement goes there first.' },
  ] satisfies FaqItem[],

  /** Photos from previous Davis Opens, shown in the gallery strip */
  gallery: [
    { src: '/img/davis-open-1.jpg', alt: 'Player lunging for a shot at the Davis Open' },
    { src: '/img/davis-open-bianca-justin.jpg', alt: 'Mixed doubles rally at the Davis Open' },
    { src: '/img/davis-open-tiff.jpg', alt: 'Women’s singles at the Davis Open' },
    { src: '/img/davis-open-steffi-josh.jpg', alt: 'Doubles jump smash at the Davis Open' },
    { src: '/img/davis-open-charlie.jpg', alt: 'Trophy winners at the Davis Open' },
    { src: '/img/davis-open-xin.jpg', alt: 'Singles rally at the Davis Open' },
    { src: '/img/uc-center.jpg', alt: 'The University Credit Union Center set up for badminton' },
    { src: '/img/davis-open-team.jpg', alt: 'Volunteers and organisers at the Davis Open' },
  ],

  /** Sponsor logos — add { name, logo, href } entries when you have them */
  sponsors: [] as { name: string; logo: string; href?: string }[],
};
