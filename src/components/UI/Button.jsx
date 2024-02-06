import React from 'react'
import '../styles/style.css'

const Button = ({className, label }) => {
  
  return (
    <div>
      <button className={className}>{label}</button>
    </div>
  )
}

export default Button
