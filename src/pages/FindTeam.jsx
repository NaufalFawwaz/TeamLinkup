import ContentLayout from "../Layout/ContentLayout"
import { BiSearchAlt } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { Category } from "../components"
import { profile } from "../assets"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaRegStar } from "react-icons/fa"
import { recruitmentData } from "../assets/data/recruitmentData"
import { CategoryEvent } from "../assets/data/CategoryEvent"
import { useState } from "react"
import toast, {Toaster} from "react-hot-toast"

const RecruitmentCard = ({ data }) => {
    function handleRequestJoin(){
        toast.success(`Request has been sent`, {
            position: 'bottom-right',
            className: 'text-xl font-medium p-4'
        });
    }

    return(
    <div key={data.name} className="border-[3px] border-primary3 bg-transparent rounded-lg px-4 py-5 h-fit">
        <div className="flex flex-col justify-between h-full">
            <div className="flex flex-row gap-[18px] justify-start">
                <img src={profile} alt="profile" className="rounded-full h-28 sm:h-[110px] w-auto" />
                <div className="flex-1">
                    <div className="flex flex-row justify-between items-center">
                        <h3 className="text-primary3 text-3xl sm:text-[28px] font-semibold">{data.name}</h3>
                        <div className="text-3xl flex gap-2 items-center">
                            <FaRegStar />
                            <BsThreeDotsVertical />
                        </div>
                    </div>
                    <p className="text-gray-text-2 text-lg">{data.university}</p>
                    <p className="text-gray-text-2 text-lg">{data.role}</p>
                    <div className="flex flex-row gap-2 mt-2 text-lg font-medium items-center">
                        <div className={`h-5 w-5 ${data.status.includes('Ready') ? 'bg-success-2' : 'bg-error'} rounded-full`} />
                        {data.status}
                    </div>
                </div>
            </div>
            <div className="border border-primary3 rounded-lg mt-3">
                <div className="flex flex-row items-center border-b border-primary3 h-[4.1rem]">
                    <div className="bg-primary3 h-full rounded-tl-md text-center text-lg font-bold w-[30%] py-1 px-4 text-white flex items-center justify-center">
                        {data.recruitment.team}
                    </div>
                    <h3 className="text-lg font-bold text-primary3 text-center px-2 py-3">{data.recruitment.competition}</h3>
                </div>
                <div className="flex flex-row py-4 px-3  text-lg">
                    <h3 className="w-[30%] font-bold text-primary3 text-center flex items-center justify-center">{data.recruitment.category}</h3>
                    <p className="whitespace-pre-line px-3 font-medium">
                        {data.recruitment.message}
                    </p>
                </div>
            </div>
            <div className="flex flex-row mt-6 w-full justify-between px-4 gap-10">
                <NavLink to={`/profile/${data.name}`} className="w-[177px] bg-primary3 py-2 text-center text-white rounded-lg font-semibold">
                    See Detail
                </NavLink>
                <button onClick={handleRequestJoin} className="w-[177px] bg-primary3 py-2 text-center text-white rounded-lg font-semibold">
                    Request Join
                </button>
            </div>
        </div>
        <Toaster />
    </div>
)}

const FindTeam = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategorySelect = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    let filteredData = recruitmentData;

    if (selectedCategories.length > 0) {
        filteredData = filteredData.filter((data) => {
            return selectedCategories.includes(data.recruitment.category);
        });
    }

    return (
        <ContentLayout>
            <div className='flex flex-col sm:flex-row w-full gap-14 pb-10'>
                {/* Category */}
                <Category data={CategoryEvent} onSelectCategory={handleCategorySelect} />
                {/* Content */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                    {filteredData.map((data, index) => (
                        <RecruitmentCard data={data} key={index} />
                    ))}
                </div>
            </div>
        </ContentLayout>
    )
}

export default FindTeam
