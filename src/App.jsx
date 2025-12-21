import React from 'react'
import './App.css'

// Components
import LanguageSelection from './components/LanguageSelection'
import Navigation from './components/Navigation'
import LanguageToggle from './components/LanguageToggle'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PersonalSection from './components/PersonalSection'
import FamilySection from './components/FamilySection'
import NatureSection from './components/NatureSection'
import HobbiesSection from './components/HobbiesSection'
import MaternalSection from './components/MaternalSection'
import AddressSection from './components/AddressSection'
import Footer from './components/Footer'

// Data and Hooks
import { content, heroImages } from './data/content'
import { useBiodata } from './hooks/useBiodata'

function App() {
  const {
    language,
    setLanguage,
    currentImageIndex,
    setCurrentImageIndex,
    isVisible,
    activeSection
  } = useBiodata()

  // Language Selection Screen
  if (!language) {
    return <LanguageSelection onLanguageSelect={setLanguage} />
  }

  const currentContent = content[language]

  return (
    <div className="app">
      {/* Navigation */}
      <Navigation currentContent={currentContent} activeSection={activeSection} />

      {/* Language Toggle */}
      <LanguageToggle language={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <HeroSection 
        currentContent={currentContent}
        language={language}
        currentImageIndex={currentImageIndex}
        heroImages={heroImages}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      {/* About Section */}
      <AboutSection 
        currentContent={currentContent}
        language={language}
        isVisible={isVisible}
      />

      {/* Personal Details */}
      <PersonalSection 
        currentContent={currentContent}
        language={language}
        isVisible={isVisible}
      />

      {/* Family Members */}
      <FamilySection 
        currentContent={currentContent}
        language={language}
        isVisible={isVisible}
      />

      {/* Nature/Personality */}
      <NatureSection 
        currentContent={currentContent}
        language={language}
        isVisible={isVisible}
      />

      {/* Hobbies */}
      <HobbiesSection 
        currentContent={currentContent}
        language={language}
        isVisible={isVisible}
      />

      {/* Maternal Details */}
      <MaternalSection 
        currentContent={currentContent}
        language={language}
        isVisible={isVisible}
      />

      {/* Address */}
      <AddressSection 
        currentContent={currentContent}
        language={language}
        isVisible={isVisible}
      />

      {/* Footer */}
      <Footer currentContent={currentContent} language={language} />
    </div>
  )
}

export default App