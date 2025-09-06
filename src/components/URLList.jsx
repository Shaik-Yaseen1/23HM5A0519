import React from 'react'

export default function URLList({ urls = [], onDelete }) {
  if (!urls.length) return <div className="empty">No shortened URLs yet.</div>

  return (
    <div className="list card">
      <h3>Your shortened links</h3>
      <ul>
        {urls.map(u => (
          <li key={u.code} className="list-item">
            <div className="left">
              <a href={u.shortUrl} target="_blank" rel="noreferrer">{u.shortUrl}</a>
              <div className="original">{u.originalUrl}</div>
            </div>

            <div className="right">
              <div className="meta">
                <small>{new Date(u.createdAt).toLocaleString()}</small>
                <small>{u.clicks || 0} clicks</small>
              </div>
              <div className="actions">
                <button onClick={() => navigator.clipboard.writeText(u.shortUrl)}>Copy</button>
                <button onClick={() => window.open(u.originalUrl, '_blank')}>Open</button>
                <button onClick={() => onDelete(u.code)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
