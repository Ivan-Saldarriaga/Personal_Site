// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Activities from './components/Activities/Activities'
import Ecs from './components/Ecs/Ecs'
import Contact from './components/Contact/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Activities />
      <Ecs />
      <Contact />
    </>
  )
}

export default App
