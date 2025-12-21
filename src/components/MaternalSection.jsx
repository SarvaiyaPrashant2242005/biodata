import React from 'react'

const MaternalSection = ({ currentContent, language, isVisible }) => {
  const labels = {
    english: {
      grandfather: 'Maternal Grandfather', grandmother: 'Maternal Grandmother',
      uncle1: 'Maternal Uncle', aunt: 'Maternal Aunt', uncle2: 'Maternal Uncle'
    },
    gujarati: {
      grandfather: 'નાના', grandmother: 'નાની',
      uncle1: 'મામા', aunt: 'મામી', uncle2: 'મામા'
    }
  }

  return (
    <section id="maternal" className={`maternal ${isVisible.maternal ? 'animate-in' : ''}`}>
      <div className="section-header">
        <h2>{currentContent.maternal.title}</h2>
        <div className="section-subtitle">{language === 'english' ? 'Maternal family information' : 'મામાના પરિવારની માહિતી'}</div>
      </div>
      <div className="maternal-grid">
        {Object.entries(currentContent.maternal).filter(([key]) => key !== 'title').map(([key, value], index) => (
          <div key={key} className="maternal-card" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="card-icon">👨‍👩‍👧‍👦</div>
            <div className="card-content">
              <h4>{labels[language][key]}</h4>
              <p>{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MaternalSection