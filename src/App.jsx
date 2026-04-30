import React from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Navbar from "./components/nav_bar/Navbar"
import Hero from "./components/hero/Hero"
import LiteratureSurvey from './components/literature_survey/LiteratureSurvey'
import ResearchGap from "./components/research_gap/ResearchGap"
import ProblemSolution from "./components/problem_solution/ProblemSolution"
import ResearchObjectives from "./components/objectives/ResearchObjectives"
import Methodology from "./components/methodology/Methodology"
import Milestones from './components/milestones/Milestones'
import Resources from './components/resources/Resources'
import Technologies from './components/technologies/Technologies'
import AboutUs from "./components/about_us/AboutUs"
import Contact from './components/contact_us/Contact'
import Footer from './components/footer/Footer'

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
        <Milestones />
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
