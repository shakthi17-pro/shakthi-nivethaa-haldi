'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import styles from './surprise.module.css';
import { moods, type MoodConfig } from './moods';

export default function MoodExperience({ onReturn }: { onReturn: () => void }) {
  const [mood, setMood] = useState<MoodConfig | null>(null);
  const [done, setDone] = useState(false);
  const [path, setPath] = useState('');
  const [choiceResponse, setChoiceResponse] = useState('');
  const [breathing, setBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState(0);
  const choose = (next: MoodConfig | null) => { setMood(next); setDone(false); setPath(''); setChoiceResponse(''); setBreathing(false); setBreathPhase(0); };
  const interaction = mood?.interaction;

  useEffect(() => {
    if (!breathing) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setDone(true); setBreathing(false); return; }
    const phases = [window.setTimeout(() => setBreathPhase(1), 2000), window.setTimeout(() => setBreathPhase(2), 4000), window.setTimeout(() => setBreathPhase(3), 6000)];
    const finish = window.setTimeout(() => { setDone(true); setBreathing(false); }, 8000);
    return () => { phases.forEach(window.clearTimeout); window.clearTimeout(finish); };
  }, [breathing]);

  return (
    <section className={`${styles.panel} ${styles.moodExperience} ${mood ? styles.moodRoom : ''} ${done ? styles.moodWarm : ''}`} aria-live="polite" key={mood?.id ?? 'selection'}>
      {!mood ? <>
        <p className={styles.moodKicker}>A little room, just for you</p>
        <h1 className={styles.moodTitle}>Tell me what your heart feels like right now.</h1>
        <p className={styles.moodIntro}>You don’t have to explain everything.<br />Just choose a little room for yourself.</p>
        <div className={styles.moodDoors}>
          {moods.map((item) => <button type="button" className={styles.moodDoor} key={item.id} onClick={() => choose(item)}>{item.label}<span aria-hidden="true">↗</span></button>)}
        </div>
      </> : <>
        <button type="button" className={styles.moodBack} onClick={() => choose(null)}>← BACK TO MOOD ROOMS</button>
        <div className={`${styles.moodArtwork} ${styles[`art_${interaction}`]} ${done ? styles.artDone : ''}`} aria-hidden="true">
          {interaction === 'stone' && <span className={styles.stone}>◆</span>}
          {interaction === 'heart' && <span className={styles.roomHeart}>♥</span>}
          {interaction === 'memory' && <span className={styles.paper}>ONE MEMORY</span>}
          {interaction === 'breath' && <><span className={`${styles.breathCircle} ${breathing ? styles.breathActive : ''}`} /><span className={styles.breathWord}>{done ? 'REST' : ['INHALE', 'HOLD', 'EXHALE', 'REST'][breathPhase]}</span></>}
          {interaction === 'paths' && !done && <div className={styles.paths}>{['WAIT', 'EXPLORE', 'BREATHE'].map((v) => <button type="button" key={v} className={path === v ? styles.pathSelected : ''} onClick={() => { setPath(v); setDone(true); }}>{v}</button>)}</div>}
          {interaction === 'letgo' && <div className={`${styles.worryWords} ${done ? styles.wordsGone : ''}`}>{['OVERTHINKING', 'FEAR', 'DOUBT', 'GUILT', 'WORRY', 'WHAT IF'].map((v) => <span key={v}>{v}</span>)}</div>}
          {done && ['celebrate', 'stone', 'memory', 'letgo'].includes(interaction ?? '') && ['✿', '♡', '✧', '·', '✿', '·'].map((v, i) => <i className={styles.particle} style={{ '--i': i } as CSSProperties} key={i}>{v}</i>)}
        </div>
        <p className={styles.moodKicker}>A note from Shakthi</p>
        <h1 className={styles.moodTitle}>{mood.title}</h1>
        <p className={styles.moodMessage}>{mood.message}</p>
        {interaction === 'choices' && <div className={styles.confidenceChoices}>{[
          ['JHUMKA?', 'Order pannalam. ❤️'], ['SAREE?', 'Unakku pudicha one choose pannalam.'], ['CONFIDENCE?', 'Adha konjam konjam ah build pannalam. Naan remind pannitu iruppen.'],
        ].map(([label, response]) => <button type="button" key={label} onClick={() => setChoiceResponse(response)}>{label}</button>)}</div>}
        {choiceResponse && <p className={styles.choiceResponse} aria-live="polite">{choiceResponse}</p>}
        {interaction !== 'paths' && interaction !== 'choices' && !done && <button className={styles.moodAction} type="button" onClick={() => interaction === 'breath' ? setBreathing(true) : setDone(true)}>{breathing ? 'BREATHE WITH ME' : mood.button ?? 'BEGIN A QUIET MOMENT'}<span aria-hidden="true">↗</span></button>}
        {done && <p className={styles.moodFinal} aria-live="polite">{mood.finalMessage}</p>}
      </>}
      <nav className={styles.moodNavigation} aria-label="Mood room navigation">
        {mood && <button type="button" onClick={() => choose(null)}>BACK TO MOOD ROOMS</button>}
        <button type="button" onClick={onReturn}>BACK TO OUR MOMENT</button>
      </nav>
    </section>
  );
}
