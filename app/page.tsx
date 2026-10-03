'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './page.css';

gsap.registerPlugin(ScrollTrigger);

const events = [
  { label: 'HALDI', date: 'OCTOBER 3', place: 'ARO VILLAS · MADURAI', note: 'A joyful beginning filled with colour, laughter and family.' },
  { label: 'ENGAGEMENT', date: 'NOVEMBER 19', place: 'PSVR MAHAL · MADURAI', note: 'Two families, one promise, and a beautiful new chapter.' },
  { label: 'WEDDING', date: 'NOVEMBER 20', place: 'MEENAKSHI AMMAN TEMPLE · MADURAI', note: 'With blessings, tradition and the people we love.' },
  { label: 'RECEPTION', date: 'NOVEMBER 22', place: 'COCONEST · POLLACHI', note: 'Come celebrate, eat, dance and make memories with us.' },
];

export default function Home() {
  const [entered, setEntered] = useState(false);
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ autoRaf: false, lerp: 0.08 });
    let raf = 0;
    const loop = (time: number) => { lenis.raf(time); ScrollTrigger.update(); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    const ctx = gsap.context(() => {
      gsap.to('.hero-gopuram', { yPercent: -18, scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=1300', scrub: true, pin: true } });
      gsap.to('.hero-clouds', { yPercent: -35, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=1300', scrub: true, pin: true } });
      gsap.to('.hero-copy', { y: -180, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=650', scrub: true } });
      gsap.utils.toArray<HTMLElement>('.event-card').forEach((card) => {
        gsap.fromTo(card, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, scrollTrigger: { trigger: card, start: 'top 82%', end: 'top 55%', scrub: true } });
      });
    });

    return () => { cancelAnimationFrame(raf); lenis.destroy(); ctx.revert(); };
  }, []);

  const enter = async () => {
    setEntered(true);
    try { await musicRef.current?.play(); } catch {}
  };

  return (
    <main>
      <audio ref={musicRef} loop src="/music/wedding.mp3" />
      {!entered && (
        <div className="gate">
          <div className="gate-ornament">❈</div>
          <p className="eyebrow">A WEDDING INVITATION</p>
          <h1>Shakthi <span>&</span> Nivethaa</h1>
          <p className="gate-sub">With the blessings of our families</p>
          <button onClick={enter}>ENTER THE INVITATION</button>
          <small>Tap to begin · music included</small>
        </div>
      )}

      <section className="hero">
        <div className="hero-clouds" />
        <div className="hero-gopuram" aria-hidden="true">
          <div className="gopuram-top">◈</div>
          <div className="gopuram-tier tier-1" /><div className="gopuram-tier tier-2" /><div className="gopuram-tier tier-3" /><div className="gopuram-tier tier-4" /><div className="gopuram-tier tier-5" />
          <div className="gopuram-base" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">MADURAI · TAMIL NADU</p>
          <h2>Our Story Begins</h2>
          <p>Scroll to discover our wedding celebration.</p>
          <div className="scroll-mark">↓</div>
        </div>
      </section>

      <section className="intro section-pad">
        <p className="eyebrow">THE COUPLE</p>
        <h2>Shakthi <span>&</span> Nivethaa</h2>
        <p className="body-copy">Two hearts, two families, and a journey that brought us here. We would be honoured to have you with us as we celebrate this new chapter.</p>
      </section>

      <section className="events section-pad">
        <p className="eyebrow">THE CELEBRATIONS</p>
        <h2>Four moments.<br />One beautiful beginning.</h2>
        <div className="event-list">
          {events.map((event, i) => (
            <article className="event-card" key={event.label}>
              <span className="event-no">0{i + 1}</span>
              <p className="eyebrow">{event.label}</p>
              <h3>{event.date}</h3>
              <p className="place">{event.place}</p>
              <p className="note">{event.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing section-pad">
        <p className="eyebrow">WITH LOVE</p>
        <h2>We can't wait<br />to celebrate with you.</h2>
        <div className="actions"><button>OPEN MAP</button><button>RSVP</button></div>
        <p className="footer">Shakthi & Nivethaa · 2026</p>
      </section>
    </main>
  );
}
