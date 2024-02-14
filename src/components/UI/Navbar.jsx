import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";

function Navbar() {
    return (
        <div className='p-3 lg:border-b-2'>
            <nav className='w-[90%] mx-auto flex items-center justify-between'>
                <RiMenu2Line className='text-3xl cursor-pointer lg:hidden' />
                <div className='hidden lg:block'>
                    <Link to={'/'} className='text-lg font-bold'>Nanma</Link>
                </div>
                <div className='lg:static lg:min-h-fit absolute bg-white min-h-[40vh] left-0 top-[-100%] flex items-center lg:w-auto w-5/12 px-5'>
                    <ul className='flex lg:flex-row flex-col lg:items-center lg:mx-auto lg:gap-[4VW] gap-6'>
                        <li className=''>
                            <Link to={'/'} className='text-blue-700 underline underline-offset-4'>Home</Link>
                        </li>
                        <li className=''>
                            <Link to={'/contact'} className=''>Contact</Link>
                        </li>
                        <li className=''>
                            <Link to={'/about'} className=''>About</Link>
                        </li>
                        <li className=''>
                            <Link to={'/Signup'} className=''>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <div className='relative'>
                    <Input className='bg-stone-200 rounded-md focus:outline-none py-2 px-4 w-72' placeholder='What are you looking for?' />
                    <CiSearch className='absolute right-2 top-2 h-6 w-6 cursor-pointer' />
                </div>
                <div className='flex items-center gap-3'>
                    <IoPersonOutline className='text-2xl cursor-pointer' />
                    <IoCartOutline className='text-2xl cursor-pointer' />
                </div>
            </nav>

        </div>
    )
}

export default Navbar