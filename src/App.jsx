import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Contact from './components/contact/Contact'
import Testimonials from './components/testimonials/Testimonials'
import Work from './components/work/Work'
import Portfolio from './components/portfolio/Portfolio'
import Menu from './components/menu/Menu'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import './app.scss'
import {useState} from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About/>
        <Skills />
        <Portfolio />
        <Work />
        <Testimonials/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
