import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const[darkmode,setdarkmode]=useState(false)
  return (
    <div className="App">
        <Header darkmode={darkmode} setdarkmode={setdarkmode}/>
        <Hero darkmode={darkmode}/>
        <About darkmode={darkmode}/>
        <Projects darkmode={darkmode}/>
        <Resume darkmode={darkmode}/>
        <Skills darkmode={darkmode}/>
        <Contact darkmode={darkmode}/>
        <Footer darkmode={darkmode}/>
    </div>
  )
}

export default App;
