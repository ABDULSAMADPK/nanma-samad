import React from 'react'
import '../styles/style.css'

function Input({ type, value, onChange, placeholder }) {
    return (
        <div>
            <input className='input bg-stone-200 rounded-md focus:outline-none py-2 px-2 mb-3 mt-1 w-full' type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}

export default Input