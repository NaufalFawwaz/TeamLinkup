import React, { useEffect, useState } from 'react'
import ContentLayout from '../Layout/ContentLayout'
import { gerindra, otherbg, pprobby, profile } from '../assets'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

const Profile = () => {
    const params = useParams();
    const [isEdit, setIsEdit] = useState(false)
    const [userData, setUserData] = useState({
        background: gerindra,
        nama: "Hanif Robby",
        profile: pprobby,
        noTelp: "08xxxxxxxxxx",
        universitas: "Universitas Brawijaya",
        idLine: "akusukahutao",
        fakultas: "Ilmu Komputer",
        prestasi: `Juara 2 UI/UX it COM google 2023
Juara 3 Web dev gemastik UB 2022`,
        jurusan: "Teknik Informatika",
        skill: "Front End Developer",
        deskripsi: "Berpengalaman menggunakan react/next js, terbiasa dalam slicing design, dan terbiasa dalam mengonsumsi API"
    });

    useEffect(() => {
        if (params.name) {
            setUserData({
                background: otherbg,
                nama: params.name,
                profile: profile,
                noTelp: "08xxxxxxxxxx",
                universitas: "Universitas Brawijaya",
                idLine: params.name.replace(/\s+/g, '_').toLowerCase(),
                fakultas: "Ilmu Komputer",
                prestasi: `Juara 2 UI/UX it COM google 2023
Juara 3 Web dev gemastik UB 2022`,
                jurusan: "Teknik Informatika",
                skill: "Front End Developer",
                deskripsi: "Berpengalaman menggunakan react/next js, terbiasa dalam slicing design, dan terbiasa dalam mengonsumsi API"
            })
        } else {
            setUserData({
                background: gerindra,
                nama: "Hanif Robby",
                profile: pprobby,
                noTelp: "08xxxxxxxxxx",
                universitas: "Universitas Brawijaya",
                idLine: "akusukahutao",
                fakultas: "Ilmu Komputer",
                prestasi: `Juara 2 UI/UX it COM google 2023
Juara 3 Web dev gemastik UB 2022`,
                jurusan: "Teknik Informatika",
                skill: "Front End Developer",
                deskripsi: "Berpengalaman menggunakan react/next js, terbiasa dalam slicing design, dan terbiasa dalam mengonsumsi API"
            })
        }
    }, [params.name]);

    function handleSave() {
        setIsEdit(false)
        toast.success('Berhasil Menyimpan Data', {
            position: 'bottom-right',
            className: 'text-xl font-medium p-4'
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    }

    return (
        <ContentLayout>
            <Toaster />
            <div className='pb-10'>
                <img src={userData.background} alt="background" className='w-full h-[311px] object-cover object-center' />
                <div className=' mx-[72px]'>
                    <div className='flex flex-row items-end justify-between relative top-[-70px]'>
                        <div className='flex flex-row items-end gap-14'>
                            <img src={userData.profile} alt="profile" className='h-[235px] rounded-full' />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-6xl text-primary3 font-bold'>{userData.nama}</h3>
                                <div className='flex flex-row gap-4 items-center'>
                                    <div className='bg-success-2 rounded-full h-4 w-4'></div>
                                    <p className='text-xl text-gray-text font-medium'>Ready to take Competetion</p>
                                </div>
                            </div>
                        </div>
                        {!params.name ?
                            <button onClick={() => { isEdit ? handleSave() : setIsEdit(true) }} className='bg-primary3 w-[228px] text-2xl text-white font-semibold py-[10px] rounded-lg'>{isEdit ? 'Save' : 'Edit'}</button>
                            :
                            <button onClick={""} className='bg-primary3 w-[228px] text-2xl text-white font-semibold py-[10px] rounded-lg'>Add Friend</button>
                        }
                    </div>
                    <div className='w-full flex items-center justify-center ox-12'>
                        <div className='grid grid-cols-2 w-full gap-x-[58px] gap-y-6'>
                            <div className='flex flex-col gap-3 text-3xl'>
                                <label htmlFor="name" className='font-bold text-primary3'>Nama</label>
                                <input name='nama' type="text" value={userData.nama}
                                    className='px-4 py-2 border border-black rounded-lg font-medium'
                                    disabled={!isEdit}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-3 text-3xl'>
                                <label htmlFor="phoneNumber" className='font-bold text-primary3'>No Handphone</label>
                                <input name='noTelp' type="text" value={userData.noTelp}
                                    className='px-4 py-2 border border-black rounded-lg font-medium'
                                    disabled={!isEdit}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-3 text-3xl'>
                                <label htmlFor="university" className='font-bold text-primary3'>Universitas</label>
                                <input name='universitas' type="text" value={userData.universitas}
                                    className='px-4 py-2 border border-black rounded-lg font-medium'
                                    disabled={!isEdit}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-3 text-3xl'>
                                <label htmlFor="lineID" className='font-bold text-primary3'>ID Line</label>
                                <input name='idLine' type="text" value={userData.idLine}
                                    className='px-4 py-2 border border-black rounded-lg font-medium'
                                    disabled={!isEdit}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-3 text-3xl'>
                                <label htmlFor="fakultas" className='font-bold text-primary3'>Fakultas</label>
                                <input name='fakultas' type="text" value={userData.fakultas}
                                    className='px-4 py-2 border border-black rounded-lg font-medium'
                                    disabled={!isEdit}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-3 text-3xl row-span-2'>
                                <label htmlFor="university" className='font-bold text-primary3'>Prestasi</label>
                                <textarea
                                    rows="5"
                                    className='text-2xl px-4 py-2 border border-black rounded-lg font-medium resize-none'
                                    name='prestasi'
                                    value={userData.prestasi}
                                    disabled={!isEdit}
                                    onChange={handleChange}
                                >
                                </textarea>
                            </div>
                            <div className='flex flex-col gap-3 text-3xl'>
                                <label htmlFor="fakultas" className='font-bold text-primary3'>Jurusan</label>
                                <input name='jurusan' type="text" value={userData.jurusan}
                                    className='px-4 py-2 border border-black rounded-lg font-medium'
                                    disabled={!isEdit}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-3 text-3xl'>
                                <label htmlFor="skill" className='font-bold text-primary3'>Skill</label>
                                <input name='skill' type="text" value={userData.skill}
                                    className='px-4 py-2 border border-black rounded-lg font-medium'
                                    disabled={!isEdit}
                                    onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-3 text-3xl row-span-2'>
                                <label htmlFor="deskripsi" className='font-bold text-primary3'>Deskrisi Skill</label>
                                <textarea
                                    rows="5"
                                    name='deskripsi'
                                    className='text-2xl px-4 py-2 border border-black rounded-lg font-medium resize-none'
                                    value={userData.deskripsi}
                                    disabled={!isEdit}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default Profile;
