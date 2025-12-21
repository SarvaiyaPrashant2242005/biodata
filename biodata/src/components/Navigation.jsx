import React from 'react'

const Navigation = ({ currentContent, activeSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">{currentContent.name}</span>
        </div>
        <div className="nav-menu">
          <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>{currentContent.nav.about}</a>
          <a href="#personal" className={activeSection === 'personal' ? 'active' : ''}>{currentContent.nav.personal}</a>
          <a href="#family" className={activeSection === 'family' ? 'active' : ''}>{currentContent.nav.family}</a>
          <a href="#nature" className={activeSection === 'nature' ? 'active' : ''}>{currentContent.nav.nature}</a>
          <a href="#hobbies" className={activeSection === 'hobbies' ? 'active' : ''}>{currentContent.nav.hobbies}</a>
          <a href="#address" className={activeSection === 'address' ? 'active' : ''}>{currentContent.nav.address}</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation