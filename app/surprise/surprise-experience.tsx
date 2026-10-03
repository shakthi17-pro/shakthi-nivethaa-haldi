'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './surprise.module.css';
import { surpriseContent } from './content';
import MoodExperience from './mood-experience';
import {
  BootScene,
  CelebrationScene,
  DateScene,
  FavouriteScene,
  HaldiScene,
  LoveQuestionScene,
  MemoryRevealScene,
  MovieScene,
  ProcessingScene,
  ReadyScene,
  YearsScene,
} from './scenes';

type Stage =
  | 'boot' | 'ready' | 'loveQuestion' | 'loveReveal'
  | 'movieQuestion' | 'movieReveal' | 'dateQuestion' | 'dateReveal'
  | 'favourite' | 'processing' | 'match' | 'years' | 'haldi' | 'celebration' | 'comfort';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';

export default function SurpriseExperience() {
  const [stage, setStage] = useState<Stage>('boot');
  const [progress, setProgress] = useState(0);
  const [checks, setChecks] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [loveChoice, setLoveChoice] = useState<string | null>(null);
  const [dateComplete, setDateComplete] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [commandCount, setCommandCount] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(true);
  const [favouriteDraft, setFavouriteDraft] = useState('');
  const [favouriteSaveError, setFavouriteSaveError] = useState('');
  const sceneRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const secretTaps = useRef(0);
  const secretTimer = useRef<number | null>(null);

  useEffect(() => {
    console.info(
      '%c// Hey Nivethaa 👀\n// If you\'re reading this,\n// yes, I actually coded this for you.\n//\n// - Shakthi ❤️',
      'color: #d6b873; font: 14px Georgia, serif; line-height: 1.6;',
    );

    const reducedMotion = window.matchMedia(reducedMotionQuery).matches;
    const timers: number[] = [];
    const later = (callback: () => void, delay: number) => {
      timers.push(window.setTimeout(callback, reducedMotion ? 0 : delay));
    };
    [25, 50, 75, 100].forEach((value, index) => {
      later(() => setProgress(value), 500 + index * 450);
      later(() => setChecks(index + 1), 850 + index * 450);
    });
    later(() => setStage('ready'), 3100);
    return () => timers.forEach(window.clearTimeout);
  }, []);

  useEffect(() => {
    if (stage === 'boot' || window.matchMedia(reducedMotionQuery).matches) return;
    const panel = sceneRef.current?.querySelector<HTMLElement>(`.${styles.panel}`);
    if (!panel) return;
    const tween = gsap.fromTo(
      panel,
      { opacity: 0, y: 22, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
    );
    return () => { tween.kill(); };
  }, [stage]);

  useEffect(() => {
    if (stage !== 'celebration') return;
    const timer = window.setInterval(() => {
      setCommandCount((count) => {
        if (count >= 3) {
          window.clearInterval(timer);
          return 3;
        }
        return count + 1;
      });
    }, window.matchMedia(reducedMotionQuery).matches ? 0 : 650);
    return () => window.clearInterval(timer);
  }, [stage]);

  useEffect(() => () => {
    if (secretTimer.current) window.clearTimeout(secretTimer.current);
  }, []);

  const moveAfter = (next: Stage, delay = 650) => {
    window.setTimeout(() => setStage(next), window.matchMedia(reducedMotionQuery).matches ? 0 : delay);
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setMusicPlaying(false);
      return;
    }
    try {
      await audio.play();
      setMusicPlaying(true);
    } catch {
      setMusicPlaying(false);
    }
  };

  const beginExperience = () => {
    setStage('loveQuestion');
    void toggleMusic();
  };

  const submitFavouriteMemory = async (memory: string) => {
    const startedAt = Date.now();
    setFavouriteDraft(memory);
    setFavouriteSaveError('');
    setStage('processing');

    try {
      const response = await fetch('/api/favourite-memory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memory }),
      });
      if (!response.ok) throw new Error('The memory could not be saved.');

      const remainingAnimation = Math.max(0, 1500 - (Date.now() - startedAt));
      window.setTimeout(() => setStage('match'), remainingAnimation);
    } catch {
      setFavouriteSaveError('I couldn’t save that memory just yet. Please try again in a moment.');
      setStage('favourite');
    }
  };

  const chooseMovie = (answer: string) => {
    const configuredAnswerExists = (surpriseContent.movieMemory.choices as readonly string[]).includes(surpriseContent.movieMemory.answer);
    if (configuredAnswerExists && answer !== surpriseContent.movieMemory.answer) {
      setFeedback('Not that one, love. Give it another little try.');
      return;
    }
    setFeedback('');
    moveAfter('movieReveal');
  };

  const chooseDate = (answer: string) => {
    const configuredAnswerExists = (surpriseContent.dateMemory.choices as readonly string[]).includes(surpriseContent.dateMemory.answer);
    if (configuredAnswerExists && answer !== surpriseContent.dateMemory.answer) {
      setFeedback('Almost, my love. Follow the memory once more.');
      return;
    }
    setFeedback('');
    setDateComplete(true);
  };

  const unlockSecret = () => {
    secretTaps.current += 1;
    if (secretTimer.current) window.clearTimeout(secretTimer.current);
    if (secretTaps.current >= 5) {
      secretTaps.current = 0;
      setSecretOpen(true);
      return;
    }
    secretTimer.current = window.setTimeout(() => { secretTaps.current = 0; }, 2400);
  };

  const renderStage = () => {
    switch (stage) {
      case 'boot': return <BootScene progress={progress} checks={checks} />;
      case 'ready': return <ReadyScene onBegin={beginExperience} />;
      case 'loveQuestion': return <LoveQuestionScene onChoose={(answer) => { setLoveChoice(answer); moveAfter('loveReveal'); }} selected={loveChoice} feedback={feedback} />;
      case 'loveReveal': return <MemoryRevealScene index="01" headline={surpriseContent.firstMemory.revealHeadline} message={surpriseContent.firstMemory.message} onNext={() => setStage('movieQuestion')} />;
      case 'movieQuestion': return <MovieScene onChoose={chooseMovie} feedback={feedback} />;
      case 'movieReveal': return <MemoryRevealScene index="02" headline={surpriseContent.movieMemory.revealHeadline} message={surpriseContent.movieMemory.message} onNext={() => setStage('dateQuestion')} />;
      case 'dateQuestion': return <DateScene complete={dateComplete} onChoose={chooseDate} feedback={feedback} />;
      case 'dateReveal': return <MemoryRevealScene index="03" headline={surpriseContent.dateMemory.revealHeadline} message={surpriseContent.dateMemory.message} onNext={() => setStage('favourite')} />;
      case 'favourite': return <FavouriteScene value={favouriteDraft} error={favouriteSaveError} onChange={setFavouriteDraft} onSubmit={submitFavouriteMemory} />;
      case 'processing': return <ProcessingScene match={false} />;
      case 'match': return <ProcessingScene match onNext={() => setStage('years')} />;
      case 'years': return <YearsScene onRun={() => setStage('haldi')} />;
      case 'haldi': return <HaldiScene onGo={() => setStage('celebration')} />;
      case 'celebration': return <CelebrationScene commandsVisible={commandCount} onComfort={() => setStage('comfort')} />;
      case 'comfort': return <MoodExperience onReturn={() => setStage('celebration')} />;
    }
  };

  useEffect(() => {
    if (dateComplete && stage === 'dateQuestion') moveAfter('dateReveal', 2000);
    // The completed route draws first, then the memory is revealed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateComplete, stage]);

  return (
    <main className={styles.experience} ref={sceneRef}>
      <audio
        ref={audioRef}
        src="/audio/moonu_3_bike_ride.mp3"
        loop
        preload="none"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
        onError={() => { setMusicAvailable(false); setMusicPlaying(false); }}
      />
      <div className={styles.ambient} aria-hidden="true">
        <span className={styles.orb} /><span className={styles.petalOne}>✿</span><span className={styles.petalTwo}>✿</span><span className={styles.petalThree}>✿</span>
      </div>
      <header className={styles.topline}>
        <span>{surpriseContent.experienceName}</span>
        <div className={styles.headerActions}>
          {stage !== 'boot' && stage !== 'ready' && musicAvailable && (
            <button className={styles.musicControl} type="button" onClick={() => void toggleMusic()} aria-label={musicPlaying ? 'Pause background music' : 'Play background music'} aria-pressed={musicPlaying}>
              <span aria-hidden="true">{musicPlaying ? 'Ⅱ' : '▶'}</span>{musicPlaying ? ' MUSIC ON' : ' MUSIC OFF'}
            </button>
          )}
          <span className={styles.online}><i /> PRIVATE SESSION</span>
        </div>
      </header>
      {renderStage()}
      <footer className={styles.footer}>
        <span>BUILT WITH LOVE</span>
        <button className={styles.secretTrigger} type="button" aria-label="A little hidden surprise" onClick={unlockSecret}>✧</button>
        <span>{surpriseContent.years} / ∞</span>
      </footer>
      {secretOpen && (
        <div className={styles.secretOverlay} role="presentation" onClick={() => setSecretOpen(false)}>
          <section className={styles.secretCard} role="dialog" aria-modal="true" aria-labelledby="secret-title" onClick={(event) => event.stopPropagation()}>
            <button className={styles.secretClose} type="button" aria-label="Close secret message" onClick={() => setSecretOpen(false)}>×</button>
            <p className={styles.kicker}>Only for you</p>
            <h2 id="secret-title">❤️ SECRET MODE UNLOCKED</h2>
            <p>{surpriseContent.secretMessage}</p>
          </section>
        </div>
      )}
    </main>
  );
}
