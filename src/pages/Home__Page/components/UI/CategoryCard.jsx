import React from 'react'
import shoe from '../../images/shoe.png'

function CategoryCard({label, className}) {
    return (
        
        <div className={className}>
            <div className='bg-gray-200 rounded-[50%]'>
                <img src={shoe} alt="" className='w-[100px] md:w-full rounded-[50%]'/>
            </div>
            <p className='text-center my-2'>{label}</p>
        </div>
    )
}

export default CategoryCard