import React, { useEffect, useRef, useState } from 'react'
import margadarshak from '../../../img/margadarshak.png'
import { User2Icon, Key, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.png'
import Input from '../Login/Input'

function Login() {
    let currentOTPIndex = 0;
    const input = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },

    ]
    const [otp, setOtp] = useState(new Array(4).fill(''));
    const [activeOTPIndex, setActiveOTPIndex] = useState(0)
    const inputRef = useRef(null)
    const handleOnChange = (e) => {
        const value = e.target.value
        const newOtp = [...otp]
        newOtp[currentOTPIndex] = value.substring(value.length - 1)
        setOtp([...newOtp])
        if (!value) setActiveOTPIndex(currentOTPIndex - 1)
        else setActiveOTPIndex(currentOTPIndex + 1)
    }
    useEffect(() => {
        inputRef.current?.focus()
    }, [activeOTPIndex])

    const handleOnKeyDown = (e, index) => {
        currentOTPIndex = index;

        if (e.key === "Tab" || e.key === "ArrowRight") {
            e.preventDefault();
            setActiveOTPIndex((prevIndex) => (prevIndex < input.length - 1 ? prevIndex + 1 : prevIndex));
        }

        if (e.key === "Backspace" && !e.target.value) {
            e.preventDefault();
            setActiveOTPIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        }

        if (e.key === "ArrowLeft") {
            e.preventDefault();
            setActiveOTPIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
        }
    };

    return (
        <div className='h-screen w-screen  '>
            <div className='w-screen h-[90px] bg-white'>
                <img src={margadarshak} alt="" className='ml-20  h-[75px]' />
            </div>
            <div className='w-screen h-[207px] bg-pink-200'>
                <div className='flex flex-col '>
                    <div className='m-20'>
                        <h1 className='text-4xl font-bold'>Login / Register</h1>

                        <h3><Link to='/'>Home</Link> Login / Register</h3>
                    </div>
                </div>
            </div>
            <div className='w-screen h-[700px] lg:mt-0 mt-10  lg:m-0  '>
                <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row lg:m-0'>

                    <div className='w-[95%] h-auto lg:w-[562px] lg:h-[500px] border border-red mt-2 mx-auto lg:ml-20 rounded-xl p-3 lg:p-0 '>
                        <div className='flex ml-10 mt-10 gap-3 '>
                            <img src={logo} alt="" className='w-[10%] h-[10%]' />
                            <h1 className='text-3xl font-bold '  >Login</h1>
                        </div>


                        <div className='flex flex-col justify-center gap-5 items-center'>
                            <div className='flex flex-col justify-center mt-5  w-[90%] border border-blue-500'>

                                <input type="mail" placeholder='Email' className=' outline-blue-500 px-10 w-[100%] py-4 bg-[#f5f5f5]   rounded-md ' />
                                <User2Icon className='absolute text-gray-500 ml-2' />
                            </div>
                            <div className='flex flex-col justify-center mt-2  w-[90%] '>

                                <input type="password" placeholder='Passcode' className='outline-blue-500   px-10 w-[100%] py-4 bg-[#f5f5f5]   rounded-md ' />
                                <Key className=' rotate-90  absolute text-gray-500 ml-2' />
                            </div>

                        </div>
                        <div className='mt-10 flex gap-5 lg:ml-10 ml-5 mx-auto lg:mx-0  '>
                            <input type="checkbox" className='w-[4%] bg-blue-950' defaultChecked='true' />
                            <p>I agree to the Terms of Use and Privacy Policy.</p>
                        </div>

                        <button className='bg-[#525fe1] py-4 w-[90%]  lg:ml-7 ml-3 mt-10 text-white rounded-lg hover:bg-blue-950'>Login</button>

                        <p className=' text-red-600 ml-10 mt-8 cursor-pointer'>Forget Password ?</p>

                    </div>
                    <div className=' w-[95%] h-auto lg:w-[562px] lg:h-[600px] border border-red mt-2 mx-auto lg:ml-10 rounded-xl p-3 lg:p-0 mb-3 lg:mb-0'>
                        <div className='flex ml-10 mt-10 gap-3 '>
                            <img src={logo} alt="" className='w-[10%] h-[10%]' />
                            <h1 className='text-3xl font-bold '  >Register</h1>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <Input className='bg-[#f5f5f5] border-none hover:bg-[#f5f5f5] ' />
                            {/* <input id='phone' type="Number" placeholder='8124137625' className='w-[53%] px-5 py-4 bg-[#f5f5f5]  mt-5 rounded-lg ' /> */}
                            <div className='flex flex-col justify-center items-center mr-0 lg:mr-8'>
                                <p className='mb-2'>Verify SMS code</p>

                                <div className='flex  gap-2  ' >
                                    {input.map(({ id }, index) => (
                                        <input key={index}
                                            ref={index === activeOTPIndex ? inputRef : null}
                                            type="Number" className='bg-[#f5f5f5] w-[40px] h-[40px] p-2 border-b-2 border-black  rounded-md'
                                            onChange={handleOnChange}
                                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                                            value={otp[index]} />
                                    ))}
                                    {/* <input type="Number" className='bg-[#f5f5f5] w-[40px] h-[40px] border-b-2 border-black  rounded-md' />
                                    <input type="Number" className='bg-[#f5f5f5] w-[40px] h-[40px] border-b-2 border-black  rounded-md' />
                                    <input type="Number" className='bg-[#f5f5f5] w-[40px] h-[40px] border-b-2 border-black  rounded-md' />
                                    <input type="Number" className='bg-[#f5f5f5] w-[40px] h-[40px] border-b-2 border-black  rounded-md' /> */}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-5 items-center mt-3'>


                            <div className='flex flex-col justify-center mt-5  w-[90%] '>

                                <input type="mail" placeholder='Email' className=' outline-blue-500 px-10 w-[100%] py-4 bg-[#f5f5f5]   rounded-md ' />
                                <Mail className='absolute text-gray-500 ml-2' />
                            </div>
                            <div className='flex flex-col justify-center mt-2  w-[90%] '>

                                <input type="password" placeholder='Passcode' className='outline-blue-500   px-10 w-[100%] py-4 bg-[#f5f5f5]   rounded-md ' />
                                <User2Icon className=' absolute text-gray-500 ml-2' />
                            </div>
                            <select id="country" name="country" default='Student /Jobseeker' className=' appearance-none px-5 w-[90%] py-4 bg-[#f5f5f5]  mt-3 rounded-lg  ' >
                                <option value="Student /Jobseeker" disabled >UserType</option>
                                <option value="Student /Jobseeker">Student /Jobseeker</option>
                                <option value="Counsellor/Trainer">Counsellor/Trainer</option>
                            </select>
                        </div>



                        <div className='lg:ml-10 ml-5 mt-10 flex gap-5'>
                            <input type="checkbox" defaultChecked='true' className='w-[4%]  bg-blue-950 checked:bg-blue-600' />
                            <p className=''>I agree to the Terms of Use and Privacy Policy.</p>
                        </div>
                        <button className='bg-[#525fe1] py-4 w-[90%]  lg:ml-7 ml-3 mt-10 text-white rounded-lg hover:bg-blue-950'>Register</button>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login