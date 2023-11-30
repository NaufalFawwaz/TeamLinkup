import { useEffect, useState, useContext } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import ContentLayout from '../Layout/ContentLayout'
import { otherbg, profile } from '../assets'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import { AppContext } from '../context/Provider'

const MentorProfile = () => {
    const { id } = useParams();
    const { repository } = useContext(AppContext);
    const [mentorData, setMentorData] = useState(null);
    const [isRequest, setIsRequest] = useState(false)

    useEffect(() => {
        repository.getMentorDataById(
            id,
            (mentorData) => {
                setMentorData(mentorData);
            },
            (error) => {
                console.error('Error fetching Event Data:', error);
            }
        );
    }, [id, repository]);

    function handleRequest() {
        if (!isRequest) {
            setIsRequest(true);
            toast.success(`Request has been sent`, {
                position: 'bottom-right',
                className: 'text-xl font-medium p-4',
            });
        } else {
            setIsRequest(false)
            toast.success(`Request has been canceled`, {
                position: 'bottom-right',
                className: 'text-xl font-medium p-4',
            })
        }
    }

    if (!mentorData) {
        return (
            <div className='h-[80vh] flex items-center justify-center text-3xl'>
                Loading. . .
            </div>
        )
    }

    return (
        <ContentLayout>
            <Toaster />
            <div className='pb-10'>
                <img referrerPolicy="no-referrer" src={otherbg} alt="background" className='w-full sm:h-[311px] object-cover object-center' />
                <div className='sm:mx-[72px] mx-[10px]'>
                    <div className='flex flex-row items-end justify-between relative -top-[25px] sm:top-[-70px]'>
                        <div className='flex flex-row items-end gap-4 sm:gap-14'>
                            <img src={profile} alt="profile" className='sm:h-52 h-28 rounded-full' />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-xl sm:text-6xl text-primary3 font-bold'>{mentorData.nama}</h3>
                                <div className='flex flex-row gap-2 sm:gap-4 items-center'>
                                    <div className='bg-success-2 rounded-full h-3 w-3 sm:h-4 sm:w-4'></div>
                                    <p className='text-sm sm:text-xl text-gray-text font-medium'>{mentorData.status}</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleRequest} className='bg-primary3 px-2 sm:px-0 sm:w-[228px] sm:text-2xl text-white font-semibold py-2 sm:py-[10px] rounded-lg'>{isRequest ? 'Requested...' : 'Ask to mentor'}</button>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center gap-4 text-xl sm:text-3xl'>
                        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                            <p className='font-bold text-primary3'>Nama</p>
                            <div className='px-4 py-2 border border-black rounded-lg font-medium'>{mentorData.nama}</div>
                        </div>
                        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                            <p className='font-bold text-primary3'>Universitas</p>
                            <div className='px-4 py-2 border border-black rounded-lg font-medium'>{mentorData.universitas}</div>
                        </div>
                        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                            <p className='font-bold text-primary3'>Fakultas</p>
                            <div className='px-4 py-2 border border-black rounded-lg font-medium'>{mentorData.fakultas}</div>
                        </div>
                        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                            <p className='font-bold text-primary3'>Major</p>
                            <div className='px-4 py-2 border border-black rounded-lg font-medium'>{mentorData.major}</div>
                        </div>
                        <div className='flex flex-col gap-2 w-full sm:w-1/2'>
                            <p className='font-bold text-primary3'>Minor</p>
                            <div className='px-4 py-2 border border-black rounded-lg font-medium'>{mentorData.minor}</div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default MentorProfile;
