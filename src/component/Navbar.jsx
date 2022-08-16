import React, {useState} from 'react'
import {AiOutlineEllipsis, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className=' shadow-md flex justify-between items-center h-24 w-full px-10 text-white '>
        <h1 className=' w-full text-3xl font-bold text-[#4e6eff]'>AMAR.</h1>
        <ul className=' hidden md:flex '>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Portofolio</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineEllipsis size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#121212] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className=' w-full px-6 text-3xl font-bold text-[#4e6eff] pt-10'>AMAR.</h1>

        <ul className='block md:hidden uppercase p-4'>
            <li className='p-4 border-b border-gray-100'>Home</li>
            <li className='p-4 border-b border-gray-100'>About</li>
            <li className='p-4 border-b border-gray-100'>Portofolio</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar