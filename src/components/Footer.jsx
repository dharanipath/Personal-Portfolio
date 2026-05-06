import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      {/* <span>// designed &amp; built with ❤️</span> */}
      <span>{year} @ all rights reserved</span>
    </footer>
  )
}
