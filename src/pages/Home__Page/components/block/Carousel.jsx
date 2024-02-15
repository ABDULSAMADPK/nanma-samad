import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi2";

function Carousel() {
  return (
    <div className='mt-6'>
      <div className='bg-black min-h-fit flex items-center justify-between w-[90%] mx-auto py-16'>
        <div className='text-white xl:w-[27%] lg:w-[35%] md:w-[45%] sm:w-[46%] w-[52%] mx-auto'>
          <div className=''>
            <img src="" alt="" />
            <p className='text-sm mt-3'>iPhone 14 series</p>
          </div>
          <h1 className='md:text-6xl fontbold md:leading-[70px] mt-3 text-3xl'>Up to 10% off Voucher</h1>
          <div className='flex items-center cursor-pointer pb-3 gap-3 mt-3'><p className='underline underline-offset-8'>Shop Now</p> <HiOutlineArrowRight className='' /> </div>
        </div>
        <div className='xl:w-[57%] lg:w-[55%] w-[40%]'>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Carousel