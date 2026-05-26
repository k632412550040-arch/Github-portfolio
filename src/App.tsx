import React from 'react'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { ProjectsSection } from './sections/ProjectsSection'

function App() {
  return (
    <main className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}

export default App
