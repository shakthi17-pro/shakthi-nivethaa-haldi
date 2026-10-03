import { useState, type FormEvent, type ReactNode } from 'react';
import styles from './surprise.module.css';
import { surpriseContent } from './content';

type ChoiceProps = {
  onChoose: (choice: string) => void;
  feedback?: string;
  selected?: string | null;
};

function MemoryHeading({ index, title, question }: { index: string; title: string; question: string }) {
  return (
    <>
      <div className={styles.memoryTopline}><span>MEMORY {index}</span><span>{index} <i /> 04</span></div>
      <div className={styles.memoryOrnament} aria-hidden="true"><span>✳</span></div>
      <p className={styles.kicker}>A moment I keep close</p>
      <h1>{title}</h1>
      <p className={styles.question}>{question}</p>
    </>
  );
}

export function BootScene({ progress, checks }: { progress: number; checks: number }) {
  return (
    <section className={`${styles.panel} ${styles.boot}`} aria-live="polite">
      <div className={styles.seal} aria-hidden="true"><span>✳</span></div>
      <p className={styles.kicker}>A little story, made just for you</p>
      <h1 className={styles.name}>{surpriseContent.name.split('').join(' ')}</h1>
      <p className={styles.bootLabel}>SYSTEM INITIALIZING<span className={styles.cursor}>_</span></p>
      <div className={styles.progressMeta}><span>LOADING OUR STORY</span><span>{String(progress).padStart(3, '0')}%</span></div>
      <div className={styles.progressTrack} role="progressbar" aria-label="Loading our story" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
        <span style={{ width: `${progress}%` }} />
      </div>
      <ul className={styles.checks}>
        {surpriseContent.bootChecks.map((check, index) => (
          <li className={index < checks ? styles.checkVisible : ''} key={check}><span aria-hidden="true">✓</span>{check}</li>
        ))}
      </ul>
      <div className={`${styles.dependency} ${progress === 100 ? styles.dependencyVisible : ''}`}>
        <span className={styles.warning}>✳</span><span>One critical dependency found...</span><strong>{surpriseContent.criticalDependency}</strong>
      </div>
    </section>
  );
}

export function ReadyScene({ onBegin }: { onBegin: () => void }) {
  return (
    <section className={`${styles.panel} ${styles.ready}`}>
      <div className={styles.readyGlyph} aria-hidden="true">♡</div>
      <p className={styles.kicker}>All the important things are here</p>
      <h1>Before we continue,<br />I need to verify one thing.</h1>
      <p className={styles.signature}>With all my love, <span>{surpriseContent.signature}</span></p>
      <button className={styles.primaryButton} onClick={onBegin} type="button"><span>BEGIN</span><span aria-hidden="true">↗</span></button>
      <p className={styles.microcopy}>A small trip down memory lane</p>
    </section>
  );
}

export function LoveQuestionScene({ onChoose, feedback, selected }: ChoiceProps) {
  const memory = surpriseContent.firstMemory;
  return (
    <section className={`${styles.panel} ${styles.memory}`}>
      <MemoryHeading index="01" title={memory.title} question={memory.question} />
      <div className={styles.answers} role="group" aria-label="Choose who said I love you first">
        {memory.choices.map((answer, index) => (
          <button className={`${styles.answer} ${selected === answer ? styles.answerSelected : ''}`} key={answer} onClick={() => onChoose(answer)} type="button">
            <span className={styles.answerIndex}>0{index + 1}</span><span>{answer}</span><span className={styles.answerArrow} aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      <p className={styles.feedback} aria-live="polite">{feedback}</p>
      <p className={styles.microcopy}>Take your time, my love.</p>
    </section>
  );
}

export function MemoryRevealScene({ index, headline, message, onNext, nextLabel = 'NEXT MEMORY' }: { index: string; headline: ReactNode; message: string; onNext: () => void; nextLabel?: string }) {
  return (
    <section className={`${styles.panel} ${styles.reveal}`} aria-live="polite">
      <div className={styles.memoryTopline}><span>MEMORY {index}</span><span>FOUND <i>♡</i></span></div>
      <div className={styles.heartBloom} aria-hidden="true"><span className={styles.heart}>♥</span><i>✿</i><i>✧</i><i>✿</i><i>✧</i><i>·</i><i>·</i></div>
      <p className={styles.kicker}>Some things never leave us</p>
      <h1>{headline}</h1>
      <p className={styles.memoryMessage}>{message}</p>
      <div className={styles.signatureRule} />
      <p className={styles.signature}>Always yours, <span>{surpriseContent.signature}</span></p>
      <button className={styles.primaryButton} onClick={onNext} type="button"><span>{nextLabel}</span><span aria-hidden="true">↗</span></button>
    </section>
  );
}

export function MovieScene({ onChoose, feedback }: ChoiceProps) {
  const memory = surpriseContent.movieMemory;
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <section className={`${styles.panel} ${styles.memory} ${styles.movieScene}`}>
      <MemoryHeading index="02" title={memory.title} question={memory.question} />
      <div className={styles.tickets} role="group" aria-label="Choose our first movie">
        {memory.choices.map((movie, index) => (
          <button className={`${styles.ticket} ${selected === movie ? (movie === String(memory.answer) ? styles.ticketSelected : styles.ticketPicked) : ''}`} key={movie} onClick={() => { setSelected(movie); onChoose(movie); }} type="button">
            <span className={styles.ticketStub}>ADMIT ONE <i>✳</i></span>
            <span className={styles.ticketNumber}>0{index + 1}</span>
            <span className={styles.ticketTitle}>{movie}</span>
            <span className={styles.ticketFoot}>A NIGHT TO REMEMBER</span>
          </button>
        ))}
      </div>
      <p className={styles.feedback} aria-live="polite">{feedback}</p>
      {selected === String(memory.answer) && <div className={styles.filmTransition} aria-hidden="true"><span /></div>}
    </section>
  );
}

export function DateScene({ complete, onChoose, feedback }: ChoiceProps & { complete: boolean }) {
  const memory = surpriseContent.dateMemory;
  return (
    <section className={`${styles.panel} ${styles.memory} ${styles.dateScene}`}>
      <MemoryHeading index="03" title={memory.title} question={memory.question} />
      <div className={`${styles.map} ${complete ? styles.mapComplete : ''}`} aria-label={complete ? 'The route to the memory is revealed' : 'A map waiting for its destination'}>
        <span className={styles.mapGrid} />
        <svg viewBox="0 0 320 122" role="img" aria-hidden="true">
          <path className={styles.routeUnderlay} d="M24 93 C68 95 58 31 111 40 S162 101 199 72 S242 21 296 29" />
          <path className={styles.routePath} d="M24 93 C68 95 58 31 111 40 S162 101 199 72 S242 21 296 29" />
        </svg>
        <span className={styles.mapStart}><i />THEN</span>
        <span className={styles.mapDestination}>♡</span>
        <span className={styles.mapEnd}>US</span>
      </div>
      {!complete ? (
        <div className={styles.answers} role="group" aria-label="Choose our first date">
          {memory.choices.map((place, index) => (
            <button className={styles.answer} key={place} onClick={() => onChoose(place)} type="button">
              <span className={styles.answerIndex}>0{index + 1}</span><span>{place}</span><span className={styles.answerArrow} aria-hidden="true">↗</span>
            </button>
          ))}
          <p className={styles.feedback} aria-live="polite">{feedback}</p>
        </div>
      ) : (
        <div className={styles.mapMemory} aria-live="polite"><p>{memory.message}</p></div>
      )}
    </section>
  );
}

export function FavouriteScene({
  value,
  error,
  onChange,
  onSubmit,
}: {
  value: string;
  error: string;
  onChange: (value: string) => void;
  onSubmit: (memory: string) => void;
}) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(value);
  }
  return (
    <section className={`${styles.panel} ${styles.memory} ${styles.favouriteScene}`}>
      <div className={styles.memoryTopline}><span>MEMORY 04</span><span>ONE LAST THING</span></div>
      <div className={styles.memoryOrnament} aria-hidden="true"><span>❧</span></div>
      <p className={styles.kicker}>A page only we could write</p>
      <h1>{surpriseContent.favouriteMemory.title}</h1>
      <p className={styles.question}>{surpriseContent.favouriteMemory.question}</p>
      <form className={styles.memoryForm} onSubmit={submit}>
        <label className={styles.visuallyHidden} htmlFor="favourite-memory">Your favourite memory</label>
        <textarea id="favourite-memory" value={value} onChange={(event) => onChange(event.target.value)} placeholder="A place, a day, a tiny detail..." rows={3} maxLength={2000} required aria-describedby={error ? 'memory-save-error' : undefined} />
        <button className={styles.primaryButton} type="submit"><span>KEEP THIS MEMORY</span><span aria-hidden="true">↗</span></button>
      </form>
      {error && <p className={styles.saveError} id="memory-save-error" role="alert">{error}</p>}
      <p className={styles.microcopy}>There is no wrong answer here.</p>
    </section>
  );
}

export function ProcessingScene({ match, onNext }: { match: boolean; onNext?: () => void }) {
  return (
    <section className={`${styles.panel} ${styles.processing}`} aria-live="polite">
      <div className={styles.processingRing}><span>{match ? '♥' : '...'}</span></div>
      <p className={styles.kicker}>{match ? 'The heart remembers' : 'Just a little moment'}</p>
      <h1>{match ? 'MATCH FOUND' : 'PROCESSING...'}</h1>
      {match && <><p className={styles.matchHeart}>❤️</p><p className={styles.memoryMessage}>{surpriseContent.favouriteMemory.reveal}</p>{onNext && <button className={styles.primaryButton} onClick={onNext} type="button"><span>CONTINUE</span><span aria-hidden="true">↗</span></button>}</>}
    </section>
  );
}

export function YearsScene({ onRun }: { onRun: () => void }) {
  return (
    <section className={`${styles.panel} ${styles.yearsScene}`}>
      <p className={styles.kicker}>{surpriseContent.yearsMessage}</p>
      <p className={styles.systemLabel}>SYSTEM STATUS</p>
      <div className={styles.statusRows}>
        <p><span>MEMORIES</span><i /><strong>100%</strong></p>
        <p><span>LOVE</span><i /><strong>100%</strong></p>
        <p><span>TRUST</span><i /><strong>100%</strong></p>
        <p><span>TIME TOGETHER</span><i /><strong>{surpriseContent.years} YEARS</strong></p>
      </div>
      <p className={styles.systemReady}><span /> SYSTEM READY</p>
      <p className={styles.runCommand}>RUN NEXT_CHAPTER<span>()</span></p>
      <button className={styles.primaryButton} onClick={onRun} type="button"><span>RUN</span><span aria-hidden="true">↗</span></button>
    </section>
  );
}

export function HaldiScene({ onGo }: { onGo: () => void }) {
  return (
    <section className={`${styles.panel} ${styles.haldiScene}`}>
      <div className={styles.mandala} aria-hidden="true">✺</div>
      <p className={styles.kicker}>The next chapter begins</p>
      <p className={styles.nextChapter}>NEXT CHAPTER</p>
      <div className={styles.lotus} aria-hidden="true">🪷</div>
      <h1>HALDI</h1>
      <div className={styles.haldiDetails}><span>{surpriseContent.haldi.date}</span><i>✦</i><span>{surpriseContent.haldi.venue}</span><span>{surpriseContent.haldi.city}</span></div>
      <p className={styles.readyQuestion}>ARE YOU READY?</p>
      <button className={`${styles.primaryButton} ${styles.haldiButton}`} onClick={onGo} type="button"><span>LET'S GO</span><span aria-hidden="true">↗</span></button>
    </section>
  );
}

export function CelebrationScene({ commandsVisible, onComfort }: { commandsVisible: number; onComfort: () => void }) {
  const commands = ['> executing haldi.exe', `> destination: ${surpriseContent.haldi.venue}, ${surpriseContent.haldi.city}`, '> status: READY ❤️'];
  return (
    <section className={`${styles.panel} ${styles.celebration}`} aria-live="polite">
      <div className={styles.celebrationPetals} aria-hidden="true">✿　✧　✿</div>
      <p className={styles.kicker}>The moment is almost here</p>
      <div className={styles.terminal} aria-label="Haldi launch status">
        {commands.slice(0, commandsVisible).map((command) => <p key={command}>{command}</p>)}
      </div>
      {commandsVisible >= commands.length && <p className={styles.finalMessage}>{surpriseContent.haldi.finalMessage}</p>}
      {commandsVisible >= commands.length && <button className={styles.comfortTrigger} type="button" aria-label="Open your quiet comfort room" onClick={onComfort}>✿</button>}
    </section>
  );
}
