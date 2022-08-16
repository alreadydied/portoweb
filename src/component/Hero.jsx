import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#4e6eff] font-bold'>WELCOME TO MY WEBSITE</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> AMARA THURIDHA </h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
            Saya adalah seoracng 
            </p>
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' 
            strings={[' Designer', 'Developer']} 
            typeSpeed={120}
            backSpeed={120}
            loop
            />
            
        </div>
        </div>
    </div>
  )
}

export default Hero