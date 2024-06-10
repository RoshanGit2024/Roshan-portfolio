import React from 'react'

function Footer({darkmode}) {
  return (
    <>
    { !darkmode ? 
    <div className='py-4 bg-primary text-center text-white'>
       &copy; Anuroshan B 2024
    </div> :<div className='py-4 bg-black text-center text-white'>
       &copy; Anuroshan B 2024
    </div>
    }
    </>
  )
}

export default Footer