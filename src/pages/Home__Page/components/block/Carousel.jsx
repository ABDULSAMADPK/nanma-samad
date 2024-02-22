import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";
import logo from '../../images/logo.png'
import iphone from '../../images/iphone.jpg'

function Carousel() {
  return (
    <div className='mt-6'>
      <div className='bg-black flex items-center justify-between w-[92%] mx-auto'>
        <div className='text-white w-[100%] py-12 pl-4 sm:ml-12 md:ml-20 lg:ml-32'>
          <div className='flex gap-2 items-center'>
            <img src={logo} alt="" className='w-10' />
            <p className='text-sm mt-3'>iPhone 14 series</p>
          </div>
          <h1 className='fontbold leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2] mt-3 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl'>Up to 10% <br/>off Voucher</h1>
          <div className='flex items-center cursor-pointer pb-3 gap-3 mt-3'><p className='underline underline-offset-8'>Shop Now</p> <HiOutlineArrowRight className='' /> </div>
        </div>
        <div className='w-[100%] mt-6'>
          <img src={iphone} alt="" className='' />
        </div>
      </div>
    </div>
  )
}

export default Carousel