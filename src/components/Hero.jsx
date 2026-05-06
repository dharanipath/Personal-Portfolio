import { PERSONAL, STATS } from '../data/config'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow}  aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          {PERSONAL.tagline}
        </div>

        <h2 className={styles.nameLabel}>{PERSONAL.name}</h2>

        <h1 className={styles.title}>
          Java Backend<br />
          Engineer &<br />
          <em>Full-Stack Builder</em>
        </h1>

        <p className={styles.sub}>
          I architect robust backends, design intuitive interfaces, and 
          deliver production-grade software — end to end.
          {/* I build exceptional digital products — from pixel-perfect interfaces
          to scalable backends. Turning complex problems into elegant solutions. */}
        </p>

        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact"  className={styles.btnGhost}>Get in Touch</a>
        </div>

        <div className={styles.stats}>
          {STATS.map(s => (
            <div key={s.label}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
