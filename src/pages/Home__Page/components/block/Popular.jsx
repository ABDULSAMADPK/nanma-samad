import React from 'react'
import Button from '../../../../components/UI/Button'
import PopularCard from '../UI/PopularCard'

function Popular() {
  return (
    <div className='mt-12'>
        <div className='flex items-center bg-red w-[92%] mx-auto gap-3'>
          <Button className='bg-blue-800 w-4 h-8  rounded-md' />
          <p className='text-blue-900 font-semibold'>Popular</p>
      </div>
      <div className='flex flex-wrap items-center w-[92%] mx-auto justify-between'>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
        <PopularCard/>
      </div>
    </div>
  )
}

export default Popular