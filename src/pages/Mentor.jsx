import ContentLayout from "../Layout/ContentLayout"
import { NavLink } from "react-router-dom"
import { Category, Search } from "../components"
import { profile } from "../assets"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaRegStar } from "react-icons/fa"
import { useState, useContext, useEffect } from "react"
import { CategoryUser } from "../assets/data/CategoryUser"
import toast, { Toaster } from "react-hot-toast"
import { AppContext } from "../context/Provider"

const MentorCard = ({ data, index, setIsAddMember, isAddMember }) => {
    function handleAddMember() {
        toast.success(`Invitation Succes`, {
            position: 'bottom-right',
            className: 'text-xl font-medium p-4'
        });
    }
    
    return (
        <div key={data.nama} className="border-[3px] border-primary3 bg-transparent rounded-lg px-4 py-5">
            <div className="flex flex-row gap-[18px] justify-start">
                <img src={profile} alt="profile" className="rounded-full h-28 sm:h-[110px] w-auto" />
                <div className="flex-1">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-primary3 text-3xl sm:text-[1.75rem] font-semibold">{data.nama}</h3>
                        <div className="text-3xl flex gap-2 items-center">
                            <FaRegStar />
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <p className="text-gray-text-2 text-lg">{data.universitas}</p>
                    <p className="text-gray-text-2 text-lg">{data.major}</p>
                    <div className="flex flex-row gap-2 mt-2 text-lg font-medium items-center">
                        <div className={`h-5 w-5 ${data.status.includes('Already') ? 'bg-error' : 'bg-success-2'} rounded-full`} />
                        {data.status}
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-6 w-full justify-end gap-16">
                <NavLink to={`/profile/mentor/${data.id}`} className="w-[177px] bg-primary3 py-2 text-center text-white rounded-lg font-semibold">
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

const Mentor = () => {
    const { repository } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isAddMember, setIsAddMember] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        repository.getMentor(
            (userItem) => {
                setIsLoading(false)
                setUserData(userItem);
            },
            (error) => {
                setIsLoading(false)
                console.error('Error fetching Top Event Items:', error);
            }
        );
    }, [repository]);

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
            return selectedCategories.includes(data.major);
        });
    }

    if (searchTerm) {
        filteredData = filteredData.filter((data) => {
            return data.nama.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }
    return (
        <ContentLayout>
            <div className='flex flex-col sm:flex-row w-full gap-14 pb-10'>
                <Category data={CategoryUser} onSelectCategory={handleCategorySelect} />
                <div className='flex flex-col flex-1 gap-14 sm:flex-1'>
                    <div className='flex flex-col w-full items-center'>
                        <Search handleSearch={handleSearch} searchTerm={searchTerm} />
                    </div>
                    {isLoading ?
                        <div className='w-full text-3xl text-center'>
                            Loading . . .
                        </div>
                        :
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                            {filteredData.map((data, index) => (
                                <MentorCard data={data} index={index} setIsAddMember={setIsAddMember} isAddMember={isAddMember} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </ContentLayout>
    )
}

export default Mentor