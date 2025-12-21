import React from 'react'

const FamilySection = ({ currentContent, language, isVisible }) => {
  const images = {
    grandfather: '/Family/Grand Father.jpeg',
    grandmother: '/Family/Grand mother.jpeg',
    father: '/Family/Father.jpeg',
    mother: '/Family/Mother.jpeg',
    uncle: '/Family/Uncle.jpeg',
    aunty: '/Family/Aunty.jpeg',
    sister: '/Family/Sister.jpeg',
    brother: '/Family/Brother.jpeg',
    sis: '/Family/sis.jpeg'
  }
  
  const labels = {
    english: {
      grandfather: 'Grandfather', grandmother: 'Grandmother', father: 'Father',
      mother: 'Mother', uncle: 'Uncle', aunty: 'Aunty', sister: 'Sister',
      brother: 'Cousin Brother', sis: 'Cousin Sister'
    },
    gujarati: {
      grandfather: 'દાદા', grandmother: 'દાદી', father: 'પિતા',
      mother: 'માતા', uncle: 'કાકા', aunty: 'કાકી', sister: 'બહેન',
      brother: 'પિતરાઈ ભાઈ', sis: 'પિતરાઈ બહેન'
    }
  }

  return (
    <section id="family" className={`family ${isVisible.family ? 'animate-in' : ''}`}>
      <div className="section-header">
        <h2>{currentContent.family.title}</h2>
        <div className="section-subtitle">{language === 'english' ? 'Meet my wonderful family' : 'મારા અદ્ભુત કુટુંબને મળો'}</div>
      </div>
      <div className="family-grid">
        {Object.entries(currentContent.family).filter(([key]) => key !== 'title').map(([key, value], index) => {
          return (
            <div key={key} className="family-member" style={{animationDelay: `${index * 0.15}s`}}>
              <div className="member-image-wrapper">
                <img src={images[key]} alt={labels[language][key]} />
                <div className="member-overlay">
                  <div className="member-info">
                    <h4>{labels[language][key]}</h4>
                  </div>
                </div>
              </div>
              <div className="member-details">
                <h3>{labels[language][key]}</h3>
<p style={{ whiteSpace: 'pre-line' }}>
  {value}
</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FamilySection