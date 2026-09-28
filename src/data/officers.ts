/**
 * ─────────────────────────────────────────────────────────────
 *  EXECUTIVE BOARD
 *  One entry per officer. Photos live in /public/img/.
 *  To add a new officer: drop a photo in public/img (portrait,
 *  ~700×900 px works well), then add an object below.
 *  `instagram` is optional — omit it and no link is shown.
 * ─────────────────────────────────────────────────────────────
 */

export interface Officer {
  name: string;
  role: string;
  photo: string;
  instagram?: string;
}

/** Shown as the heading on the Board page, e.g. "2025–2026 Executive Board". */
export const boardYear = '[Year]';

export const officers: Officer[] = [
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-president.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-vp-1.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-vp-2.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-secretary.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-event-1.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-event-2.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-treasurer-1.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-treasurer-2.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-fundraiser.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-travel.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-publicity.jpg', instagram: '#' },
  { name: '[Officer Name]', role: '[Role]', photo: '/img/board-historian.jpg' },
];
