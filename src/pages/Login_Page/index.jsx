import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import './styles/login.css'
import { Link } from 'react-router-dom';

function LogInPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [visible, setVisible] = useState(true)

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log('samad');
    }

    const className = 'bg-stone-200 rounded-md focus:outline-none py-2 px-3 mb-3 mt-1 w-full'

    return (
        <div className='bg-black'>
            <div className='box min-h-screen flex items-center justify-center'>
                <div className='box-item border py-4 bg-white rounded-2xl'>
                    <div className='relative'>
                        <RiCloseCircleLine className="absolute right-2 mr-4 text-3xl cursor-pointer" />
                    </div>
                    <div className='mt-12 mx-auto w-[70%]'>
                        <h1 className='text-center text-xl font-bold mb-2'>Welcome back !</h1>
                        <p className='text-center text-sm'>Where Every Bite Tells a Story, and Every Moment Feels Like Home</p>
                    </div>
                    <form className='input-field my-12 mx-auto w-[80%]' onSubmit={handleSubmit}>
                        <div className=''>
                            <label className='text-black text-sm font-bold' htmlFor="">Email ID/Mobile Number</label>
                            <Input className={className} errorMessage='' type='text' value={username} setValue={setUsername} placeholder='Mobile Number' />
                        </div>
                        <div className='relative'>
                            <label className='text-black text-sm font-bold' htmlFor="">Password</label>
                            <Input className={className} errorMessage='' type={visible ? 'password' : 'text'} value={password} setValue={setPassword} placeholder='Password' />
                            {visible ? <AiOutlineEyeInvisible onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' />}
                        </div>
                        <div className=''>
                            <Button label='Login' />
                        </div>
                        <div className='text-center pt-6'>
                            <p className='text-blue-600 cursor-pointer'>Forgot password ?</p>
                            <p className='pt-4'>Don't have an account? <Link to={'/signup'} className='text-blue-600'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInPage