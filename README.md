# 🔗 URL Shortener

A modern, responsive URL shortener web application built with React. Transform long URLs into short, shareable links with a beautiful and intuitive user interface.

## ✨ Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Copy to Clipboard**: One-click copying of shortened URLs
- **URL History**: View all your previously shortened URLs
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations
- **URL Validation**: Ensures only valid URLs are processed
- **Delete Functionality**: Remove URLs from your history
- **Real-time Feedback**: Loading states and success indicators

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   # If you have git, you can clone the repository
   git clone <repository-url>
   cd url-shortener
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 📱 How to Use

1. **Enter a URL**: Type or paste a long URL into the input field
2. **Shorten**: Click the "Shorten URL" button
3. **Copy**: Click the clipboard icon to copy the shortened URL
4. **Manage**: View your URL history and delete URLs as needed

## 🎨 Features in Detail

### URL Shortening
- Generates random 6-character codes for shortened URLs
- Validates input URLs to ensure they're properly formatted
- Shows loading state during processing

### User Interface
- Clean, modern design with gradient backgrounds
- Responsive layout that works on all screen sizes
- Smooth animations and hover effects
- Intuitive icons and visual feedback

### URL Management
- Displays both original and shortened URLs
- Shows creation timestamp for each URL
- One-click copy functionality with visual feedback
- Delete individual URLs from history

## 🏗️ Project Structure

```
src/
├── components/
│   ├── URLShortener.js      # Main URL input and shortening logic
│   ├── URLShortener.css     # Styles for URL shortener component
│   ├── ShortenedURL.js      # Component for displaying shortened URLs
│   └── ShortenedURL.css     # Styles for shortened URL component
├── App.js                   # Main application component
├── App.css                  # Main application styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## 🔧 Technical Details

- **Frontend**: React 18 with functional components and hooks
- **Styling**: CSS3 with modern features (flexbox, grid, animations)
- **State Management**: React useState hook for local state
- **URL Generation**: Custom algorithm generating random 6-character codes
- **Validation**: Built-in URL validation using the URL constructor

## 🌟 Future Enhancements

- Backend integration for persistent URL storage
- Custom short codes
- Analytics and click tracking
- User authentication and personal URL libraries
- QR code generation
- Bulk URL shortening
- API endpoints for programmatic access

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Built with ❤️ using React**
