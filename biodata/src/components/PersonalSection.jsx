import React from 'react'

const PersonalSection = ({ currentContent, language, isVisible }) => {
  const icons = {
    dob: '🎂', age: '📅', birthPlace: '📍', rashi: '⭐', religion: '🕉️',
    caste: '👥', subCaste: '👨‍👩‍👧‍👦', height: '📏', weight: '⚖️',
    education: '🎓', occupation: '💼'
  }
  
  const labels = {
    english: {
      dob: 'Date of Birth', age: 'Age', birthPlace: 'Place of Birth', rashi: 'Rashi',
      religion: 'Religion', caste: 'Caste', subCaste: 'Sub Caste', height: 'Height',
      weight: 'Weight', education: 'Education', occupation: 'Occupation'
    },
    gujarati: {
      dob: 'જન્મ તારીખ', age: 'વય', birthPlace: 'જન્મ સ્થળ', rashi: 'રાશિ',
      religion: 'ધર્મ', caste: 'જાતિ', subCaste: 'પેટા જાતિ', height: 'ઊંચાઈ',
      weight: 'વજન', education: 'શિક્ષણ', occupation: 'વ્યવસાય'
    }
  }

  return (
    <section id="personal" className={`personal ${isVisible.personal ? 'animate-in' : ''}`}>
      <div className="section-header">
        <h2>{currentContent.personal.title}</h2>
        <div className="section-subtitle">{language === 'english' ? 'Personal Information' : 'વ્યક્તિગત માહિતી'}</div>
      </div>
      <div className="personal-grid">
        {Object.entries(currentContent.personal).filter(([key]) => key !== 'title').map(([key, value], index) => {
          if (!value) return null
          
          return (
            <div key={key} className="personal-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-icon">{icons[key]}</div>
              <div className="card-content">
                <h4>{labels[language][key]}</h4>
                <p>{value}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PersonalSection