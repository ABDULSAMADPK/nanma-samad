import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Validation from '../../utils/validators/Validation'
import { useNavigate } from 'react-router-dom'

function ResetPasswordPage() {

    const [inputs, setInputs] = useState({
        number: '',
        otp: '',
        resetpassword: '',
        confirmresetpassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const navigate = useNavigate
    const [errors,setErrors] =useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
        setErrors(Validation(inputs))
        if(errors){
            navigate('/')
        }
    }

    const [visible, setVisible] = useState(true)
    const [confirmVisible, setConfirmVisible] = useState(true)

    const className = 'bg-stone-200 rounded-md focus:outline-none py-2 px-3 mt-1 w-full'

    return (
        <div className='bg-black py-10'>
            <div className='box min-h-screen flex items-center justify-center'>
                <div className='bg-white py-4 border rounded-2xl px-3'>
                    <div className='mt-3 mx-auto w-[70%]'>
                        <h1 className='text-center text-xl font-bold mb-2'>Welcome back !</h1>
                        <p className='text-center text-sm mt-5'>Where Every Bite Tells a Story, and Every Moment Feels Like Home</p>
                    </div>
                    <form className='mx-auto w-[80%]' onSubmit={handleSubmit}>
                        <div className='mt-8'>
                            <Input className={className} name='number' type='text' value={inputs.number} onChange={handleChange} placeholder='Mobile Number' />
                            {errors.number && <span>{errors.number}</span>}
                        </div>
                        <div className='flex justify-end'>
                            <Button className='btn bg-blue-900 text-white my-3 text-lg py-2 px-4 rounded-xl' label='Get OTP' />
                        </div>
                        <div className=''>
                            <Input className={className} name='otp' type='text' value={inputs.otp} onChange={handleChange} placeholder='Enter OTP' />
                            {errors.otp && <span>{errors.otp}</span>}
                        </div>
                        <div className='relative mt-3'>
                            <Input className={className} name='resetpassword' type={visible?'password':'text'} value={inputs.resetpassword} onChange={handleChange} placeholder='Reset Password' />
                            {visible ? <AiOutlineEyeInvisible onClick={() => { setVisible(!visible) }} className='absolute right-2 top-3 h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setVisible(!visible) }} className='absolute right-2 top-3 h-6 w-6 pr-2 cursor-pointer' />}
                            {errors.resetpassword && <span>{errors.resetpassword}</span>}
                        </div>
                        <div className='relative mt-3'>
                            <Input className={className} name='confirmresetpassword' type={confirmVisible?'password':'text'} value={inputs.confirmresetpassword} onChange={handleChange} placeholder='Confirm Password' />
                            {confirmVisible ? <AiOutlineEyeInvisible onClick={() => { setConfirmVisible(!confirmVisible) }} className='absolute right-2 top-3 h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setConfirmVisible(!confirmVisible) }} className='absolute right-2 top-3 h-6 w-6 pr-2 cursor-pointer' />}
                            {errors.confirmresetpassword && <span>{errors.confirmresetpassword}</span>}
                        </div>
                        <div>
                            <Button className='btn bg-blue-900 text-white my-6 text-lg py-2 px-4 w-full rounded-3xl' label='Reset Password' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage