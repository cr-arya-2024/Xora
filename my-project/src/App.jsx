import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './section/header'
import Hero from './section/Hero'
import Features from './section/Features'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <main className=' overflow-hidden '>
 <Header/>
 <Hero/>
 <Features/>
   </main>
    </>
  )
}

export default App
