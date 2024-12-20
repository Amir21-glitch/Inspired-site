import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Features from './Components/Features'
import Story from './Components/Story'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

export default function App() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  )
}
