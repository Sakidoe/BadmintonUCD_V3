/**
 * ─────────────────────────────────────────────────────────────
 *  ABOUT PAGE + HOME PAGE COPY
 *  Mission, goals, stats and the photo gallery.
 *  Every [bracketed] string is a placeholder — replace it.
 * ─────────────────────────────────────────────────────────────
 */

import type { IconName } from '../components/icons';

export const mission =
  '[To be the best badminton club ever]';

export const intro = {
  kicker: '[Kicker]',
  heading: '[Section heading]',
  body: '[block.]',
};

export interface Goal {
  title: string;
  kicker: string;
  body: string;
  icon: IconName;
}

export const goals: Goal[] = [
  {
    title: '[Goal one]',
    kicker: '[Kicker]',
    body: 'Medium Text Block',
    icon: 'trophy',
  },
  {
    title: '[Goal two]',
    kicker: '[Kicker]',
    body: 'Medium Text Block',
    icon: 'trophy',
  },
  {
    title: '[Goal three]',
    kicker: '[Kicker]',
    body: 'Medium Text Block',
    icon: 'trophy',
  },
];

/** Big numbers shown on the Home page */
export const stats = [
  { value: '[00]', label: '[Here is a short stat label]' },
  { value: '[00]', label: '[Here is a short stat label]' },
  { value: '[00]', label: '[Here is a short stat label]' },
  { value: '[00]', label: '[Here is a short stat label]' },
];

export interface Photo {
  src: string;
  alt: string;
  /** Optional caption shown on hover */
  caption?: string;
}

/** Photo gallery on the About page (and a subset on Home). Order = display order. */
export const gallery: Photo[] = [
  { src: '/img/team-2025.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/boston-team.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/formal-2025.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/pbc-winner.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/grad-throw.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/boba-bonding.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/boston-heart.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/kickback.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/ray.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/banquet-team.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/boston-4s.jpg', alt: '[Photo description]', caption: '[Caption]' },
  { src: '/img/formal-funny.jpg', alt: '[Photo description]', caption: '[Caption]' },
];
