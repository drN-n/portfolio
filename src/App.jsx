import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Work"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-fg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
