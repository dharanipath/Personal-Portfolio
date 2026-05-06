import styles from './RepoCard.module.css'

const LANG_COLORS = {
  JavaScript: '#F7DF1E', TypeScript: '#3178C6', Python: '#3572A5',
  Go: '#00ADD8', Rust: '#DEA584', C: '#555555', 'C++': '#F34B7D',
  Java: '#B07219', Ruby: '#701516', PHP: '#777BB4', Swift: '#FA7343',
  Kotlin: '#A97BFF', HTML: '#E34C26', CSS: '#563D7C', Shell: '#89E051',
  Vue: '#41B883', Svelte: '#FF3E00', Dart: '#00B4AB',
}

export default function RepoCard({ repo }) {
  const langColor = LANG_COLORS[repo.language] || '#8B8A9E'

  return (
    <a
      className={styles.card}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className={styles.name}>📁 {repo.name}</h3>
      <p className={styles.desc}>
        {repo.description || 'No description provided.'}
      </p>

      {repo.topics?.length > 0 && (
        <div className={styles.topics}>
          {repo.topics.slice(0, 3).map(t => (
            <span key={t} className={styles.topic}>{t}</span>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        {repo.language && (
          <span className={styles.lang}>
            <span className={styles.dot} style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
        {repo.license && <span>📄 {repo.license.spdx_id}</span>}
      </div>
    </a>
  )
}
