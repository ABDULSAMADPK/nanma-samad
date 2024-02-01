import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { RiCloseCircleLine, RiEyeCloseLine } from "react-icons/ri";
import './styles/style.css'

function LogInPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className='bg-black'>
            <div className='box min-h-screen flex items-center justify-center'>
                <div className='box-item border pb-4 pt-4 bg-white rounded-2xl'>
                    <div className='relative'>
                        <RiCloseCircleLine className="absolute right-2 mr-4 text-3xl cursor-pointer" />
                    </div>
                    <div className='bg-white mt-12'>
                        <h1 className='text-center text-xl font-bold mb-2'>Welcome back !</h1>
                        <p className='text-center text-sm my-0 mx-auto w-[70%]'>Where Every Bite Tells a Story, and Every Moment Feels Like Home</p>
                    </div>
                    <div className='input-field my-12 mx-auto w-[80%]'>
                        <div className=''>
                            <label className='text-black text-sm font-bold' htmlFor="">Email ID/Mobile Number</label>
                            <Input type='text' value={username} onChange={handleChange} placeholder='Mobile Number' />
                        </div>
                        <div className='relative'>
                            <label className='text-black-600 text-sm font-bold' htmlFor="">Password</label>
                            <Input type='password' value={password} onChange={handlePassword} placeholder='********' />
                            <RiEyeCloseLine className="absolute h-6 w-7 top-9 inset-y-0 right-1 pr-3 flex items-center cursor-pointer" />
                        </div>
                        <div className=''>
                        <Button label='Login' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInPage