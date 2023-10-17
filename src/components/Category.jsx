import React from 'react'

const Category = ({data}) => {
    return (
        <div className='bg-primary3 py-3 px-6 rounded-lg w-full sm:w-[22%] h-fit '>
            <h2 className='text-3xl font-bold text-white text-center'>Category</h2>
            <div className='h-px bg-white my-7' />
            <div className='w-full grid grid-cols-2 sm:grid-cols-1'>
                {data.map(filter => (
                    <div className='mb-7'>
                        <h3 className='text-primary3 pl-3 text-2xl font-medium py-2 bg-white w-fit mb-3 pr-5 rounded-r-xl'>{filter.title}</h3>
                        <div className='flex flex-col gap-3 text-xl font-medium text-white'>
                            {filter.children.map(child => (
                                <h4 className='ml-4'>{child.title}</h4>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category