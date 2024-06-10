import React from 'react'
import Resumeimg from '../Asset/Resumeimage.png'

function Resume({darkmode}) {
  return (
    <>
  {!darkmode ?   
  <section className='flex flex-col md:flex-row bg-secondary px-5' id='resume'>
  <div className='py-5 md:w-1/2 flex justify-center'>
      <img className='w-[300px]' src={Resumeimg}/>
  </div>
  <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center text-white'>
      <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
      <p className='pb-5 flex flex-col'>You can view my resume<a href='../Asset/Anuroshan Resume.pdf' download={'../src/Asset/Anuroshan Resume.pdf'} className='btn'>Download</a></p>
      </div>
  </div>
  </section> :  <section className='flex flex-col md:flex-row bg-black px-5' id='resume'>
  <div className='py-5 md:w-1/2 flex justify-center'>
      <img className='w-[300px]' src={Resumeimg}/>
  </div>
  <div className='md:w-1/2 flex justify-center'>
      <div className='flex flex-col justify-center text-white'>
      <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
      <p className='pb-5 flex flex-col'>You can view my resume<a href='../Asset/Anuroshan Resume.pdf' download={'../src/Asset/Anuroshan Resume.pdf'} className='btn'>Download</a></p>
      </div>
  </div>
  </section>
}
  </>
  )
}

export default Resume