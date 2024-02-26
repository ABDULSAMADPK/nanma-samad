import React from 'react'
import Navbar from '../../components/UI/Navbar'
import Footer from '../../components/UI/Footer'

function About_Us() {
    return (
        <div>
            <Navbar />
            <div className='w-[92%] mx-auto h-screen'>
                <h2 className='text-center mt-16 font-bold'>About Us</h2>
                <p className='mt-6'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About_Us