import { loginImage } from "../assets"

const Login = () => {
    return (
        <div className='w-full flex flex-row h-screen'>
            <div className='bg-primary2 flex flex-col items-center justify-center h-full w-[55%]'>
                <div className="flex flex-col gap-12 max-w-[90%]">
                    <h2 className="text-primary3 text-2xl w-[472px] font-bold">Discover the power of teamwork with TeamLinkup</h2>
                    <img src={loginImage} alt="svg" className="w-[586px] h-auto"/>
                </div>
            </div>
            <div className='h-full w-[65%] bg-primary1'>
                <p className="text-primary3 font-bold text-4xl ml-10 mt-8">LOGO</p>
                <div className="w-full flex items-center justify-center">
                    <div className="flex-col mt-12">
                        <h2 className="text-4xl font-bold text-primary3">Login in to your account</h2>
                        <p className="font-medium text-gray-text mt-4">Welcome! Select method to log in:</p>
                        <div className="flex flex-row mt-8">
                            <div className="border border-solid border-black">
asd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login