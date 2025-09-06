import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const STORAGE_KEY = 'shortly_urls'

export default function Redirector() {
  const { code } = useParams()
  const [message, setMessage] = useState('Looking up...')

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    const found = urls.find(u => u.code === code)

    if (found) {
      // increment click count
      const updated = urls.map(u => u.code === code ? { ...u, clicks: (u.clicks || 0) + 1 } : u)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

      // redirect after a short message (or immediately)
      setMessage(`Redirecting to ${found.originalUrl} ...`)
      setTimeout(() => {
        window.location.replace(found.originalUrl)
      }, 300) // small delay so user sees the message
    } else {
      setMessage('Short link not found in this browser. Short links created here only work in this browser unless you use a server backend.')
    }
  }, [code])

  return (
    <div style={{ padding: 24 }}>
      <h2>{message}</h2>
      <p>
        If you want public redirects (so anyone visiting your short domain gets redirected), add a backend.
      </p>
    </div>
  )
}
