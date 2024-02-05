import React from 'react'
import '../styles/style.css'

function Input({ className, type, value, onChange, placeholder, name }) {


    return (
        <div>
            <input className={className} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        </div>
    )
}

export default Input