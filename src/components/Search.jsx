import { BiSearchAlt } from "react-icons/bi"

const Search = ({searchTerm, handleSearch}) => {
    return (
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
    )
}

export default Search