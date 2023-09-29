import { logo } from "../assets"
import { NavLink, useLocation } from "react-router-dom"
import { CgProfile } from "react-icons/cg"

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
        name: 'My Team',
        url: '/teams'
    },
]

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='w-full p-4 flex justify-between flex-row items-center'>
            <NavLink to={'/'}>
                <img src={logo} alt="logo" className="h-20 w-auto" />
            </NavLink>
            <div className="flex flex-row gap-10 font-semibold text-2xl text-gray-text">
                {navItem.map(data => (
                    <NavLink className={`hover:text-primary3 ${location.pathname == data.url ? 'text-primary3' : "text-gray-text"}`} to={data.url}>{data.name}</NavLink>
                ))}
            </div>
            <NavLink>
                <CgProfile className="h-16 w-auto text-primary3"/>
            </NavLink>
        </div>
    )
}

export default Navbar