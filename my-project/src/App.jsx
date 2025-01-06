import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './section/header'
import Hero from './section/Hero'
import Features from './section/Features'
import { Pricing } from './section/Pricing'
import Faqs from './section/Faqs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <main className=' overflow-hidden '>
 <Header/>
 <Hero/>
 <Features/>
 <Pricing/>
 <Faqs/>
   </main>
    </>
  )
}

export default App
