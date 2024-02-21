import React from 'react'
import hoodie from '../../images/hoodie.jpg'
import { PiHeart } from "react-icons/pi";

function PopularCard() {
  return (
    <div className='mt-4 bg-gray-100 rounded-lg w-[45%] md:w-[30%] lg:w-[23%] xl:w-[23%]'>
        <div className='flex pt-3 pr-3'>
            <img src={hoodie} alt="" className='w-[80%]'/>
            <PiHeart className='w-[13%] w-10 h-5'/>
        </div>
        <p className='ml-3 mt-3'>Men's Ice-Dye Pullover Hoodie</p>
        <p className='ml-3 my-3'>₹128.97</p>
    </div>
  )
}

export default PopularCard