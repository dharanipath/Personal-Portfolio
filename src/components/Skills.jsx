import { SKILLS } from '../data/config'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className={styles.tag}>Skills</p>
      <h2 className={styles.title}>What I <em>work with</em></h2>
      <p className={styles.sub}>
        Every tool here is something I've used in production — not just read about in a tutorial.
      </p>

      <div className={styles.grid}>
        {SKILLS.map(skill => (
          <div key={skill.name} className={styles.card}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <p className={styles.skillDesc}>{skill.desc}</p>
            <div className={styles.barWrap}>
              <div className={styles.bar} style={{ width: `${skill.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
