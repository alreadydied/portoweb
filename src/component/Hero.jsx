import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-sky-500 text-4xl font-bold'>WELCOME TO MY WEBSITE</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> AMARA THURIDHA </h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-2xl sm:text-4xl text-xl font-bold'>
            Saya adalah seorang 
            </p>
            <Typed className='md:text-2xl sm:text-4xl text-xl font-bold pl-2' 
            strings={[' Designer', 'Developer']} 
            typeSpeed={180}
            backSpeed={180}
            loop
            />           
        </div>
        <div className='flex justify-center'>
        <button className='bg-sky-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3'> Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Hero