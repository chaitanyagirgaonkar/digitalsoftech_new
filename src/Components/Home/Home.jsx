import React from 'react'
import img from '../../../img/home.png'
import Navbar from '../Header/Navbar'
function Home() {
    return (
        <>
            <Navbar />
            <div className='h-screen w-screen bg-blue-500'>
                <img src={img} alt="" />
            </div>
        </>
    )
}

export default Home