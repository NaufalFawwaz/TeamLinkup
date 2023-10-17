import React, { useState } from 'react';
import ContentLayout from '../Layout/ContentLayout';
import { BiSearchAlt } from 'react-icons/bi';
import { banner } from '../assets';
import { NavLink } from 'react-router-dom';
import { Category } from '../components';
import { CategoryEvent } from '../assets/data/CategoryEvent';
import { eventData } from '../assets/data/eventData';

const Event = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);

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

    let filteredData = eventData;

    if (selectedCategories.length > 0) {
        filteredData = filteredData.filter((data) => {
            return selectedCategories.some((category) => data.category.includes(category));
        });
    }

    if (searchTerm) {
        filteredData = filteredData.filter((data) => {
            return data.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
    }

    return (
        <ContentLayout>
            <div className='flex flex-col sm:flex-row w-full gap-14 pb-10'>
                {/* Category */}
                <Category data={CategoryEvent} onSelectCategory={handleCategorySelect} />
                {/* Content */}
                <div className='flex flex-col flex-1 gap-14'>
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
                    <div className='grid grid-cols-2 sm:grid-cols-3 sm:gap-20 gap-4'>
                        {filteredData.map((data) => (
                            <NavLink to={`/event/${data.id}`} key={data.id} className='border-[3px] border-primary3 rounded-lg flex flex-col pt-2 pb-2 px-2 hover:bg-primary3/10'>
                                <div className='flex flex-col items-center text-center'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-primary3 h-16 flex items-center'>{data.title}</h3>
                                    <img src={banner} alt={`banner ${data}`} className='sm:w-4/5' />
                                </div>
                                <p className='text-base font-medium text-gray-text flex items-end flex-1'>Category : {data.category.join(", ")}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </ContentLayout>
    );
};

export default Event;
