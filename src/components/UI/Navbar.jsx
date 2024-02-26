import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Input from './Input'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import nanma from '../images/nanma.png';

function Navbar() {

    const [open, setOpen] = useState(false)

    const { pathname } = useLocation()
    const subpage = pathname.split('/')?.[1]

    const Linkness = (type = null) => {

        let classes = 'text-blue-700 underline underline-offset-4'

        if (type === subpage) {
            classes;
        }
        else {
            classes = '';
        }
        return classes
    }

    return (
        <div className='py-3 lg:border-b-2'>
            <nav className='w-[92%] mx-auto flex items-center justify-between'>
                <RiMenu2Line onClick={() => setOpen(!open)} className={`text-3xl cursor-pointer lg:hidden `} />
                <div className='hidden lg:block'>
                    <Link to={'/'}><img className='w-20' src={nanma} alt="" /></Link>
                </div>
                <div className={`lg:static absolute bg-white left-0 text-center lg:w-auto w-full lg:pt-0 sm:pt-6 pt-16 lg:pb-0 pb-6 ${open ? 'top-12' : 'top-[-250px]'}`}>
                    <ul className='flex lg:flex-row flex-col lg:items-center lg:mx-auto lg:gap-[4VW] gap-6'>
                        <li className=''>
                            <Link to={'/'} className={Linkness('')} onClick={() => setOpen(!open)}>Home</Link>
                        </li>
                        <li className=''>
                            <Link to={'/contact'} className={Linkness('contact')} onClick={() => setOpen(!open)}>Contact</Link>
                        </li>
                        <li className=''>
                            <Link to={'/about'} className={Linkness('about')} onClick={() => setOpen(!open)}>About</Link>
                        </li>
                        <li className=''>
                            <Link to={'/Signup'} className='' onClick={() => setOpen(!open)}>Sign Up</Link>
                        </li>
                    </ul>
                </div>
                <div className='relative hidden sm:block'>
                    <Input className='bg-stone-200 rounded-md focus:outline-none py-2 px-4 w-72' placeholder='What are you looking for?' />
                    <CiSearch className='absolute right-2 top-2 h-6 w-6 cursor-pointer' />
                </div>
                <div className='flex items-center gap-3'>
                    <IoPersonOutline className='text-2xl cursor-pointer' />
                    <IoCartOutline className='text-2xl cursor-pointer' />
                </div>
            </nav>
            <div className='relative sm:hidden w-[92%] mx-auto mt-3'>
                <CiSearch className='absolute top-2 left-2 h-6 w-6 cursor-pointer' />
                <Input className='bg-stone-200 rounded-md focus:outline-none py-2 px-4 w-full pl-9' placeholder='What are you looking for?' />
            </div>

        </div>
    )
}

export default Navbar