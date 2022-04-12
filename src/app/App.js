import './app.module.css'
import Hero from '../hero/main/main'
import Work from '../work/work'
import Skills from '../skills/skills'
import About from '../about/about'
import Contact from '../contact/contact'

function App() {
  return (
    <div>
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
