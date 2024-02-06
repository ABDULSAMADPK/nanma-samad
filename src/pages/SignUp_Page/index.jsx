import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { RiCloseCircleLine } from 'react-icons/ri'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import './styles/signup.css'
import Validation from '../../utils/validators/Validation';

function SignUpPage() {


  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    confirmpassword: ''
  })

  const [errors, setErrors] = useState({})
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs);
    setErrors(Validation(inputs))
  }


  const handleChange = (event) => {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  const [visible, setVisible] = useState(true)
  const [confirmVisible, setConfirmVisible] = useState(true)

  const className = 'bg-stone-200 rounded-md focus:outline-none py-2 px-3 mt-1 w-full'

  return (
    <div className='bg-black py-10'>
      <div className='box min-h-screen flex items-center justify-center'>
        <div className='bg-white py-4 border rounded-2xl px-3'>
          <div className='relative'>
            <RiCloseCircleLine className='absolute right-2 mr-2 text-3xl cursor-pointer' />
          </div>
          <div className='mt-10 w-[70%] mx-auto'>
            <h1 className='font-bold text-center text-xl mb-2'>Sign Up</h1>
            <p className='text-center text-sm'>Where Every Bite Tells a Story, and Every Moment Feels Like Home</p>
          </div>
          <form className='w-[90%] mx-auto my-6' onSubmit={handleSubmit}>
            <div>
              <label className='text-black text-sm font-bold' htmlFor="">Name</label>
              <Input className={className} type='text' placeholder='Name' name='name' value={inputs.name} onChange={handleChange} />
              {errors.name && <span>{errors.name}</span>}
              {/* <span>Name should be 3-16 characters, dont add any symbol or number</span> */}
            </div>
            <div className='mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Email ID</label>
              <Input className={className} type='email' placeholder='Email' name='email' value={inputs.email} onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>}
              {/* <span>Please enter a valid Email ID</span> */}
            </div>
            <div className='mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Mobile Number</label>
              <Input className={className} type='text' placeholder='Mobile Number' name='number' value={inputs.number} onChange={handleChange} />
              {errors.number && <span>{errors.number}</span>}
              {/* <span>Please enter a valid number</span> */}
            </div>
            <div className='relative mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Password</label>
              <Input className={className} type={visible ? 'password' : 'text'} placeholder='Password' name='password' value={inputs.password} onChange={handleChange} />
              {visible ? <AiOutlineEyeInvisible onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' />}
              {errors.password && <span>{errors.password}</span>}
              {/* <span>Password must have minimum 8 characters, 1 symbol, 1 letter and 1 number</span> */}
            </div>
            <div className='relative mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Confirm Password</label>
              <Input className={className} type={confirmVisible ? 'password' : 'text'} placeholder='Confirm Password' name='confirmpassword' value={inputs.confirmpassword} onChange={handleChange} />
              {confirmVisible ? <AiOutlineEyeInvisible onClick={() => { setConfirmVisible(!confirmVisible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setConfirmVisible(!confirmVisible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' />}
              {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
              {/* <span>Password is not matching</span> */}
            </div>
            <div>
              <Button label='Sign Up' />
            </div>
            <div className='text-center pt-4 pb-2'>
              <p className=''>Already have an account? <Link to={'/'} className='text-blue-500'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage