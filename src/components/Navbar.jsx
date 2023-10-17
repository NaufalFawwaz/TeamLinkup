import { logo } from "../assets"
import { NavLink, useLocation } from "react-router-dom"
import { CgProfile } from "react-icons/cg"
import { useState } from "react"

const navItem = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Event',
        url: '/event'
    },
    {
        name: 'Partner',
        url: '/partner'
    },
    {
        name: 'Find Team',
        url: '/find-team'
    },
]

const dropdown = [
    {
        name: 'Profile',
        url: '/profile'
    },
    {
        name: 'My Team',
        url: '/teams'
    },
    {
        name: 'Account Setting',
        url: 'setting'
    }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    return (
        <div className='w-full p-4 border-b border-primary3 flex justify-between flex-row items-center'>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" className="h-20 w-auto" />
            </NavLink>
            <div className="flex flex-row gap-10 font-semibold text-2xl text-gray-text">
                {navItem.map(data => (
                    <NavLink className={`hover:text-primary3 ${location.pathname == data.url ? 'text-primary3' : "text-gray-text"}`} to={data.url}>{data.name}</NavLink>
                ))}
            </div>
            <div className="relative">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <CgProfile className="h-16 w-auto text-primary3"/>
                </button>
                <div className={`${isOpen ? 'flex flex-col gap-3' : 'hidden'} px-3 py-4 absolute right-0 bg-white min-w-[14.5rem] z-50 border-[1px] rounded-lg border-primary3`}>
                    {dropdown.map((item) => (
                        <NavLink onClick={() => setIsOpen(false)} to={item.url} key={item.name} className="text-xl font-semibold text-primary3 bg-primary2 hover:bg-primary3 hover:text-primary2 px-4 py-2 rounded-lg">
                            {item.name}
                        </NavLink>
                    ))}
                    <button className="text-start text-xl font-semibold text-primary3 bg-primary2 hover:bg-primary3 hover:text-primary2 px-4 py-2 rounded-lg">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar