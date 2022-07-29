
import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Hero from './components/hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/skills'


function App() {


  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
