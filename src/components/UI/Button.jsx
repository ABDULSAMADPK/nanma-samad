import React from 'react'
import '../styles/style.css'

const Button = ({className, label, click }) => {
  
  return (
    <div>
      <button onClick={click} className={className}>{label}</button>
    </div>
  )
}

export default Button
