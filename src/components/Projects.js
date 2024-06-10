import React from 'react'
import  img1 from '../Asset/Travel-app.png'
import img2 from '../Asset/movielanding.jpg'
import img3 from '../Asset/Todolistprgimg.png'


function Projects({darkmode}) {
  return (
    <>
    { !darkmode ?
  <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='projects'>
    <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
          <h1 className='text-4xl  border-b-4 border-secodary mb-5 w-[150px] font-bold '>Projects</h1>
          <p>This are the some of my projects built with Recat, Css, HTML ,javascript. check them out</p>
        </div>
    </div>
    <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
               <img className='h-[200px] w-[300px]' src={img1}/>
               <div className='project-desc'>
                <p className='text-center px-5 py-5'>A travel planning website built with ReactJs</p>
                <div className='flex justify-center'>
                <a target='_blank' className='btn' href='https://github.com/Roshantech2023/Travel-Planner-Application'>View Source</a>
               </div>
               </div>
            </div>

            <div className='relative'>
              <img className='h-[200px] w-[300px]' src={img2}/>
              <div className='project-desc'>
                <p className='text-center px-5 py-5'>Movie landing page built with HTML, CSS and javascript</p>
                <div className='flex justify-center'>
                <a target='_blank' className='btn' href='https://movie-soon.netlify.app/'>View Source</a>
               </div>
              </div>
            </div>
            <div className='relative'>
               <img className='h-[200px] w-[300px]' src={img3}/>
               <div className='project-desc'>
                <p className='text-center px-5 py-5'>To-Do list built with ReactJs</p>
                <div className='flex justify-center'>
                <a target='_blank' className='btn' href='https://github.com/Roshantech2023/TODOLIST_oibsip_taskno3'>View Source</a>
               </div>
              </div>
             </div>
        </div>        
    </div>
    </section> : <section className='flex flex-col py-20 px-5 justify-center bg-black text-white' id='projects'>
    <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
          <h1 className='text-4xl  border-b-4 border-secodary mb-5 w-[150px] font-bold '>Projects</h1>
          <p>This are the some of my projects built with Recat, Css, HTML ,javascript. check them out</p>
        </div>
    </div>
    <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            <div className='relative'>
               <img className='h-[200px] w-[300px]' src={img1}/>
               <div className='project-desc'>
                <p className='text-center px-5 py-5'>A travel planning website built with ReactJs</p>
                <div className='flex justify-center'>
                <a target='_blank' className='btn' href='https://github.com/Roshantech2023/Travel-Planner-Application'>View Source</a>
               </div>
               </div>
            </div>

            <div className='relative'>
              <img className='h-[200px] w-[300px]' src={img2}/>
              <div className='project-desc'>
                <p className='text-center px-5 py-5'>Movie landing page built with HTML, CSS and javascript</p>
                <div className='flex justify-center'>
                <a target='_blank' className='btn' href='https://movie-soon.netlify.app/'>View Source</a>
               </div>
              </div>
            </div>
            <div className='relative'>
               <img className='h-[200px] w-[300px]' src={img3}/>
               <div className='project-desc'>
                <p className='text-center px-5 py-5'>To-Do list built with ReactJs</p>
                <div className='flex justify-center'>
                <a target='_blank' className='btn' href='https://github.com/Roshantech2023/TODOLIST_oibsip_taskno3'>View Source</a>
               </div>
              </div>
             </div>
        </div>        
    </div>
    </section>}
    </>
  )
}

export default Projects