import React, { useEffect, useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

const Category = ({ data, onSelectCategory }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategorySelect = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
        onSelectCategory(category);
    };

    return (
        <div className='bg-primary3 py-3 px-2 sm:px-6 rounded-lg w-full sm:w-fit h-fit'>
            <h2 className='text-3xl font-bold text-white text-center'>Category</h2>
            <div className='h-px bg-white my-7' />
            <div className={`w-full grid ${!data[0].title ? "grid-cols-1" : "grid-cols-2"} sm:grid-cols-1`}>
                {data.map((filter, index) => (
                    <div className='mb-7' key={index}>
                        {filter.title ? 
                        <h3
                        className={`text-primary3 pl-3 text-2xl font-medium py-2 bg-white w-fit mb-3 pr-5 rounded-r-xl cursor-pointer`}
                        >
                            {filter.title}
                        </h3>
                        :
                        null
                        }
                        <div className='flex flex-col gap-3 text-lg font-medium text-white'>
                            {filter.children.map((child, index) => (
                                <button onClick={() => handleCategorySelect(child.title)} className='flex flex-row items-center gap-2 justify-between'>
                                    <h4
                                        key={index}
                                        className={`ml-4 cursor-pointer`}
                                    >
                                        {child.title}
                                    </h4>
                                    <BsCheckLg className={`text-white text-2xl ${selectedCategories.includes(child.title) ? 'opacity-100' : 'opacity-0'}`}/>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
