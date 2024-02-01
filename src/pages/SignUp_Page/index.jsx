import React from 'react'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'
import { RiCloseCircleLine, RiEyeCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './styles/signup.css'

function SignUpPage() {

  // const [fullname, setFullname] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [number, setNumber] = useState('')


  // const handleChange = (e) =>{
  //   setFullname(e.target.)
  // }


  return (
    <div className='bg-black py-10'>
      <div className='box min-h-screen flex items-center justify-center'>
        <div className='bg-white py-4 border rounded-2xl px-3'>
          <div className='relative'>
            <RiCloseCircleLine className='absolute right-2 mr-2 text-3xl cursor-pointer'/>
          </div>
          <div className='mt-10 w-[70%] mx-auto'>
            <h1 className='font-bold text-center text-xl mb-2'>Sign Up</h1>
            <p className='text-center text-sm'>Where Every Bite Tells a Story, and Every Moment Feels Like Home</p>
          </div>
          <div className='w-[90%] mx-auto my-6'>
            <div>
            <label className='text-black text-sm font-bold' htmlFor="">Full Name</label>
              <Input type='text' placeholder='Full Name' />
            </div>
            <div>
            <label className='text-black text-sm font-bold' htmlFor="">Email ID</label>
              <Input type='email' placeholder='Email' />
            </div>
            <div>
            <label className='text-black text-sm font-bold' htmlFor="">Mobile Number</label>
              <Input type='number' placeholder='Mobile Number' maxLength={10} />
            </div>
            <div className='relative'>
            <label className='text-black text-sm font-bold' htmlFor="">Password</label>
              <Input type='password' placeholder='Password' required/>
              <RiEyeCloseLine className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer'/>
            </div>
            <div className='relative'>
            <label className='text-black text-sm font-bold' htmlFor="">Confirm Password</label>
              <Input type='password' placeholder='Confirm Password' required/>
              <RiEyeCloseLine className='absolute right-2 top-9  h-6 w-6 pr-2 cursor-pointer'/>
            </div>
            <div>
              <Button label='Sign Up'/>
            </div>
            <div className='text-center py-3'>
              <p className=''>Already have an account? <Link to={'/'} className='text-blue-500'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage