import React from 'react'

const HeroSection = ({ currentContent, language, currentImageIndex, heroImages, setCurrentImageIndex }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="typing-animation">
            <h1>{currentContent.hero.title}</h1>
          </div>
          <div className="contact-card">
            <div className="contact-item">
              <span className="icon">📞</span>
              <span className="text">{currentContent.phone}</span>
            </div>
            <div className="contact-item">
              <span className="icon">💼</span>
              <span className="text">{currentContent.hero.subtitle}</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
              {language === 'english' ? 'Learn More' : 'વધુ જાણો'}
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('family').scrollIntoView({behavior: 'smooth'})}>
              {language === 'english' ? 'View Family' : 'કુટુંબ જુઓ'}
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="image-carousel">
            <div className="main-image-wrapper">
              <img 
                src={heroImages[currentImageIndex]} 
                alt="Prashant" 
                className="main-hero-image" 
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h3>{currentContent.name}</h3>
                  <p>{currentContent.hero.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="thumbnail-container">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Photo ${index + 1}`}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default HeroSection