import React from 'react'

const Footer = ({ currentContent, language }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 {currentContent.name}. {language === 'english' ? 'All rights reserved.' : ''}</p>
        <div className="footer-contact">
          <span>📞 {currentContent.phone}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer