/**
 * Motion system
 * ─────────────
 *  • Lenis smooth scrolling, synced with GSAP ScrollTrigger
 *  • Liquid text loader hand-off (first visit per session) → hero intro timeline
 *  • [data-split]          masked line-by-line headline reveals (SplitText)
 *  • .reveal               fade-up on scroll (batched)
 *  • [data-stagger]        children cascade in
 *  • [data-clip]           image clip-path wipe + de-zoom
 *  • [data-parallax="n"]   scroll parallax (n = strength, -1..1)
 *  • [data-count]          number count-up
 *  • [data-magnetic], .btn magnetic hover
 *  • [data-tilt]           3D tilt on hover
 *  • custom cursor with contextual labels ([data-cursor="View"])
 *  • header hides on scroll down, returns on scroll up
 * Everything is skipped under prefers-reduced-motion.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
const EASE = 'expo.out';

function showAll() {
  root.classList.add('motion-off', 'motion-ready');
  window.dispatchEvent(new Event('intro:done'));
}

/* ───────────────────────── Smooth scroll ───────────────────────── */
function smoothScroll() {
  const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // in-page anchors go through Lenis
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      const t = id.length > 1 ? document.querySelector<HTMLElement>(id) : null;
      if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -90 }); }
    }),
  );
  (window as any).__lenis = lenis;
  return lenis;
}

/* ───────────────────────── Loader hand-off ─────────────────────────
   The liquid text loader (LiquidLoader.astro) fires `loader:reveal` as its word zooms
   through; the hero intro starts then. Scrolling is paused until it does. */
function waitForLoader(lenis: Lenis): Promise<void> {
  const w = window as unknown as { __loaderRevealed?: boolean };
  if (w.__loaderRevealed || !document.getElementById('loader')) return Promise.resolve();
  lenis.stop();
  return new Promise((resolve) => {
    const go = () => { lenis.start(); resolve(); };
    window.addEventListener('loader:reveal', go, { once: true });
    setTimeout(go, 12000); // never wait forever
  });
}

/* ───────────────────────── Split headlines ───────────────────────── */
function splitReveal(el: HTMLElement, delay = 0, onScroll = true) {
  const split = SplitText.create(el, { type: 'lines,words', mask: 'lines', linesClass: 'split-line' });
  gsap.set(el, { visibility: 'visible' });
  const tween = gsap.from(split.lines, {
    yPercent: 115, rotate: 2.5, duration: 1.3, ease: EASE, stagger: 0.09, delay,
    paused: onScroll,
  });
  if (onScroll) ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => tween.play() });
  return tween;
}

/* ───────────────────────── Hero intro ───────────────────────── */
function heroIntro() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;
  const q = gsap.utils.selector(hero);
  const tl = gsap.timeline({ defaults: { ease: EASE } });
  tl.from(q('[data-hero-portrait]'), { scale: 1.18, opacity: 0, filter: 'blur(12px)', duration: 2.2, ease: 'expo.out', clearProps: 'filter' }, 0)
    .from(q('[data-hero-word] span'), { yPercent: 100, opacity: 0, duration: 1.6, stagger: 0.06 }, 0.1)
    .from(q('[data-hero-eyebrow]'), { y: 20, opacity: 0, duration: 1 }, 0.25)
    .from(q('[data-hero-sub] > *'), { y: 24, opacity: 0, duration: 1.1, stagger: 0.08 }, 0.65)
    .from(q('[data-hero-card]'), { x: 60, opacity: 0, duration: 1.4 }, 0.5)
    .from(q('[data-hero-side] > *'), { y: 20, opacity: 0, duration: 1, stagger: 0.06 }, 0.75)
    .from(q('[data-hero-bar]'), { y: 40, opacity: 0, duration: 1.2 }, 0.9)
    .from('.hdr__inner', { y: -30, opacity: 0, duration: 1.2 }, 0.2);
  q('[data-hero-title]').forEach((t) => splitReveal(t as HTMLElement, 0.3, false));

  // scroll-out: portrait drifts, wordmark spreads
  gsap.to(q('[data-hero-portrait]'), { yPercent: 10, scale: 1.12, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to(q('[data-hero-word]'), { yPercent: 30, letterSpacing: '0.02em', opacity: 0.4, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
}

/* ───────────────────────── Scroll effects ───────────────────────── */
function scrollEffects() {
  document.querySelectorAll<HTMLElement>('[data-split]:not([data-hero-title])').forEach((el) => splitReveal(el));

  gsap.set('.reveal', { opacity: 0, y: 40 });
  ScrollTrigger.batch('.reveal', {
    start: 'top 90%', once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1.2, ease: EASE, stagger: 0.1, overwrite: true }),
  });

  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((parent) => {
    const kids = Array.from(parent.children).filter((c) => !(c as HTMLElement).hidden);
    gsap.set(kids, { opacity: 0, y: 50 });
    ScrollTrigger.create({
      trigger: parent, start: 'top 88%', once: true,
      onEnter: () => gsap.to(kids, { opacity: 1, y: 0, duration: 1.2, ease: EASE, stagger: 0.09 }),
    });
  });

  document.querySelectorAll<HTMLElement>('[data-clip]').forEach((el) => {
    const inner = el.querySelector('img, .ph');
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    tl.fromTo(el, { clipPath: 'inset(18% 10% 18% 10% round 32px)' }, { clipPath: 'inset(0% 0% 0% 0% round 32px)', duration: 1.6, ease: 'expo.inOut' });
    if (inner) tl.from(inner, { scale: 1.3, duration: 1.8, ease: 'expo.out' }, 0);
  });

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const s = parseFloat(el.dataset.parallax || '0.2');
    gsap.fromTo(el, { yPercent: -s * 50 }, { yPercent: s * 50, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const m = (el.textContent || '').match(/^(\D*)([\d,.]+)(.*)$/);
    if (!m) return;
    const target = parseFloat(m[2].replace(/,/g, ''));
    const o = { v: 0 };
    el.textContent = `${m[1]}0${m[3]}`;
    ScrollTrigger.create({
      trigger: el, start: 'top 92%', once: true,
      onEnter: () => gsap.to(o, { v: target, duration: 2.2, ease: 'power3.out', onUpdate: () => { el.textContent = `${m[1]}${Math.round(o.v)}${m[3]}`; } }),
    });
  });

  // horizontal drift for big outline words
  document.querySelectorAll<HTMLElement>('[data-drift]').forEach((el) => {
    const d = parseFloat(el.dataset.drift || '-15');
    gsap.fromTo(el, { xPercent: 0 }, { xPercent: d, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // timeline progress line
  document.querySelectorAll<HTMLElement>('[data-progress]').forEach((el) => {
    gsap.fromTo(el, { scaleY: 0 }, { scaleY: 1, ease: 'none', transformOrigin: 'top', scrollTrigger: { trigger: el.parentElement, start: 'top 70%', end: 'bottom 70%', scrub: true } });
  });
}

/* ───────────────────────── Header auto-hide ───────────────────────── */
function headerHide() {
  const hdr = document.querySelector<HTMLElement>('[data-hdr]');
  if (!hdr) return;
  ScrollTrigger.create({
    start: 'top -200',
    onUpdate: (self) => hdr.classList.toggle('is-hidden', self.direction === 1 && document.querySelector('[data-mnav]')?.hasAttribute('hidden') !== false),
    onLeaveBack: () => hdr.classList.remove('is-hidden'),
  });
}

/* ───────────────────────── Pointer: magnetic, tilt, cursor ───────────────────────── */
function pointer() {
  if (!finePointer) return;

  document.querySelectorAll<HTMLElement>('.btn, [data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.3);
      yTo((e.clientY - r.top - r.height / 2) * 0.4);
    });
    el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
  });

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    gsap.set(el, { transformPerspective: 900 });
    const rx = gsap.quickTo(el, 'rotationX', { duration: 0.8, ease: 'power3.out' });
    const ry = gsap.quickTo(el, 'rotationY', { duration: 0.8, ease: 'power3.out' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 8);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 8);
    });
    el.addEventListener('mouseleave', () => { rx(0); ry(0); });
  });

  // custom cursor
  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  ring.innerHTML = '<span></span>';
  document.body.append(dot, ring);
  root.classList.add('has-cursor');
  const label = ring.querySelector('span')!;
  const dx = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
  const dy = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power3' });
  addEventListener('mousemove', (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); root.classList.add('cursor-on'); });
  document.addEventListener('mouseleave', () => root.classList.remove('cursor-on'));
  document.addEventListener('mouseover', (e) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>('a, button, [data-cursor], input, textarea, select, label');
    const text = t?.closest<HTMLElement>('[data-cursor]')?.dataset.cursor || '';
    ring.classList.toggle('is-hover', !!t && !text);
    ring.classList.toggle('is-label', !!text);
    label.textContent = text;
    ring.classList.toggle('is-text', !!t && /INPUT|TEXTAREA/.test(t.tagName));
  });
  addEventListener('mousedown', () => ring.classList.add('is-down'));
  addEventListener('mouseup', () => ring.classList.remove('is-down'));
}

/* ───────────────────────── Boot ───────────────────────── */
async function boot() {
  if (reduced) return showAll();
  root.classList.add('motion-on', 'motion-ready');
  const lenis = smoothScroll();
  await document.fonts.ready;
  await waitForLoader(lenis);
  window.dispatchEvent(new Event('intro:done'));
  heroIntro();
  scrollEffects();
  headerHide();
  pointer();
  ScrollTrigger.refresh();
}

boot();
