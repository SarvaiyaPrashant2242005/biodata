import React from 'react'

const LanguageToggle = ({ language, onLanguageChange }) => {
  return (
    <div className="language-toggle">
      <button 
        className={language === 'english' ? 'active' : ''}
        onClick={() => onLanguageChange('english')}
      >
        <span className="flag">🇺🇸</span> EN
      </button>
      <button 
        className={language === 'gujarati' ? 'active' : ''}
        onClick={() => onLanguageChange('gujarati')}
      >
        <span className="flag">🇮🇳</span> ગુ
      </button>
    </div>
  )
}

export default LanguageToggle