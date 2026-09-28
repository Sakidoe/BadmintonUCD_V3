/**
 * ABOUT PAGE — mission, goals, gallery (from src/data/about.ts).
 */
import { goals, gallery, mission } from '../data/about';
import { icon } from '../components/icons';
import { html, mount } from '../lib/html';

export function init(): void {
  const m = document.querySelector('[data-mission]');
  if (m) m.textContent = `“${mission}”`;

  mount(
    'goals',
    html`${goals.map(
      (g, i) => html`
        <article class="card goal">
          <span class="goal__num">0${i + 1}</span>
          <span class="card__icon">${icon(g.icon)}</span>
          <span class="card__meta">${g.kicker}</span>
          <h3>${g.title}</h3>
          <p>${g.body}</p>
        </article>`,
    )}`,
  );

  mount(
    'gallery',
    html`${gallery.map(
      (p) => html`
        <figure class="gallery__item">
          <img src="${p.src}" alt="${p.alt}" loading="lazy" />
          ${p.caption ? html`<figcaption class="gallery__caption">${p.caption}</figcaption>` : ''}
        </figure>`,
    )}`,
  );
}
