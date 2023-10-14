import ContentLayout from "../Layout/ContentLayout"
import { BiSearchAlt } from "react-icons/bi"
import { NavLink } from "react-router-dom"
import { Category } from "../components"
import { profile } from "../assets"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaRegStar } from "react-icons/fa"

const filterData = [
    {
        title: 'Development',
        children: [
            {
                title: 'Mobile',
                isChecked: false,
            },
            {
                title: 'Website',
                isChecked: false,
            },
            {
                title: 'Apps',
                isChecked: false,
            },
            {
                title: 'Game',
                isChecked: false,
            },
        ]
    },
    {
        title: 'Cyber Security',
        children: [
            {
                title: 'Capture the Flag (CFG)',
                isChecked: false
            },
            {
                title: 'Pentest',
                isChecked: false
            },
            {
                title: 'Forensik Digital',
                isChecked: false
            },
            {
                title: 'Kriptografi',
                isChecked: false
            },
            {
                title: 'Malware Analysis',
                isChecked: false
            }
        ]
    },
    {
        title: 'Data Science',
        children: [
            {
                title: 'Mobile',
                isChecked: false
            },
            {
                title: 'Website',
                isChecked: false
            },
            {
                title: 'Game',
                isChecked: false
            },
            {
                title: 'Innovation',
                isChecked: false
            },
            {
                title: 'Usability Test',
                isChecked: false
            }
        ]
    },
    {
        title: 'UI & UX',
        children: [
            {
                title: 'Mobile',
                isChecked: false
            },
            {
                title: 'Website',
                isChecked: false
            },
            {
                title: 'Game',
                isChecked: false
            },
            {
                title: 'Innovation',
                isChecked: false
            },
            {
                title: 'Usability Test',
                isChecked: false
            }
        ]
    }
]

const Partner = () => {
    return (
        <ContentLayout>
            <div className='flex flex-row w-full gap-14 pb-10'>
                {/* Category */}
                <Category data={filterData} />
                {/* Content */}
                <div className='flex flex-col flex-1 gap-14'>
                    <div className='flex flex-col w-full items-center'>
                        {/* Search */}
                        <div className='w-2/4 flex flex-row gap-4 items-center border-2 border-primary3 px-6 py-2 rounded-lg'>
                            <BiSearchAlt className='text-4xl' />
                            <input
                                type='search'
                                placeholder='Search'
                                className='text-2xl text-primary3 flex-1'>
                            </input>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10'>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(data => (
                            <div className="border-[3px] border-primary3 bg-transparent rounded-lg px-4 py-5">
                                <div className="flex flex-row gap-[18px] justify-start">
                                    <img src={profile} alt="profile" className="rounded-full h-[110px] w-[110px]" />
                                    <div className="flex-1">
                                        <div className="flex flex-row justify-between items-center">
                                            <h3 className="text-primary3 text-[28px] font-semibold">Aldoardana Refih</h3>
                                            <div className="text-3xl flex gap-2 items-center">
                                                <FaRegStar />
                                                <BsThreeDotsVertical />
                                            </div>
                                        </div>
                                        <p className="text-gray-text-2 text-lg">Brawijaya University</p>
                                        <p className="text-gray-text-2 text-lg">Back End Developer</p>
                                        <div className="flex flex-row gap-2 mt-2 text-lg font-medium items-center">
                                            <div className="h-5 w-5 bg-success-2 rounded-full" />
                                            Ready to take Competetion
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row mt-6 w-full justify-end gap-16">
                                    <div className="w-[177px] bg-primary3 py-2 text-center text-white rounded-lg font-semibold">
                                        See Detail
                                    </div>
                                    <div className="w-[177px] bg-primary3 py-2 text-center text-white rounded-lg font-semibold">
                                        Add Team
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Partner