import React from 'react'

function Contact({darkmode}) {
  return (
    <>
    { !darkmode ?
  <section className='flex flex-col bg-secondary px-5 py-32 text-white' id='contact'>
  <div className='flex flex-col items-center'>
      <h1 className='text-4xl  border-b-4 text-white border-primary mb-5 w-[140px] font-bold'>Contact</h1>
      <p className='pb-5 flex flex-col text-center'>If you want to discuss more in detail,please contact me</p>
      <p className='py-2'><span className='font-bold'>Email:</span>anuroshanb@gmail.com</p>
      <p className='py-2'><span className='font-bold'>Phone:</span>9150149825</p>
      </div>
  </section> : <section className='flex flex-col bg-black px-5 py-32 text-white' id='contact'>
  <div className='flex flex-col items-center'>
      <h1 className='text-4xl  border-b-4 text-white border-primary mb-5 w-[140px] font-bold'>Contact</h1>
      <p className='pb-5 flex flex-col text-center'>If you want to discuss more in detail,please contact me</p>
      <p className='py-2'><span className='font-bold'>Email:</span>anuroshanb@gmail.com</p>
      <p className='py-2'><span className='font-bold'>Phone:</span>9150149825</p>
      </div>
  </section>
  }
  </> 
  )
}

export default Contact