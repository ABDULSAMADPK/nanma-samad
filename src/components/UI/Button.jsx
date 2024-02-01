import React from 'react'
import '../styles/style.css'

const Button = ({label}) => {
  return (
    <div>
      <button className='btn bg-blue-900 text-white mt-6 text-lg py-2 px-4 w-full rounded-3xl'>{label}</button>
    </div>
  )
}

export default Button
