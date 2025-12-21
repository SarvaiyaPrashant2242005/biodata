import { useState, useEffect } from 'react'
import { heroImages } from '../data/content'

export const useBiodata = () => {
  const [language, setLanguage] = useState(null) // null means no language selected yet
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    if (language) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [language])

  useEffect(() => {
    if (language) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [entry.target.id]: true }))
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.1 }
      )

      const sections = document.querySelectorAll('section[id]')
      sections.forEach((section) => observer.observe(section))

      return () => observer.disconnect()
    }
  }, [language])

  return {
    language,
    setLanguage,
    currentImageIndex,
    setCurrentImageIndex,
    isVisible,
    activeSection
  }
}