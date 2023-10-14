import { NavLink } from "react-router-dom"
import ContentLayout from "../Layout/ContentLayout"
import { uiux, mobile, web, datasc, addPerson, image, websites } from "../assets"

export const Jumbotron = () => (
    <div className="flex flex-col items-center">
        <h1 className="text-primary3 text-[4.25rem] font-bold text-center">
            Find the best people for <br /> candidates in your team
        </h1>
        <p className="text-gray-text text-center text-xl font-medium">Whenever you feel confused to find someone to be your partner in competition, TeamLinkup is <br />here to help you</p>
        <NavLink className={'bg-success text-2xl rounded-lg font-semibold text-white py-[26px] text-center px-24 mt-14'} to={'/event'}>Get Started</NavLink>
    </div>
)

export const CardContainer = () => {
    const cardData = [
        {
            title: 'UI/UX',
            img: uiux,
            description: "Kompetisi desain antarmuka pengguna (UI) dan pengalaman pengguna (UX), dimana peserta berlomba untuk menciptakan desain terbaik untuk suatu produk",
        },
        {
            title: 'Web Development',
            img: web,
            description: "Kompeteisi di mana peserta bersaing untuk menciptakan dan mengembangkan situs web yang inovatif dan fungsional",
        },
        {
            title: 'Mobile Devlopment',
            img: mobile,
            description: " Kompetisi di mana peserta bersaing untuk menciptakan aplikasi mobile yang inovatif dan efisien",
        },
        {
            title: 'Data Science',
            img: datasc,
            description: "Peserta bersaing untuk menganalisis dataset besar dan mengekstrak pola atau informasi penting dari data tersebut",
        },
    ]
    return (
        <div className="pt-20 pb-32 grid grid-cols-4 gap-16">
            {cardData.map(data => (
                <div className="bg-success even:bg-primary3 even:mt-12 flex flex-col items-center h-full justify-between py-8 px-3 text-white text-center rounded-lg" key={data.title}>
                    <h2 className="text-2xl font-bold">{data.title}</h2>
                    <img src={data.img} alt={data.title} className="w-[222px] h-auto" />
                    <p className="max-w-[281px]">{data.description}</p>
                </div>
            ))}
        </div>
    )
}

const About = () => {
    const aboutData = [
        {
            img: addPerson,
            title: 'Easy teaming up',
            desc: 'Mudah bagi pengguna untuk mencari anggota tim yang sesuai dengan keterampilan masing-masing'
        },
        {
            img: image,
            title: 'Up to date',
            desc: 'Informasi mengenai lomba selalu terkini bagi pengguna yang ingin mencari lomba yang diinginkan'
        },
        {
            img: websites,
            title: 'Easy to access',
            desc: 'Mudah diakses oleh pengguna dimanapun dan kapanpun baik di rumah, kampus, dan lain-lain.'
        },
    ]
    return (
        <div className="bg-primary2 pt-10 pb-16 text-center">
            <h2 className="text-6xl font-bold text-primary3">About this website</h2>
            <p className="text-xl mt-5 font-medium">Teamlinkup kali ini mempunyai beberapa keunggulan diantaranya seperti berikut</p>
            <div className="mt-14 flex flex-row justify-evenly">
                {aboutData.map(data => (
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <img src={data.img} alt={data.title} className="w-[170px] h-[170px]" />
                        <h3 className="font-bold text-3xl">{data.title}</h3>
                        <p className="text-xl font-medium w-[287px]">{data.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


const Home = () => {
    return (
        <div>
            <ContentLayout>
                <Jumbotron />
                <CardContainer />
            </ContentLayout>
            <About />
        </div>
    )
}

export default Home