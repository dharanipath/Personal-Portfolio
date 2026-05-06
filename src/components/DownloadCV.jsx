import styles from './DownloadCV.module.css'
export default function DownloadCV() {
  return (
    <section id="download" className={styles.section}>
      <p className={styles.tag}>Download</p>
      <h2 className={styles.title}>Get My <em>CV</em></h2>
      <p className={styles.sub}>
        Interested in working together? Download my CV to see my experience and skills in detail.
      </p>  
      <br></br>    
      <a href="/Dharanipathi_Resume.pdf" download className={styles.cta}> Download CV
      </a>
    </section>
  );
}