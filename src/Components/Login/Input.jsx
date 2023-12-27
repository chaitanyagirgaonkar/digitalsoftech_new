import React from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
function Input() {

    return (
        <PhoneInput country={'in'} id='phone' type="Number" placeholder='8124137625' className=' h-[50%] w-[50%] lg:w-full mt-10 ml-8' />
    )
}

export default Input