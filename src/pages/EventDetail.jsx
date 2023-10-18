import { NavLink } from "react-router-dom"
import { banner } from "../assets"
import ContentLayout from "../Layout/ContentLayout"

const EventDetail = () => {
    return (
        <ContentLayout>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
                <img src={banner} alt="banner" className="w-full" />
                <div className="bg-primary3 rounded-lg text-white py-10 px-8 flex flex-col items-center">
                    <h3 className="text-[32px] flex font-bold max-w-[338px] text-center">Smart IT Festival IT Competition 2022</h3>
                    <div className="text-lg sm:text-2xl font-medium mb-5 sm:mb-0">
                        <p className="text-center mt-10">INVATION-Study Case is a competition that invites students throughout Indonesia to provide innovations and solutions to real problems faced by corporate partners. This activity is accompanied by a Corporate Webinar that provides education and information on professionalism topics that students will face in the future.</p>
                        <p className="font-medium text-start mt-8">Main Theme : Implementation of SDG’s-Oriented Collaborative Innovation for Digital Industrial Sustainability</p>
                        <div className="flex flex-row gap-14 mt-6">
                            <div className="flex flex-col gap-3">
                                <h4 className="text-gray-text">Date</h4>
                                10 - 17 Juli 2022
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-gray-text">Location</h4>
                                Bandung
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-gray-text">Fee</h4>
                                Rp50.000
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