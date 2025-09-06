import React, { useState } from 'react';
import './URLShortener.css';

const URLShortener = ({ onUrlShortened }) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateShortCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL (include http:// or https://)');
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const shortCode = generateShortCode();
      const shortUrl = `${window.location.origin}/${shortCode}`;
      onUrlShortened(url, shortUrl);
      setUrl('');
      setIsLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setUrl(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="url-shortener">
      <form onSubmit={handleSubmit} className="url-form">
        <div className="input-group">
          <input
            type="text"
            value={url}
            onChange={handleInputChange}
            placeholder="Enter your long URL here..."
            className="url-input"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="shorten-btn"
            disabled={isLoading || !url.trim()}
          >
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default URLShortener;
