import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import './styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../../utils/validators/Validation';
import usePostRequest from '../../hook/api/usePostRequest';

function LogInPage() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const [errors, setErrors] = useState({})

    const [visible, setVisible] = useState(true)

    const apiUrl = 'https://portal.umall.in/api/customer/login'

    const { data, postData, loading: postLoading, error: postError } = usePostRequest(apiUrl)

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(inputs))
        postData(inputs)
        if (data.user.email === inputs.email && data.user.password === inputs.password) {
            alert('Login Successfull')
            navigate('/')
        } else {
            alert('Invalid User Details!')
        }

    }

    if (postLoading) {
        <p className='flex items-center justify-center'>Loading...</p>
    }

    if (postError) {
        <p>Error: {postError}</p>
    }

    const classNamebtn = 'btn bg-blue-900 text-white mt-6 text-lg py-2 px-4 w-full rounded-3xl'
    const classNameinput = 'bg-stone-200 rounded-md focus:outline-none py-2 px-3 mt-1 w-full'

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
                    <form className='my-12 mx-auto w-[80%]' onSubmit={handleSubmit}>
                        <div className=''>
                            <label className='text-black text-sm font-bold' htmlFor="">Email ID</label>
                            <Input className={classNameinput} name='email' type='email' value={inputs.email} onChange={handleChange} placeholder='Email ID' />
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className='relative mt-3'>
                            <label className='text-black text-sm font-bold' htmlFor="">Password</label>
                            <Input className={classNameinput} name='password' type={visible ? 'password' : 'text'} value={inputs.password} onChange={handleChange} placeholder='Password' />
                            {visible ? <AiOutlineEyeInvisible onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9 h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' />}
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div className=''>
                            <Button className={classNamebtn} label='Login' />
                        </div>
                        <div className='text-center pt-6'>
                            <Link to={'/resetpassword'} className='text-blue-600 cursor-pointer'>Forgot password ?</Link>
                            <p className='pt-4'>Don't have an account? <Link to={'/signup'} className='text-blue-600'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogInPage