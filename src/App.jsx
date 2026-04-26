import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LiteratureSurvey from './components/LiteratureSurvey'
import ResearchGap from './components/ResearchGap'
import ProblemSolution from './components/ProblemSolution'
import ResearchObjectives from './components/ResearchObjectives'
import Methodology from './components/Methodology'
import Milestones from './components/Milestones'
import Resources from './components/Resources'
import Technologies from './components/Technologies'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

const AnimatedSection = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
)

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection><LiteratureSurvey /></AnimatedSection>
        <AnimatedSection><ResearchGap /></AnimatedSection>
        <AnimatedSection><ProblemSolution /></AnimatedSection>
        <AnimatedSection><ResearchObjectives /></AnimatedSection>
        <AnimatedSection><Methodology /></AnimatedSection>
        <AnimatedSection><Milestones /></AnimatedSection>
        <AnimatedSection><Resources /></AnimatedSection>
        <AnimatedSection><Technologies /></AnimatedSection>
        <AnimatedSection><AboutUs /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </main>
      <Footer />
    </div>
  )
}

export default App
