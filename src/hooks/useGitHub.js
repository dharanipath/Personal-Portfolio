import { useState, useCallback } from 'react'

export function useGitHub() {
  const [user,    setUser]    = useState(null)
  const [repos,   setRepos]   = useState([])
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState(null)

  const fetchUser = useCallback(async (username) => {
    if (!username.trim()) return
    setLoading(true)
    setError(null)
    setUser(null)
    setRepos([])

    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${encodeURIComponent(username)}`),
        fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`),
      ])

      if (!userRes.ok) {
        throw new Error(
          userRes.status === 404
            ? `User "${username}" not found on GitHub.`
            : `GitHub API error: ${userRes.status}`
        )
      }

      const userData  = await userRes.json()
      const reposData = await reposRes.json()

      setUser(userData)
      setRepos([...reposData].sort((a, b) => b.stargazers_count - a.stargazers_count))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { user, repos, loading, error, fetchUser }
}
