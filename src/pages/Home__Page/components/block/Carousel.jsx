import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";
import logo from '../../images/logo.png'
import iphone from '../../images/iphone.jpg'

function Carousel() {
  return (
    <div className='mt-6'>
      <div className='bg-black flex items-center justify-between w-[90%] mx-auto'>
        <div className='text-white xl:w-[26%] lg:w-[35%] md:w-[45%] sm:w-[43%] w-[48%] mx-auto py-16'>
          <div className='flex gap-2 items-center'>
            <img src={logo} alt="" className='w-[21%]' />
            <p className='text-sm mt-3'>iPhone 14 series</p>
          </div>
          <h1 className='md:text-6xl fontbold md:leading-[70px] mt-3 text-3xl'>Up to 10% off Voucher</h1>
          <div className='flex items-center cursor-pointer pb-3 gap-3 mt-3'><p className='underline underline-offset-8'>Shop Now</p> <HiOutlineArrowRight className='' /> </div>
        </div>
        <div className='xl:w-[57%] lg:w-[55%] sm:w-[51%] w-[48%] pb-6'>
          <img src={iphone} alt="" className='lg:min-h-52 md:min-h-64 min-h-56' />
        </div>
      </div>
    </div>
  )
}

export default Carousel