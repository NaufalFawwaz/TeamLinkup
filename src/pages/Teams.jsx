import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { BsChevronDown, BsChevronRight, BsThreeDotsVertical } from "react-icons/bs"
import { IoMdInformationCircle } from "react-icons/io"
import ContentLayout from "../Layout/ContentLayout";
import { profile } from "../assets";
import { useState } from "react";
import toast, {Toaster} from "react-hot-toast";

const team = [
  {
    name: "Hunter Team",
    member: [
      {
        name: "Aldoardana Refih",
        status: "Leader",
        role: "Product Manager",
        university: "Universitas Indonesia"
      },
      {
        name: "Radoalnoid",
        status: "Member",
        role: "Software Engineer",
        university: "Universitas Indonesia"
      },
      {
        name: "Lauren",
        status: "Member",
        role: "UX Designer",
        university: "Universitas Indonesia"
      }
    ]
  },
  {
    name: "Team Radiant",
    member: [
      {
        name: "Naufal Fawwaz",
        status: "Leader",
        role: "Product Manager",
        university: "Universitas Brawijaya"
      },
      {
        name: "Nauval Fahreza ",
        status: "Member",
        role: "Software Developer",
        university: "Universitas Brawijaya"
      },
      {
        name: "Robby Hu tao C1",
        status: "Member",
        role: "DPS",
        university: "Universitas Brawijaya"
      }
    ]
  },
  {
    name: "Team Tiga",
    member: [
      {
        name: "Satria",
        status: "Leader",
        role: "Product Manager",
        university: "Universitas Bina Nusantara"
      },
      {
        name: "Dian",
        status: "Member",
        role: "Frontend Developer",
        university: "Universitas Bina Nusantarar"
      },
      {
        name: "Rina",
        status: "Member",
        role: "UI Designer",
        university: "Universitas Bina Nusantara"
      }
    ]
  }
];


const TeamDropDown = ({ teamData, index, isActive, setIsActive }) => {
  return (
    <div className="border-primary3 rounded-lg border-2">
      <div
        className="flex flex-row items-center justify-between text-xl text-primary3 py-2 px-3">
        <button
          onClick={() => setIsActive(index)}
          className="flex flex-row gap-3 items-center font-semibold">
          <div
            className="p-1">
            {isActive === index ?
              <BsChevronDown />
              :
              <BsChevronRight />
            }
          </div>
          {teamData.name}
        </button>
        <div className="flex flex-row gap-3 items-center text-3xl">
          <AiOutlinePlusCircle />
          <BsThreeDotsVertical />
        </div>
      </div>
      {isActive === index ?
        <div className="border-t-2 border-primary3 py-3 px-4 flex flex-col gap-4">
          {teamData.member.map(data => (
            <div
              className={`bg-primary2 rounded-lg flex flex-row px-3 py-1 gap-3 items-center text-primary3 ${data.status === 'Member' ? 'font-medium' : 'font-bold'}`}
              key={data.name}
            >
              <img src={profile} alt="profile" className="h-[35px] w-auto rounded-full" />
              <p className="text-xl">{data.name}</p>
              {data.status === 'Leader' ? <p>({data.status})</p> : null}
            </div>
          ))}
        </div>
        :
        null
      }
    </div>
  )
}

const Teams = () => {
  const [isActive, setIsActive] = useState(0);
  const [isAcc, setIsAcc] = useState(false)
  const [teamData, setTeamData] = useState(team);

  function handleAccept() {
    let newTeam = {
      name: `Darkin Team`,
      member: [
        {
          name: "Naafiri",
          status: "Leader",
          role: "Product Manager",
          university: "Universitas Brawijaya"
        },
        {
          name: "Nauval Fahreza",
          status: "Member",
          role: "Software Developer",
          university: "Universitas Brawijaya"
        },
      ]
    };
    setTeamData([...teamData, newTeam])
    toast.success('Sukses menambahkan kelompok', {
      position: 'bottom-right',
      className: 'text-xl font-medium p-4'
    });
    setIsAcc(true)
  }

  return (
    <ContentLayout>
      <Toaster />
      <div className="flex items-center justify-center pb-10">
        <div className="w-full sm:w-[80%] bg-primary3 py-10 px-4 sm:px-[52px] rounded-lg">
          <div className="bg-white px-4 sm:px-11 py-4 sm:py-4 pb-4 sm:pb-10 rounded-lg">
            <div className="flex flex-row items-center gap-6 text-3xl font-semibold mb-5 text-primary3">
              <MdOutlineNotificationsNone className="text-6xl" />
              Notification
            </div>
            {!isAcc ? 
              <div className="bg-primary2 px-5 py-4 rounded-lg">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-start gap-3">
                    <img src={profile} alt="" className="rounded-full w-10 h-10" />
                    <div className="flex flex-col text-primary3 font-bold text-2xl ">
                      Naafiri
                      <p className="text-lg text-gray-text font-semibold">Naafiri invite you to join darkin team</p>
                    </div>
                  </div>
                  <div className="text-5xl flex flex-row gap-2">
                    {/* Tombol accept */}
                    <button
                      onClick={handleAccept}>
                      <AiOutlineCheckCircle className="text-success" />
                    </button>
                    <AiOutlineCloseCircle className="text-error" />
                  </div>
                </div>
              </div>
              :
              <p className="text-center text-2xl">Tidak ada notifikasi saat ini</p>
            }
          </div>
          <div className="flex flex-row mt-10 sm:mt-[52px]">
            <div className="w-full sm:w-[60%]">
              <div className="flex flex-row items-center justify-between mb-5">
                <h3 className="text-3xl text-white font-semibold" >Team Competition</h3>
                <button className="bg-white py-2 px-4 text-xl text-primary3 font-semibold rounded-lg">+ New Team</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-14">
            <div className="w-full sm:w-[60%]">
              <div className="bg-white px-6 py-7 rounded-lg w-full flex flex-col gap-6">
                {teamData.map((data, index) => (
                  <TeamDropDown key={data.name} teamData={data} index={index} isActive={isActive} setIsActive={setIsActive} />
                ))}
              </div>
            </div>
            <div className="bg-white flex-1 px-4 py-5 rounded-lg h-fit">
              <div className="flex flex-row text-primary3 font-semibold text-2xl items-center gap-2">
                <IoMdInformationCircle className="h-10 w-10" />
                {teamData[isActive].name}
              </div>
              <div className="bg-primary2 rounded-lg px-4 py-3 mt-4">
                <div className="flex flex-row gap-3">
                  <img src={profile} alt="profile" className="rounded-full w-[50px] h-auto" />
                  <div className="flex flex-col text-primary3 font-bold">
                    <h4 className="text-xl">{teamData[isActive].member[0].name}</h4>
                    (Leader)
                  </div>
                </div>
                <div className="mt-5 text-gray-text font-medium text-lg">
                  <p>{teamData[isActive].member[0].university}</p>
                  <p>{teamData[isActive].member[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Teams;
