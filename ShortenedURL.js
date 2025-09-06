import React, { useState } from 'react';
import './ShortenedURL.css';

const ShortenedURL = ({ url, onDelete }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url.short);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const truncateUrl = (url, maxLength = 50) => {
    if (url.length <= maxLength) return url;
    return url.substring(0, maxLength) + '...';
  };

  return (
    <div className="shortened-url">
      <div className="url-info">
        <div className="original-url">
          <span className="label">Original:</span>
          <a 
            href={url.original} 
            target="_blank" 
            rel="noopener noreferrer"
            className="original-link"
            title={url.original}
          >
            {truncateUrl(url.original)}
          </a>
        </div>
        
        <div className="short-url">
          <span className="label">Short:</span>
          <div className="short-link-container">
            <a 
              href={url.short} 
              target="_blank" 
              rel="noopener noreferrer"
              className="short-link"
            >
              {url.short}
            </a>
            <button 
              onClick={handleCopy}
              className={`copy-btn ${copied ? 'copied' : ''}`}
              title={copied ? 'Copied!' : 'Copy to clipboard'}
            >
              {copied ? '✓' : '📋'}
            </button>
          </div>
        </div>
        
        <div className="url-meta">
          <span className="timestamp">Created: {url.timestamp}</span>
        </div>
      </div>
      
      <button 
        onClick={onDelete}
        className="delete-btn"
        title="Delete this URL"
      >
        🗑️
      </button>
    </div>
  );
};

export default ShortenedURL;
