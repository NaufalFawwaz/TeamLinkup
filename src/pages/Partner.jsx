import ContentLayout from "../Layout/ContentLayout"
import { BiSearchAlt } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { Category } from "../components"
import { profile } from "../assets"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaRegStar } from "react-icons/fa"
import { userData } from "../assets/data/userData"
import { useState } from "react"
import { CategoryUser } from "../assets/data/CategoryUser"
import toast, { Toaster } from "react-hot-toast"

const UserCard = ({ data, index, setIsAddMember, isAddMember }) => {
    function handleAddMember() {
        toast.success(`Invitation Succes`, {
            position: 'bottom-right',
            className: 'text-xl font-medium p-4'
        });
    }

    return (
        <div key={data.name} className="border-[3px] border-primary3 bg-transparent rounded-lg px-4 py-5">
            <div className="flex flex-row gap-[18px] justify-start">
                <img src={profile} alt="profile" className="rounded-full h-28 sm:h-[110px] w-auto" />
                <div className="flex-1">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-primary3 text-3xl sm:text-[1.75rem] font-semibold">{data.name}</h3>
                        <div className="text-3xl flex gap-2 items-center">
                            <FaRegStar />
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <p className="text-gray-text-2 text-lg">{data.university}</p>
                    <p className="text-gray-text-2 text-lg">{data.role}</p>
                    <div className="flex flex-row gap-2 mt-2 text-lg font-medium items-center">
                        <div className={`h-5 w-5 ${data.status.includes('Already') ? 'bg-error' : 'bg-success-2'} rounded-full`} />
                        {data.status}
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-6 w-full justify-end gap-16">
                <NavLink to={`/profile/${data.name}`} className="w-[177px] bg-primary3 py-2 text-center text-white rounded-lg font-semibold">
                    See Detail
                </NavLink>
                <div className="relative">
                    <button onClick={() => { isAddMember === index ? setIsAddMember(false) : setIsAddMember(index) }} className="w-[177px] bg-primary3 py-2 text-center text-white rounded-lg font-semibold">
                        Add Team
                    </button>
                    {isAddMember === index ?
                        <div className="absolute flex flex-col text-xl text-primary3 font-semibold gap-1 left-0 w-full rounded-lg border border-primary3 bg-white px-2 py-5">
                            {["Hunter Team", "Team Tiga"].map(data => (
                                <button onClick={handleAddMember} className="flex flex-row items-center gap-2">
                                    <div className="bg-gray-400 rounded-full h-3 w-3"></div>
                                    {data}
                                </button>
                            ))}
                        </div>
                        :
                        null}
                </div>
            </div>
            <Toaster />
        </div>
    )
}

const Partner = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isAddMember, setIsAddMember] = useState(false);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategorySelect = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    let filteredData = userData;

    if (selectedCategories.length > 0) {
        filteredData = filteredData.filter((data) => {
            return selectedCategories.includes(data.role);
        });
    }

    if (searchTerm) {
        filteredData = filteredData.filter((data) => {
            return data.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
    return (
        <ContentLayout>
            <div className='flex flex-col sm:flex-row w-full gap-14 pb-10'>
                {/* Category */}
                <Category data={CategoryUser} onSelectCategory={handleCategorySelect} />
                {/* Content */}
                <div className='flex flex-col flex-1 gap-14 sm:flex-1'>
                    <div className='flex flex-col w-full items-center'>
                        {/* Search */}
                        <div className='w-full sm:w-[55%] flex flex-row gap-4 items-center border-2 border-primary3 px-6 py-2 rounded-lg'>
                            <BiSearchAlt className='text-4xl' />
                            <input
                                type='search'
                                placeholder='Search'
                                className='text-2xl text-primary3 flex-1'
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                        {filteredData.map((data, index) => (
                            <UserCard data={data} index={index} setIsAddMember={setIsAddMember} isAddMember={isAddMember} />
                        ))}
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Partner