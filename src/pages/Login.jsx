import { useEffect, useState } from "react"
import { google, line, loginImage, } from "../assets"
import { BsCheck } from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberUser, setRememberUser] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('login', true)
        navigate('/')
    }

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
                        <div className="flex-col mt-12">
                            <h2 className="text-4xl font-bold text-primary3">Login in to your account</h2>
                            <p className="font-medium text-gray-text mt-4">Welcome! Select method to log in:</p>
                            <div className="grid grid-cols-2 gap-5 lg:gap-[70px] mt-8">
                                <div className="border border-solid border-black lg:w-[210px] py-3 px-6 rounded-lg flex flex-row items-center gap-4 text-2xl font-bold text-primary3">
                                    <img src={google} alt="google" className="w-auto h-10 sm:h-[45px]" />
                                    Google
                                </div>
                                <div className="border border-solid border-black lg:w-[210px] py-3 px-6 rounded-lg flex flex-row items-center gap-4 text-2xl font-bold text-primary3">
                                    <img src={line} alt="google" className="w-auto h-12 sm:h-[45px]" />
                                    Line
                                </div>
                            </div>
                            <div className="flex flex-row text-gray-text font-medium my-[20px] gap-6 items-center">
                                <div className="h-px bg-primary3 flex-1" />
                                <p>Or continue with email</p>
                                <div className="h-px bg-primary3 flex-1" />
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <input
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="w-full border-solid border border-black text-2xl rounded p-4 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                    placeholder='Email'
                                />
                                <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    className="w-full border-solid border border-black text-2xl rounded p-4 placeholder:text-gray-text placeholder:font-medium focus:outline-none"
                                    placeholder='Password'
                                />
                                <div className="flex justify-between flex-row">
                                    <div className="flex items-center gap-2 text-gray-text font-medium">
                                        <span onClick={() => setRememberUser(!rememberUser)} className={`border-2 border-primary3 border-solid ${rememberUser ? 'bg-primary3' : 'bg-primary1'} rounded-lg h-7 w-7 flex justify-center items-center cursor-pointer`}>
                                            <BsCheck className="text-primary1 text-2xl" />
                                        </span>
                                        Remember me
                                    </div>
                                    {errMsg ? <p c className="bg-red-500">{errMsg}</p> : null}
                                    <NavLink to={'/login'} className="font-bold text-primary3 text-xl">Forgot Password?</NavLink>
                                </div>
                                <button className="w-full bg-primary3 text-white font-bold py-3 text-2xl rounded-lg">Login</button>
                            </form>
                            <p className="text-xl text-center mt-5">Don't have an account? <NavLink className={'font-bold text-primary3'} to={'/signup'}>Create an account</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login