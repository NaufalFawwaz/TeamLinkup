import { useContext, useState } from "react";
import { AppContext } from "../context/Provider";

const CreateDummy = () => {
    const { repository } = useContext(AppContext);
    const [creatingUser, setCreatingUser] = useState(false);

    const data = [
        { nama: 'John Doe', universitas: 'Universitas Gadjah Mada', status: 'ready to help', fakultas: 'Teknik Elektro', major: 'Kecerdasan Buatan', minor: 'Machine Learning' },
        { nama: 'Jane Smith', universitas: 'Institut Teknologi Bandung', status: 'ready to help', fakultas: 'Ilmu Komputer', major: 'Data Science', minor: 'Big Data' },
        { nama: 'David Johnson', universitas: 'Universitas Indonesia', status: 'ready to help', fakultas: 'Teknik Informatika', major: 'Cyber Security', minor: 'Forensic Computing' },
        { nama: 'Amanda Lee', universitas: 'Universitas Bina Nusantara', status: 'ready to help', fakultas: 'Ilmu Komputer', major: 'Web Development', minor: 'Mobile Development' },
        { nama: 'Michael Wang', universitas: 'Universitas Multimedia Nusantara', status: 'ready to help', fakultas: 'Teknik Informatika', major: 'Game Development', minor: 'Virtual Reality' },
        { nama: 'Emily Chen', universitas: 'Universitas Pelita Harapan', status: 'ready to help', fakultas: 'Ilmu Komputer', major: 'Cloud Computing', minor: 'Artificial Intelligence' },
        { nama: 'Daniel Kim', universitas: 'Universitas Atma Jaya Yogyakarta', status: 'ready to help', fakultas: 'Teknik Elektro', major: 'Robotika', minor: 'Pemrograman Embedded' },
        { nama: 'Sophia Nguyen', universitas: 'Universitas Diponegoro', status: 'ready to help', fakultas: 'Ilmu Komputer', major: 'Cyber Security', minor: 'Forensic Computing' },
    ];

    const handleCreateUser = () => {
        setCreatingUser(true);

        data.forEach((data) => {
            repository.createMentor(
                data,
                () => {
                    console.log('User created successfully.');
                },
                (error) => {
                    console.error('Error creating user:', error);
                }
            );
        });

        setCreatingUser(false);
    };

    return (
        <div>
            <button onClick={handleCreateUser} disabled={creatingUser}>
                {creatingUser ? 'Creating User...' : 'Create User'}
            </button>
        </div>
    );
};

export default CreateDummy;
