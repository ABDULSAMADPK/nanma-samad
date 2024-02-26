import React from 'react'
import Navbar from '../../components/UI/Navbar'
import Footer from '../../components/UI/Footer'
import contact from './images/contact.jpg'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'

function Contact_Us() {
  return (
    <div>
        <Navbar/>
        <div className='w-[92%] mx-auto my-16 lg:flex'>
            <div>
            <img className='lg:w-[500px] xl:w-[650px]' src={contact} alt="" />
            </div>
            <div className=' lg:mx-auto'>
                <h1 className='font-bold text-5xl mt-6 xl:mt-12'>Contact us</h1>
                <div className='flex justify-between'>
                    <div>
                    <h3 className='text-blue-900 text-xl font-bold mt-6 lg:mt-10 xl:mt-14'>Visit us</h3>
                    <p className='mt-3 lg:mt-5 xl:mt-6'>2972 Westheimer Rd.<br />Santa Ana, Illinois<br />85486 </p>
                    </div>
                    <div className='lg:ml-24'>
                        <h3 className='text-blue-900 text-xl font-bold mt-6 lg:mt-10 xl:mt-14'>Contact</h3>
                        <p className='mt-3 lg:mt-5 xl:mt-6'>contact@company.com</p>
                        <p>(406) 555-0120</p>
                    </div>
                </div>
                <div className='flex mt-6 lg:mt-9 xl:mt-14'>
                <Input className='bg-stone-100 rounded-md focus:outline-none py-2 px-3 mt-1 lg:w-72 md:w-96 sm:w-80' placeholder='Email'/>
                <Button className='btn bg-blue-900 text-white mt-1 ml-2 py-2 px-6 rounded-3xl w-full' label='Subscribe' />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact_Us