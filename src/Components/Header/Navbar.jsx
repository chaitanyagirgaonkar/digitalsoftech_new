import React from 'react'
import margadarshak from '../../../img/margadarshak.png'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart, UserRoundIcon } from 'lucide-react'


function Navbar() {

    const navigate = useNavigate()
    return (
        <div className='bg-white w-screen h-[118px]'>
            <div className='flex justify-between items-center'>
                <div className='mt-4 ml-4'>
                    <img src={margadarshak} alt="" />
                </div>
                <div className='flex gap-5 mt-5'>
                    <button className='bg-blue-600 text-white px-3 py-3  rounded-full'><ShoppingCart /></button>

                    <button className='bg-blue-600 text-white px-5 py-3 mr-10 rounded-md flex gap-2' onClick={() => navigate('/login')}><UserRoundIcon />Login</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar