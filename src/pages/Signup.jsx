import { useEffect, useState } from "react"
import { google, line, loginImage, } from "../assets"
import { BsCheck } from 'react-icons/bs'
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberUser, setRememberUser] = useState(false);

    useEffect(() => {
        console.log('clicked')
    }, [rememberUser])

    return (
        <div className='w-full sm:flex sm:flex-row h-screen'>
            <div className='bg-primary2 flex-col items-center justify-center h-full w-[55%] hidden sm:flex'>
                <div className="flex flex-col gap-2 max-w-[90%]">
                    <h2 className="text-primary3 text-2xl w-[420px] font-bold">Discover the power of teamwork with TeamLinkup</h2>
                    <p className="text-gray-text font-bold">Uniting Visions for Success</p>
                    <img src={loginImage} alt="svg" className="w-[586px] h-auto" />
                </div>
            </div>
            <div className='h-full sm:w-[65%] bg-primary1 px-5'>
                <div className="w-full">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="flex-col my-4">
                            <h2 className="text-4xl font-bold text-primary3 mb-8">Create an account</h2>
                            <form className="flex flex-col gap-4 w-[31rem]">
                                <div className="flex flex-row gap-4">
                                    <input
                                        type="text"
                                        className="w-1/2 border-solid border border-black text-2xl rounded p-3 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                        placeholder='First Name'
                                    />
                                    <input
                                        type="text"
                                        className="w-1/2 border-solid border border-black text-2xl rounded p-3 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                        placeholder='Last Name'
                                    />
                                </div>
                                <input
                                    type="text"
                                    className="w-full border-solid border border-black text-2xl rounded p-3 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                    placeholder='Username'
                                />
                                <input
                                    type="email"
                                    className="w-full border-solid border border-black text-2xl rounded p-3 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                    placeholder='Email'
                                />
                                <input
                                    type="text"
                                    className="w-full border-solid border border-black text-2xl rounded p-3 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                    placeholder='Phone Number'
                                />
                                <input
                                    type="password"
                                    className="w-full border-solid border border-black text-2xl rounded p-3 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                    placeholder='Password'
                                />
                                <input
                                    type="password"
                                    className="w-full border-solid border border-black text-2xl rounded p-3 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                    placeholder='Confirm Password'
                                />

                                <div className="flex justify-between flex-row w-[449px]">
                                    <div className="flex items-center gap-2 text-gray-text font-medium">
                                        <span onClick={() => setRememberUser(!rememberUser)} className={`border-2 border-primary3 border-solid ${rememberUser ? 'bg-primary3' : 'bg-primary1'} rounded-lg h-7 w-7 flex justify-center items-center cursor-pointer`}>
                                            <BsCheck className="text-primary1 text-2xl" />
                                        </span>
                                        I have read and agree with Terms of Use, Client Agreement and Privacy Policy
                                    </div>
                                </div>
                                <button className="w-full bg-primary3 text-white font-bold py-3 text-2xl rounded-lg">Create Account</button>
                            </form>
                            <p className="text-xl text-center mt-5">Already have an account? <NavLink className={'font-bold text-primary3'} to={'/login'}>Log in</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup