import type { Metadata } from 'next';
import styles from './readme.module.css';
import { surpriseContent } from '../surprise/content';

export const metadata: Metadata = { title: 'Project Us | README' };

const dependencies = ['Love', 'Trust', 'Patience', 'Laughter'];
const knownIssues = ['Missing you', 'Occasional fights', 'Too much food sharing'];

export default function ProjectReadme() {
  return (
    <main className={styles.readme}>
      <div className={styles.frame}>
        <p className={styles.eyebrow}>A PRIVATE PROJECT FILE</p>
        <h1>Project: <em>Us</em></h1>
        <div className={styles.rule} />
        <dl className={styles.metadata}>
          <div><dt>Started</dt><dd>{surpriseContent.years} years ago</dd></div>
          <div><dt>Status</dt><dd><span className={styles.statusDot} /> Production Ready</dd></div>
        </dl>
        <section><h2>Dependencies</h2><ul>{dependencies.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h2>Known Issues</h2><ul>{knownIssues.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <dl className={styles.metadata}>
          <div><dt>Deployment</dt><dd>Lifetime</dd></div>
          <div><dt>Maintainer</dt><dd>Shakthi <span className={styles.heart}>♥</span></dd></div>
        </dl>
        <div className={styles.signature}>Built with love, always.</div>
      </div>
    </main>
  );
}
