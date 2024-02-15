import React from 'react'
import Button from '../../../../components/UI/Button'

function Popular() {
  return (
    <div className='mt-3'>
        <div className='flex items-center bg-red w-[90%] mx-auto gap-3'>
          <Button className='bg-blue-800 w-4 h-8  rounded-md' />
          <p className='text-blue-900 font-semibold'>Popular</p>
      </div>
    </div>
  )
}

export default Popular