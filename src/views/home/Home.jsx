import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Skills />
      <Contact />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Blog />
    </>
  )
}

export default Home