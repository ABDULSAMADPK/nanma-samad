import React from 'react'
import Input from './Input'
import { LuSendHorizonal } from "react-icons/lu";
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from 'react-icons/ri';
import  app from '../images/app.png'
import  play from '../images/play.png'
import  Qr from '../images/Qr.png'

function Footer() {
    return (
        <div className='bg-black pt-16 mt-4 mx-auto'>
            <div className='w-[90%] mx-auto justify-between flex flex-wrap'>
                <div className='text-white lg:w-[18%] w-[45%] md:w-[30%]'>
                    <h1 className='text-lg font-bold py-4'>Exclusive</h1>
                    <p className='pb-2'>Subscribe</p>
                    <p className='pb-2'>Get 10% off your first order</p>
                    <div className='relative'>
                        <Input className='bg-black text-stone-200 rounded-md py-2 px-3 mb-3 mt-1 border border-white w-[100%]' placeholder='Enter your email' />
                        <LuSendHorizonal className='absolute right-3 sm:right-3 lg:right-2 top-4 h-5 w-5' />
                    </div>
                </div>
                <div className='text-white lg:w-[18%] w-[45%] md:w-[30%]'>
                    <h1 className='text-lg font-bold py-4'>Support</h1>
                    <p className='pb-2'>111 Bijoy sarani, Dhaka Dh 1115, Bangladesh.</p>
                    <p className='pb-2'>exclusive@gmail.com</p>
                    <p className='pb-2'>+88015-88888-9999</p>
                </div>
                <div className='text-white lg:w-[18%] w-[45%] md:w-[30%]'>
                    <h1 className='text-lg font-bold py-4'>Account</h1>
                    <p className='pb-2'>My Account</p>
                    <p className='pb-2'>Login / Register</p>
                    <p className='pb-2'>Cart</p>
                    <p className='pb-2'>Wishlist</p>
                    <p className='pb-2'>Shop</p>
                </div>
                <div className='text-white lg:w-[18%] w-[45%] md:w-[30%]'>
                    <h1 className='text-lg font-bold py-4'>Quick Link</h1>
                    <p className='pb-2'>Privacy Policy</p>
                    <p className='pb-2'>Terms Of Use</p>
                    <p className='pb-2'>FAQ</p>
                    <p className='pb-2'>Contact</p>
                </div>
                <div className='text-white lg:w-[18%] md:w-[30%] w-[45%]'>
                    <h1 className='text-lg font-bold py-4'>Download App</h1>
                    <p className='pb-2 text-xs'>Save $3 with App New User Only</p>
                    <div className='flex pb-3'>
                        <div className='w-[35%] mr-3'>
                            <img src={Qr} alt="" />
                        </div>
                        <div className='w-[55%]'>
                            <img src={play} alt="" className='mb-3 rounded-sm'/>
                            <img src={app} alt="" className='rounded-sm'/>
                        </div>
                    </div>
                    <div className='flex items-center text-2xl'>
                        <RiFacebookLine className='mr-6' />
                        <RiTwitterLine className='mr-6' />
                        <RiInstagramLine className='mr-6' />
                        <RiLinkedinLine />
                    </div>
                </div>
            </div>
            <div className="text-gray-500 text-center mt-3 pt-16 pb-6">
                <p>&copy; ERE Business Solutions 2023. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer