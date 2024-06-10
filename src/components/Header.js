import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
//import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md'

function Header({darkmode,setdarkmode}) {
    const[togglemenu,settogglemenu]=useState(false)
    const handleDarkmode=()=>{
      setdarkmode(!darkmode)
    }
  return (
    <>
    { ! darkmode ?
    <header className='sticky flex justify-between px-5 py-2 bg-primary'>
        <a href='#' className='font-bold text-black'>Anuroshan</a>
        <nav className='hidden md:block'>
        <ul className='flex text-white'>
            <li><a href='/'> Home</a></li>
            <li><a href='#about'> About</a></li>
            <li><a href='#projects'> projects</a></li>
            <li><a href='#resume'> Resume</a></li>
            <li><a href='#skills'> Skills</a></li>
            <li><a href='#contact'> contact</a></li>
            <li >{darkmode ? <button onClick={handleDarkmode} className='bg-black text-white'> light mode</button>:<button onClick={handleDarkmode} className='bg-black text-white'> dark mode</button>}</li>
         </ul>
        </nav>
        {togglemenu &&  <nav className='block md:hidden'>
        <ul onClick={()=>settogglemenu(!togglemenu)} className='flex flex-col mobile-nav text-white mobile-nav'>
            <li><a href='#'> Home</a></li>
            <li><a href='#about'> About</a></li>
            <li><a href='#projects'> projects</a></li>
            <li><a href='#resume'> Resume</a></li>
            <li><a href='#skills'> Skills</a></li>
            <li><a href='#contact'> contact</a></li>
            <li>  <li >{darkmode ? <button onClick={handleDarkmode} className='bg-black text-white'> light mode</button>:<button onClick={handleDarkmode} className='bg-black text-white'> dark mode</button>}</li></li>
         </ul>
        </nav>}
        <button onClick={()=>settogglemenu(!togglemenu)} className='block md:hidden'>
             <Bars3Icon className='text-white h-5'/>
        </button>
    </header> : <header className='sticky flex justify-between px-5 py-2 bg-black'>
        <a href='#' className='font-bold text-white'>Anuroshan</a>
        <nav className='hidden md:block'>
        <ul className='flex text-white'>
            <li><a href='/'> Home</a></li>
            <li><a href='#about'> About</a></li>
            <li><a href='#projects'> projects</a></li>
            <li><a href='#resume'> Resume</a></li>
            <li><a href='#skills'> Skills</a></li>
            <li><a href='#contact'> contact</a></li>
            <li><button onClick={handleDarkmode} className='bg-black text-white'> {darkmode ? <div className='bg-white text-black p-1 rounded-lg'>Light mode</div>:<div className='bg-black text-white p-1 rounded-lg'>'Dark mode'</div>}</button></li>
         </ul>
        </nav>
        {togglemenu &&  <nav className='block md:hidden'>
        <ul onClick={()=>settogglemenu(!togglemenu)} className='flex flex-col mobile-nav text-white mobile-nav'>
            <li><a href='#'> Home</a></li>
            <li><a href='#about'> About</a></li>
            <li><a href='#projects'> projects</a></li>
            <li><a href='#resume'> Resume</a></li>
            <li><a href='#skills'> Skills</a></li>
            <li><a href='#contact'> contact</a></li>
         </ul>
        </nav>}
        <button onClick={()=>settogglemenu(!togglemenu)} className='block md:hidden'>
             <Bars3Icon className='text-white h-5'/>
        </button>
    </header>}
    </>
  )
}

export default Header