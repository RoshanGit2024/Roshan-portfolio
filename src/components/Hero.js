import React from 'react'
import HeroImg from '../Asset/developer.webp'
import { AiOutlineInstagram ,AiOutlineLinkedin,AiOutlineGithub} from "react-icons/ai";

function Hero({darkmode}) {
    return (
        <>
        {!darkmode ? <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero'>Hi,<br /> I am Anuroshan <span className='text-black'>B</span>
                    <p className='text-2xl'>I am a Full-stack developer</p>
                </h1>
                <div className='flex py-10'>
                    <a href='#' className='pr-5 hover:text-orange-400'><AiOutlineInstagram size={40}/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/anuroshanb89/' className='pr-5 hover:text-blue-500'><AiOutlineLinkedin size={40}/></a>
                    <a target='_blank' href='https://github.com/Roshantech2023' className=' hover:text-white'><AiOutlineGithub size={40}/></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} />
        </section>:<section className='flex flex-col md:flex-row px-5 py-32 bg-black justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero'>Hi,<br /> I am Anuroshan <span className='text-primary'>B</span>
                    <p className='text-2xl'>I am a Full-stack developer</p>
                </h1>
                <div className='flex py-10'>
                    <a href='#' className='pr-5 text-white hover:text-orange-400'><AiOutlineInstagram size={40}/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/anuroshanb89/' className='pr-5 text-white hover:text-blue-500'><AiOutlineLinkedin size={40}/></a>
                    <a target='_blank' href='https://github.com/Roshantech2023' className=' text-white hover:text-white'><AiOutlineGithub size={40}/></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} />
        </section>}
        </>
    )
}

export default Hero