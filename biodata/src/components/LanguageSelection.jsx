import React from 'react'

const LanguageSelection = ({ onLanguageSelect }) => {
  return (
    <div className="language-selection-screen">
      <div className="language-selection-container">
        <div className="welcome-content">
          <div className="profile-preview">
            <img src="/Myself/1.jpeg" alt="Prashant Sarvaiya" className="preview-image" />
          </div>
          <div className="welcome-text">
            <h1 className="welcome-title-en">Welcome to Prashant's Biodata</h1>
            <h1 className="welcome-title-gu">પ્રશાંતના બાયોડેટામાં આપનું સ્વાગત છે</h1>
            <p className="welcome-subtitle-en">Please select your preferred language to continue</p>
            <p className="welcome-subtitle-gu">કૃપા કરીને આગળ વધવા માટે તમારી પસંદીદી ભાષા પસંદ કરો</p>
          </div>
          <div className="language-selection-buttons">
            <button 
              className="language-btn english-btn"
              onClick={() => onLanguageSelect('english')}
            >
              <span className="flag">🇺🇸</span>
              <div className="btn-text">
                <span className="primary">English</span>
                <span className="secondary">Continue in English</span>
              </div>
            </button>
            <button 
              className="language-btn gujarati-btn"
              onClick={() => onLanguageSelect('gujarati')}
            >
              <span className="flag">🇮🇳</span>
              <div className="btn-text">
                <span className="primary">ગુજરાતી</span>
                <span className="secondary">ગુજરાતીમાં આગળ વધો</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageSelection