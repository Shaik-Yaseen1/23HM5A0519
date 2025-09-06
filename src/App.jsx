import React, { useEffect, useState } from 'react'
import ShortenForm from './components/ShortenForm'
import URLList from './components/URLList'

const STORAGE_KEY = 'shortly_urls'

export default function App() {
  const [urls, setUrls] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(urls))
  }, [urls])

  const addUrl = (entry) => {
    // prevent duplicate original urls by returning existing
    const existing = urls.find(u => u.originalUrl === entry.originalUrl)
    if (existing) {
      setUrls(urls.map(u => u.code === existing.code ? { ...u, ...entry } : u))
      return existing
    }
    setUrls(prev => [entry, ...prev])
    return entry
  }

  const removeUrl = (code) => {
    setUrls(prev => prev.filter(u => u.code !== code))
  }

  const incrementClicks = (code) => {
    setUrls(prev => prev.map(u => u.code === code ? { ...u, clicks: (u.clicks||0) + 1 } : u))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Shortly — URL Shortener</h1>
        <p>Paste a long link. Get a short, shareable link.</p>
      </header>

      <main className="main">
        <ShortenForm onCreate={addUrl} />
        <URLList urls={urls} onDelete={removeUrl} onCopy={() => {}} />
      </main>

      <footer className="footer">
        {/* <small>Demo: client-only shortener. For public redirects, connect a backend (see README).</small> */}
      </footer>
    </div>
  )
}
