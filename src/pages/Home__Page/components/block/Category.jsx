import React from 'react'
import Button from '../../../../components/UI/Button'
import CategoryCard from '../UI/CategoryCard'


function Category() {
  const classNamebtn = ''
  return (
    <div className='mt-9'>
      <div className='flex items-center justify-between bg-red w-[92%] mx-auto'>
        <div className='flex gap-3 items-center'>
          <Button className='bg-blue-800 w-4 h-8  rounded-md' />
          <p className='text-blue-900 font-semibold'>Categories</p>
        </div>
        <p className='text-end cursor-pointer'>See all</p>
      </div>
      <div>
        <div className='flex items-center justify-between mx-auto w-[92%] mt-3 gap-4'>
          <CategoryCard label='Shoes' />
          <CategoryCard label='Shoes' />
          <CategoryCard label='Shoes' />
          <CategoryCard label='Shoes' />
          <CategoryCard label='Shoes' className='hidden sm:block' />
          <CategoryCard label='Shoes' className='hidden md:block' />
          <CategoryCard label='Shoes' className='hidden lg:block' />
          <CategoryCard label='Shoes' className='hidden lg:block' />
        </div>
      </div>
    </div>
  )
}

export default Category