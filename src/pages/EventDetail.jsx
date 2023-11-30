import { NavLink } from "react-router-dom"
import { banner } from "../assets"
import ContentLayout from "../Layout/ContentLayout"
import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/Provider"

const EventDetail = () => {
    const { id } = useParams();  
    const { repository } = useContext(AppContext);  
    const [eventData, setEventData] = useState(null); 

    useEffect(() => {
        repository.getEventDataById(
            id, 
            (eventData) => {
                setEventData(eventData);
            },
            (error) => {
                console.error('Error fetching Event Data:', error);
            }
        );
    }, [id, repository]);

    if (!eventData) {
        return <div className="h-[80vh] flex items-center justify-center text-3xl">Loading...</div>;
    }

    const formattedFee = eventData.fee === 0 ? "Free" : `Rp${eventData.fee.toLocaleString()}`;

    return (
        <ContentLayout>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
                <img src={banner} alt="banner" className="w-full" />
                <div className="bg-primary3 rounded-lg text-white py-10 px-8 flex flex-col items-center">
                    <h3 className="text-[32px] flex font-bold max-w-[338px] text-center">{eventData.title}</h3>
                    <div className="text-lg sm:text-2xl font-medium mb-5 sm:mb-0">
                        <p className="text-center mt-10">{eventData.description}</p>
                        <p className="font-medium text-start mt-8">Main Theme : {eventData.main}</p>
                        <div className="flex flex-row gap-14 mt-6">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-gray-text">Date</h4>
                                {eventData.date}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-gray-text">Location</h4>
                                {eventData.location}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-gray-text">Fee</h4>
                                {formattedFee}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full flex items-center justify-center">
                        <div className="flex flex-row gap-10">
                            <NavLink to={'/partner'} className="w-[130px] sm:w-[200px] bg-white rounded-lg text-primary3 font-bold text-lg sm:text-xl py-2 text-center">
                                Get Partner
                            </NavLink>
                            <NavLink to={'/'} className="w-[130px] sm:w-[200px] bg-white rounded-lg text-primary3 font-bold text-lg sm:text-xl py-2 text-center">
                                More Information
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default EventDetail