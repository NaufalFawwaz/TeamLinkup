import ContentLayout from "../Layout/ContentLayout"
import { Category } from "../components"
import { BiSearchAlt } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { profile } from "../assets"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaRegStar } from "react-icons/fa"
import toast, {Toaster} from "react-hot-toast"
import { recruitmentData } from "../assets/data/recruitmentData"
import { CategoryEvent } from "../assets/data/CategoryEvent"
import { useState } from "react"
import RecruitmentCard from "../components/RecruitmentCard"

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
                <Category data={CategoryEvent} onSelectCategory={handleCategorySelect} />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 h-fit sm:flex-1'>
                    {filteredData.map((data, index) => (
                        <RecruitmentCard data={data} key={index} />
                    ))}
                </div>
            </div>
        </ContentLayout>
    )
}

export default FindTeam
