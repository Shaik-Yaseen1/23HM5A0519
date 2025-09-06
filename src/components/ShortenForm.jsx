import React, { useState } from 'react'
import { nanoid } from 'nanoid'

function isValidUrl(value) {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

export default function ShortenForm({ onCreate }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)
  const [created, setCreated] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    setCreated(null)

    const url = input.trim()
    if (!url) return setError('Please paste a URL.')
    if (!isValidUrl(url)) return setError('Invalid URL format.')

    const code = nanoid(7)
    const shortUrl = `${window.location.origin}/${code}` // for demo; change when backend used
    const entry = {
      id: code,
      code,
      originalUrl: url,
      shortUrl,
      createdAt: Date.now(),
      clicks: 0
    }

    onCreate(entry)
    setCreated(entry)
    setInput('')
  }

  const handleCopy = async () => {
    if (!created) return
    try {
      await navigator.clipboard.writeText(created.shortUrl)
    //   alert('Short URL copied to clipboard!')
    } catch {
    //   alert('Copy failed — select and copy manually.')
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="shorten-form">
        <input
          type="text"
          placeholder="Paste a long URL (e.g., https://example.com)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>

      {error && <div className="error">{error}</div>}

      {created && (
        <div className="result">
          <div className="short-url">{created.shortUrl}</div>
          <div>
            <button onClick={handleCopy}>Copy</button>
          </div>
        </div>
      )}
    </div>
  )
}
