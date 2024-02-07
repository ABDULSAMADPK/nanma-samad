import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

  return (
    <div>
        <Link className='text-3xl m-12' to={'/login'}>Login</Link>
    </div>
  )
}

export default HomePage