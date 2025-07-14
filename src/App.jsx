
import style from './App.module.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Project from './components/projects/Project'

function App() {
  

  return (
    <div className={style.App} style={{width:"100%"}}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
