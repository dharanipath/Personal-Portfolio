import styles from './Navbar.module.css'

const links = [
  { href: '#about',    label: 'about' },
  { href: '#skills',   label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact',  label: 'contact' },
  { href: '#download', label: 'download cv' },
]

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>Dharanipathi Portfolio</span>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className={styles.cta}>hire me</a>
    </nav>
  )
}
