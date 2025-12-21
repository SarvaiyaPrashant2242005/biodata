import React from 'react'

const NatureSection = ({ currentContent, language, isVisible }) => {
  return (
    <section id="nature" className={`nature ${isVisible.nature ? 'animate-in' : ''}`}>
      <div className="section-header">
        <h2>{currentContent.nature.title}</h2>
        <div className="section-subtitle">{language === 'english' ? 'My core values and personality' : 'મારા મૂળ મૂલ્યો અને વ્યક્તિત્વ'}</div>
      </div>
      <div className="traits-container">
        {currentContent.nature.traits.map((trait, index) => (
          <div key={index} className="trait-card" style={{animationDelay: `${index * 0.2}s`}}>
            <div className="trait-icon">✨</div>
            <div className="trait-content">
              <p>{trait}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NatureSection