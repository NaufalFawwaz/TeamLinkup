import { useState, useContext, useEffect } from 'react';
import ContentLayout from '../Layout/ContentLayout';
import { bannerc } from '../assets';
import { NavLink } from 'react-router-dom';
import { Category } from '../components';
import { CategoryEvent } from '../assets/data/CategoryEvent';
import Search from '../components/Search';
import { AppContext } from '../context/Provider';

const EventCard = ({ data }) => (
    <NavLink to={`/event/${data.id}`} key={data.id} className='border-[3px] border-primary3 rounded-lg flex flex-col pt-2 pb-2 px-2 hover:bg-primary3/10'>
        <div className='flex flex-col items-center text-center'>
            <h3 className='text-xl sm:text-2xl font-bold text-primary3 h-16 flex items-center'>{data.title}</h3>
            <img src={bannerc} alt={`banner ${data}`} className='sm:w-4/5' />
        </div>
        <p className='text-base font-medium text-gray-text flex items-end flex-1'>Category : {data.category.join(", ")}</p>
    </NavLink>
)

const Event = () => {
    const { repository } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        repository.getTopEventItems(
            (eventItems) => {
                setIsLoading(false)
                setEventData(eventItems);
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
                <Category data={CategoryEvent} onSelectCategory={handleCategorySelect} />
                <div className='flex flex-col flex-1 gap-14'>
                    <div className='flex flex-col w-full items-center'>
                        <Search handleSearch={handleSearch} searchTerm={searchTerm} />
                    </div>
                    {isLoading ?
                        <div className='w-full text-3xl text-center'>
                            Loading . . .
                        </div>
                        :
                        <div className='grid grid-cols-2 sm:grid-cols-3 sm:gap-20 gap-4'>
                            {filteredData.map((data) => (
                                <EventCard data={data} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </ContentLayout>
    );
};

export default Event;