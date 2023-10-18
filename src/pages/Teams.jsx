import { MdOutlineNotificationsNone } from "react-icons/md";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { BsChevronDown, BsChevronRight, BsThreeDotsVertical } from "react-icons/bs"
import { IoMdInformationCircle } from "react-icons/io"
import ContentLayout from "../Layout/ContentLayout";
import { profile } from "../assets";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsChatDots } from "react-icons/bs"

const LeaderBoardSvg = ({ className }) => (
  <svg className={className} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
    <rect width="35" height="35" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_277_148" transform="scale(0.01)" />
      </pattern>
      <image id="image0_277_148" width="100" height="100" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEY0lEQVR4nO2bS4gcRRjHSyXRbKaqzUrQNRFBRAUv6iIEDEbJdn2dZJL5vo4dj/G0KPEgCIKnSE6KIgheBMGDBw85qhc1h5D4ADUaIb4OHlTIIQjxAYpRVmp2Z6dn9uE8uqdqu/8/qMtAV3d/v6n66tVKAQAAAAAAAAAAAAAAAAAAAACAf7Jss7H8pCH5RJP8YUgWyizte1j+2JAcc/f2/fpBsWXu0M3a8rmyJawpx/LnUyQzvuMQBlm22acM020xn6nZ+U2q7ix1UwtBFMtPqLrjckZfUN7ZciDbUfZ9pxPZaSy/23tv+UjVHU38ez4o04nsnNS9t9nWLb25RH5Tdae/21A1u39w+A6IgZCwAmIgJKyAGAgpPiDG8iujXg8hBQckIrlPW/kVQjwK0fv4Dm3Tp7Xlt4yVv8YRihZShBBqPbbWbBtCfAiJWwfd2pMrhuRrCAkph8SteyAEQqoLWkggO3ZFJeWoil2W7x07CAlwx84VTfKjqnsLCWXHzskwVpJhn796Qjzt2BVFVDUhPnfsiiCqmpDgHmhIICQwIrSQamH8DWJWPzm50buscfE9ulxxcnIcIdfvT2/VJK9pkh8W9yX4T0P8jSZ+fjpJjNoAaMs/+RbSc3JyVCHR3vQ2Y+XSOtbPb9+TNVTg6Jj3tedAoZycHFWIsfJmvsk1Et6tLTeN5Z87vzeo9Uy54dy4rHlycnQhfHE58AnvXv6d+NluM+T3SnujCrDqyckxhPzTucYNPVfbXnUtp7S3qQgr4j9yDrE82ykzzeZU9wb8eK6+t0t7k4pQmJB1Vo7P9yQp4EnI7PwmTXwyl6C+U3uOXjdyfTWhFCHb5rJIW/kg1zIuajp0p6owDeKWIT7tErGbdWviLw3xi1P7s5u8CnEzTGPlq7yMhk3vUhXGkBxbc/5F/IuxB2/3IkTv5RvqJuPGON6qiS8vvjP/rWM+qhPZZaycyY0uX528kOPHr9bEn9ZJhiOy6cO51nCyO9yXA7n8eUZNWkjPA7iHS2SXqgGGUuqcmtQkz3V+j6j1UC4eH05cSH7pZOlf8frSQmNPUTXBEL+Ui8UbHoR0l07WK6rCzDSbU25i7PKIyyfLeWWI3qJIIf/WXUjUt1tpiL+PKJ0LY2JYQ6IVQtojrHPuI6JB64CQEliai13ojr7ki0GvhZCS6BtlLTSSbPsg10HImDTi9MHI8rwr+eTd331tpcN3D1IfhIyJIX65my/kqc7vUXL43nxw3Rb3YPUhqY+FsemjuVHV2c6KtrHyQm4eckEpddVA9UHImCTJtW54m1s+uey2GnpaRyyPDFodhBSA+yzbWPl25ZDXfS/PR4apC0KKIsuuMYncv9iF8ZFGnD7gVoKHrQZCAgNCAgNCAgNCAgNCAgNCNpqQzjoNCk8kBv8rBEW8xsAJuQIJEsof8Yr7LPpUAA+CQu3dxvfbh9205ROrnRhBkcnFwPIJY7Np34MMAAAAAAAAAAAAAAAAAAAAAIDyyH+3NdXrXz62NQAAAABJRU5ErkJggg==" />
    </defs>
  </svg>

)

const DiversitySvg = ({ className }) => (
  <svg className={className} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
    <rect width="35" height="35" fill="url(#pattern1)" />
    <defs>
      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image1_277_166" transform="scale(0.01)" />
      </pattern>
      <image id="image1_277_166" width="100" height="100" href="data:image/png;base64,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" />
    </defs>
  </svg>
)

const team = [
  {
    name: "Hunter Team",
    member: [
      {
        name: "Hanif Robby",
        status: "Leader",
        role: "Frontend Web Developer",
        university: "Universitas Brawijaya"
      },
      {
        name: "Radoalnoid",
        status: "Member",
        role: "Bakcend Developer",
        university: "Universitas Brawijaya"
      },
      {
        name: "Lauren",
        status: "Member",
        role: "UI/UX Designer",
        university: "Universitas Brawijaya"
      }
    ]
  },
  {
    name: "Team Radiant",
    member: [
      {
        name: "Naufal Fawwaz",
        status: "Leader",
        role: "UI/UX Designer",
        university: "Universitas Brawijaya"
      },
      {
        name: "Nauval Fahreza ",
        status: "Member",
        role: "Frontend Web Developer",
        university: "Universitas Brawijaya"
      },
      {
        name: "Hanif Robby",
        status: "Member",
        role: "Product Manager",
        university: "Universitas Brawijaya"
      }
    ]
  },
  {
    name: "Team Tiga",
    member: [
      {
        name: "Hanif Robby",
        status: "Member",
        role: "Frontend Web Developer",
        university: "Universitas Brawijayar"
      },
      {
        name: "Satria",
        status: "Leader",
        role: "Product Manager",
        university: "Universitas Brawijaya"
      },
      {
        name: "Rina",
        status: "Member",
        role: "UI Designer",
        university: "Universitas Brawijaya"
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
          name: "Hanif Robby",
          status: "Member",
          role: "Frontend Web Developer",
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
                {teamData[isActive].name} Detail
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
              {teamData[isActive].member[0].name === "Hanif Robby" ?
                <form className="border-2 text-primary3 border-primary3 rounded-lg px-4 py-3 mt-7 flex flex-col items-center w-full">
                  <h3 className="text-center text-2xl text-primary3 font-bold">Open Recruitment</h3>
                  <div className="flex flex-col gap-5 mt-9 text-xl font-medium w-full">
                    <div className="flex flex-row gap-4 rounded-lg border-2 pl-4 py-1 border-primary3">
                      <LeaderBoardSvg className={"w-9"} />
                      <input
                        placeholder="Competition Name"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-row gap-4 rounded-lg border-2 pl-4 py-1 border-primary3">
                      <DiversitySvg className={"w-9"} />
                      <input
                        placeholder="Category"
                        type="text"
                      />
                    </div>
                    <div className="flex w-full flex-row gap-4 rounded-lg border-2 pl-4 py-1 border-primary3 overflow-hidden">
                      <BsChatDots className="text-primary3 text-4xl" />
                      <textarea
                        rows="5"
                        className='resize-none flex-1 mt-1'
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="bg-primary3 text-xl font-semibold rounded-lg px-12 py-2 text-white mt-7">Post</button>
                </form>
                :
                null
              }
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default Teams;
