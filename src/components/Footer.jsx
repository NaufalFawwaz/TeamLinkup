import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full bg-white py-10 flex flex-row justify-between items-center px-20'>
        <img src={logo} alt="logo" className='w-28'/>
        <p className='w-[392px] text-lg font-medium text-gray-text'>Kunjungi sosial media kami untuk mendapatkan informasi mengenai TeamLinkup yang terbaru</p>
        <div>
          <h4 className='text-2xl font-bold text-primary3 mb-5'>Email</h4>
          <Link to={'/'} className='font-medium text-gray-text text-xl'>teamlinkup@gmail.com</Link>
        </div>
        <div>
          <h4 className='text-2xl font-bold text-primary3'>Social Media</h4>
          <div className='flex flex-row gap-10 items-center mt-5'>
              <BsInstagram className='w-10 h-auto'/>
              <BsInstagram className='w-10 h-auto'/>
              <BsInstagram className='w-10 h-auto'/>
          </div>
        </div>
    </div>
  )
}

export default Footer