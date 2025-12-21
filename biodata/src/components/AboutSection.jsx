import React from 'react'

const AboutSection = ({ currentContent, language, isVisible }) => {
  return (
    <section id="about" className={`about ${isVisible.about ? 'animate-in' : ''}`}>
      <div className="section-header">
        <h2>{currentContent.about.title}</h2>
        <div className="section-subtitle">{language === 'english' ? 'Get to know me better' : 'મને વધુ સારી રીતે જાણો'}</div>
      </div>
      <div className="about-content">
        <div className="about-cards">
          <div className="about-card">
            <div className="card-icon">💼</div>
            <h3>{language === 'english' ? 'Professional' : 'વ્યાવસાયિક'}</h3>
            <p>{currentContent.about.job}</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🎓</div>
            <h3>{language === 'english' ? 'Education' : 'શિક્ષણ'}</h3>
            <p>{currentContent.about.degree}</p>
          </div>
          <div className="about-card">
            <div className="card-icon">👤</div>
            <h3>{language === 'english' ? 'Appearance' : 'દેખાવ'}</h3>
            <p>{currentContent.about.skin}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection