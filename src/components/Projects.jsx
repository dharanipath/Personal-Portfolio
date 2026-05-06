import { useState } from 'react'
import { PERSONAL } from '../data/config'
import { useGitHub } from '../hooks/useGitHub'
import RepoCard from './RepoCard'
import styles from './Projects.module.css'

export default function Projects() {
  const [input, setInput] = useState(PERSONAL.githubUsername)
  const { user, repos, loading, error, fetchUser } = useGitHub()

  function handleFetch() {
    fetchUser(input)
  }

  return (
    <section id="projects" className={styles.section}>
      <p className={styles.tag}>Projects</p>
      <h2 className={styles.title}>GitHub <em>repositories</em></h2>
      <p className={styles.sub}>
        Enter any GitHub username to pull their public repos live from the GitHub API.
      </p>

      {/* Input row */}
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          type="text"
          placeholder="github username…"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleFetch()}
        />
        <button
          className={styles.btn}
          onClick={handleFetch}
          disabled={loading}
        >
          {loading ? 'Loading…' : 'Fetch Repos'}
        </button>
      </div>

      {/* Error */}
      {error && <p className={styles.error}>⚠ {error}</p>}

      {/* Profile card */}
      {user && (
        <div className={styles.profile}>
          <img className={styles.avatar} src={user.avatar_url} alt={user.login} />
          <div>
            <p className={styles.login}>@{user.login}</p>
            <p className={styles.uname}>{user.name || user.login}</p>
            <p className={styles.bio}>{user.bio || 'No bio provided.'}</p>
            <div className={styles.meta}>
              <span>📦 {user.public_repos} repos</span>
              <span>👥 {user.followers} followers</span>
              {user.company && <span>🏢 {user.company}</span>}
            </div>
          </div>
        </div>
      )}

      {/* Loading spinner */}
      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner} />
          Fetching from GitHub API…
        </div>
      )}

      {/* Repos grid */}
      {repos.length > 0 && (
        <div className={styles.repoGrid}>
          {repos.map(repo => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && repos.length === 0 && !user && (
        <p className={styles.empty}>
          Enter a username above and press <kbd>Enter</kbd> or click "Fetch Repos".
        </p>
      )}
    </section>
  )
}
