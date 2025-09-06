import React, { useState } from 'react';
import './App.css';
import URLShortener from './components/URLShortener';
import ShortenedURL from './components/ShortenedURL';

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const handleUrlShortened = (originalUrl, shortUrl) => {
    const newUrl = {
      id: Date.now(),
      original: originalUrl,
      short: shortUrl,
      timestamp: new Date().toLocaleString()
    };
    setShortenedUrls(prev => [newUrl, ...prev]);
  };

  const handleDeleteUrl = (id) => {
    setShortenedUrls(prev => prev.filter(url => url.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🔗 URL Shortener</h1>
        <p>Transform long URLs into short, shareable links</p>
      </header>
      
      <main className="App-main">
        <URLShortener onUrlShortened={handleUrlShortened} />
        
        {shortenedUrls.length > 0 && (
          <section className="urls-section">
            <h2>Your Shortened URLs</h2>
            <div className="urls-list">
              {shortenedUrls.map(url => (
                <ShortenedURL
                  key={url.id}
                  url={url}
                  onDelete={() => handleDeleteUrl(url.id)}
                />
              ))}
            </div>
          </section>
        )}
      </main>
      
      <footer className="App-footer">
        <p>Built with React • Simple & Fast URL Shortening</p>
      </footer>
    </div>
  );
}

export default App;
