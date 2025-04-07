import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import Gallary from './components/Gallary'
import Products from './components/Products'
import About from './components/About'
import Header from './components/Header'

import { FaWhatsapp } from "react-icons/fa6";
import { TbPhoneCalling } from "react-icons/tb";
import { AiOutlineToTop } from "react-icons/ai";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      {/* navigation bar */}
      <header id='top' className="w-full h-16 bg-gray-50 shadow-lg flex justify-evenly items-center gap-5">
            <a className='text-gray-900' href="#home">Home</a>
            <a className='text-gray-900' href="#about">About</a>
            <a className='text-gray-900' href="#gallary">Gallery</a>
            <a className='text-gray-900' href="#products">Products</a>
            <a className='text-gray-900' href="#contact">Contact</a>
      </header>

      <section id='home'><Home/></section>
      <section id='about'><About/></section>
      <section id='gallary'><Gallary/></section>
      <section id='products'><Products/></section>
      <section id='contact'><Contact/></section>


      {/* scroll to top */}
      <a 
        className='fixed left-5 bottom-4' 
        href='#top'>
        <AiOutlineToTop 
        className='text-gray-800 border-2 border-gray-800 rounded-full p-1' size={40}/>
      </a>

      {/* make the call */}
      <a 
        className='fixed right-5 bottom-4'   
        href='https://wa.me/919984218038' 
        target='_blank'
        rel='noopener noreferrer'>
        <FaWhatsapp 
        className='text-gray-800 border-2 border-gray-800 rounded-full p-1' size={40}/>
      </a>

      {/* whatsapp chat */}
      <a 
        className='fixed right-5 bottom-15' 
        href='tel:+919984218038'>
        <TbPhoneCalling 
        className='text-gray-800 border-2 border-gray-800 rounded-full p-1' size={40}/>
      </a>

    </div>
  )
  
}

export default App
