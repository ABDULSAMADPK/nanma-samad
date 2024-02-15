import React from 'react'
import Button from '../../../../components/UI/Button'
import CategoryCard from '../UI/CategoryCard'


function Category() {
  const classNamebtn = ''
  return (
    <div className='mt-4'>
      <div className='flex items-center justify-between bg-red w-[90%] mx-auto'>
        <div className='flex gap-3 items-center'>
          <Button className='bg-blue-800 w-4 h-8  rounded-md' />
          <p className='text-blue-900 font-semibold'>Categories</p>
        </div>
        <p className='text-end cursor-pointer'>See all</p>
      </div>
      <div>
        <div className='flex items-center justify-between mx-auto w-[90%] mt-3'>
          <CategoryCard label='Hoodies' />
          <CategoryCard label='Hoodies' />
          <CategoryCard label='Hoodies' />
          <CategoryCard label='Hoodies' />
          <CategoryCard label='Hoodies' className='hidden sm:block' />
          <CategoryCard label='Hoodies' className='hidden md:block' />
          <CategoryCard label='Hoodies' className='hidden lg:block' />
          <CategoryCard label='Hoodies' className='hidden lg:block' />
          <CategoryCard label='Hoodies' className='hidden xl:block' />
          <CategoryCard label='Hoodies' className='hidden xl:block' />
        </div>
      </div>
    </div>
  )
}

export default Category