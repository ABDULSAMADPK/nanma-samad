import React, { useState } from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { RiCloseCircleLine } from 'react-icons/ri'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import './styles/signup.css'
import usePostRequest from '../../hook/api/usePostRequest';
import EmailValidation from '../../utils/validators/EmailValidation';
import NumberValidation from '../../utils/validators/NumberValidation';
import PasswordValidation from '../../utils/validators/PasswordValidation';
// import { routes } from '../../constants/routes'

function SignUpPage() {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmpassword: ''
  })

  const {
    loading,
    error: apiErrors,
    postData,
  } = usePostRequest({
    url: "https://portal.umall.in/api/customer/register",
    successCB: signUpSuccess
  });
  const navigate = useNavigate()

  const [errors, setErrors] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    const namePattern = /^[A-Za-z]{3,20}$/;
    const errors = {}
    if (inputs.name === '') {
      errors.name = 'Enter your name'
    }
    else if (!namePattern.test(inputs.name)) {
      errors.name = 'Name should be 3-16 characters, dont add any symbol or number'
    }
    const emailError = EmailValidation(inputs.email)
    if (emailError) {
      errors.email = emailError
    }
    const passwordError = PasswordValidation(inputs.password)
    if (passwordError) {
      errors.password = passwordError
    }
    const phoneError = NumberValidation(inputs.phone)
    if (phoneError) {
      errors.phone = phoneError
    }
    if (inputs.confirmpassword === '') {
      errors.confirmpassword = 'Confirm Password is required'
    } else if (inputs.password !== inputs.confirmpassword) {
      errors.confirmpassword = 'Password is not matching'
    }
    setErrors(errors)
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      await postData({
        body: {
          name: inputs.name, email: inputs.email, password: inputs.password, phone: inputs.phone
        },
      });
    }
  }

  function signUpSuccess({ data = {} }) {
    const registerData = data
    console.log(registerData,'register');
    if (registerData.user.id) {
      alert(`Registration ${registerData.msg}`)
      navigate('/login');
    } else {
      alert('User ID not found in response data');
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputs({ ...inputs, [name]: value })
  }

  const [visible, setVisible] = useState(true)
  const [confirmVisible, setConfirmVisible] = useState(true)

  const classNamebtn = 'btn bg-blue-900 text-white mt-6 text-lg py-2 px-4 w-full rounded-3xl'
  const classNameinput = 'bg-stone-200 rounded-md focus:outline-none py-2 px-3 mt-1 w-full'

  if (loading) {
    <p className='flex items-center justify-center text-white text-xl'>Loading...</p>
  }

  if (apiErrors) {
    <p className='text-white text-xl'>Error: {apiErrors}</p>
  }

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
              <Input className={classNameinput} type='text' placeholder='Name' name='name' value={inputs.name} onChange={handleChange} />
              {errors.name && <span>{errors.name}</span>}
              {/* <span>Name should be 3-16 characters, dont add any symbol or number</span> */}
            </div>
            <div className='mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Email ID</label>
              <Input className={classNameinput} type='email' placeholder='Email' name='email' value={inputs.email} onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>}
              {/* <span>Please enter a valid Email ID</span> */}
            </div>
            <div className='mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Mobile Number</label>
              <Input className={classNameinput} type='number' placeholder='Mobile Number' name='phone' value={inputs.phone} onChange={handleChange} />
              {errors.phone && <span>{errors.phone}</span>}
              {/* <span>Please enter a valid number</span> */}
            </div>
            <div className='relative mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Password</label>
              <Input className={classNameinput} type={visible ? 'password' : 'text'} placeholder='Password' name='password' value={inputs.password} onChange={handleChange} />
              {visible ? <AiOutlineEyeInvisible onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9 h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setVisible(!visible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' />}
              {errors.password && <span>{errors.password}</span>}
              {/* <span>Password must have minimum 8 characters, 1 symbol, 1 letter and 1 number</span> */}
            </div>
            <div className='relative mt-3'>
              <label className='text-black text-sm font-bold' htmlFor="">Confirm Password</label>
              <Input className={classNameinput} type={confirmVisible ? 'password' : 'text'} placeholder='Confirm Password' name='confirmpassword' value={inputs.confirmpassword} onChange={handleChange} />
              {confirmVisible ? <AiOutlineEyeInvisible onClick={() => { setConfirmVisible(!confirmVisible) }} className='absolute right-2 top-9 h-6 w-6 pr-2 cursor-pointer' /> : <AiOutlineEye onClick={() => { setConfirmVisible(!confirmVisible) }} className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer' />}
              {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
              {/* <span>Password is not matching</span> */}
            </div>
            <div>
              <Button className={classNamebtn} label='Sign Up' />
            </div>
            <div className='text-center pt-4 pb-2'>
              <p className=''>Already have an account? <Link to={'/login'} className='text-blue-500'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage