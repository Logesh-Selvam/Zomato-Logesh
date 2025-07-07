import React from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import Footer from './components/Footer/footer.jsx'
import Download from './components/Download/download.jsx'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/about.jsx'
import Member from './components/Member/member.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Member/>
      <Download/>
      <Footer/>
      
    </div>
  )
}

export default App
