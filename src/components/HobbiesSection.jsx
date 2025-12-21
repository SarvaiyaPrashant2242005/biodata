import React from 'react'

const HobbiesSection = ({ currentContent, language, isVisible }) => {
  const icons = ['✈️', '🎵', '📚', '🏏']

  return (
    <section id="hobbies" className={`hobbies ${isVisible.hobbies ? 'animate-in' : ''}`}>
      <div className="section-header">
        <h2>{currentContent.hobbies.title}</h2>
        <div className="section-subtitle">{language === 'english' ? 'What I love to do in my free time' : 'મારા ફ્રી ટાઈમમાં હું શું કરવાનું પસંદ કરું છું'}</div>
      </div>
      <div className="hobbies-grid">
        {currentContent.hobbies.list.map((hobby, index) => (
          <div key={index} className="hobby-card" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="hobby-icon">{icons[index]}</div>
            <div className="hobby-content">
              <p>{hobby}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HobbiesSection