import React, { useState } from 'react'
import AbtImg from '../Asset/developerabt.png'

function About({darkmode}) {
  const[readmore,setreadmore]=useState(false)
  return (
    <>
    {!darkmode ? <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={AbtImg} className='h-[280px] w-[380px] px-5'/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hi, My name is Anuroshan B, I am a full stack web debeloper. i Built a website with ReactJs and Tailwind CSS{!readmore && <button className='btn p-10' onClick={()=>setreadmore(true)}>Read More</button>}</p>
       {readmore &&<div> <p className='pb-5'>I have a knowledge in Frontend skills like ReactJs,Redux,Axios, CSS3 ,TailwindCSS, HTML and many more</p>
        <p className='pb-5'>in Backend I know NodeJs, ExpressJs, MongoDb and Sql</p></div>}
        </div>
    </div>
    </section> : <section className='flex flex-col md:flex-row bg-black px-5' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={AbtImg} className='h-[280px] w-[380px] px-5'/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
        <p className='pb-5'>Hi, My name is Anuroshan B, I am a full stack web debeloper. i Built a website with ReactJs and Tailwind CSS{!readmore && <button className='btn p-10' onClick={()=>setreadmore(true)}>Read More</button>}</p>
       {readmore &&<div> <p className='pb-5'>I have a knowledge in Frontend skills like ReactJs,Redux,Axios, CSS3 ,TailwindCSS, HTML and many more</p>
        <p className='pb-5'>in Backend I know NodeJs, ExpressJs, MongoDb and Sql</p></div>}
        </div>
    </div>
    </section>}
    </>
  )
}

export default About