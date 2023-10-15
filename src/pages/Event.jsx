import React from 'react'
import ContentLayout from '../Layout/ContentLayout'
import { BiSearchAlt } from 'react-icons/bi'
import { banner } from '../assets'
import { NavLink } from 'react-router-dom'
import { Category } from '../components'

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

const Event = () => {
    return (
        <ContentLayout>
            <div className='flex flex-row w-full gap-14 pb-10'>
                {/* Category */}
                <Category data={filterData} />
                {/* Content */}
                <div className='flex flex-col flex-1 gap-14'>
                    <div className='flex flex-col w-full items-center'>
                        {/* Search */}
                        <div className='w-[55%] flex flex-row gap-4 items-center border-2 border-primary3 px-6 py-2 rounded-lg'>
                            <BiSearchAlt className='text-4xl' />
                            <input
                                type='search'
                                placeholder='Search'
                                className='text-2xl text-primary3 flex-1'>
                            </input>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-20'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(data => (
                            <NavLink to={'/event/1'} key={`banner-${data}`} className='border-[3px] border-primary3 rounded-lg flex flex-col items-center justify-center text-center hover:pb-0 hover:pt-0 pt-5 pb-2 px-2 group'>
                                <img src={banner} alt={`banner ${data}`} className='w-4/5 group-hover:scale-125' />
                                <h3 className='text-2xl font-bold text-primary3 group-hover:hidden'>Smart IT Festival</h3>
                                <p className='text-sm font-medium text-gray-text group-hover:hidden'>Lorem saturnus wkutunus larpoiem wakatanoi atoe kolat takaman</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Event