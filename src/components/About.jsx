import { PERSONAL, STACK_PILLS, TIMELINE } from '../data/config'
import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.tag}>About</p>

      <div className={styles.grid}>
        {/* Left — bio */}
        <div>
          <h2 className={styles.title}>
            Crafting code<br /><em>with purpose</em>
          </h2>
          {PERSONAL.bio.map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}
          <div className={styles.pills}>
            {STACK_PILLS.map(p => (
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>
        </div>

        {/* Right — timeline */}
        <div className={styles.timeline}>
          {TIMELINE.map((item, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.timelineLine}>
                <div className={styles.dot} />
                {i < TIMELINE.length - 1 && <div className={styles.bar} />}
              </div>
              <div>
                <p className={styles.year}>{item.year}</p>
                <p className={styles.role}>{item.role}</p>
                <p className={styles.company}>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
