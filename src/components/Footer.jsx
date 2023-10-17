import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <div className='hidden w-full bg-white py-10 sm:flex flex-col sm:flex-row justify-between items-center px-4 sm:px-20 border-t-2 border-primary3'>
        <img src={logo} alt="logo" className='w-28' />
        <p className='w-[392px] text-lg font-medium text-gray-text'>Kunjungi sosial media kami untuk mendapatkan informasi mengenai TeamLinkup yang terbaru</p>
        <div>
          <h4 className='text-2xl font-bold text-primary3 mb-5'>Email</h4>
          <Link to={'/'} className='font-medium text-gray-text text-xl'>teamlinkup@gmail.com</Link>
        </div>
        <div>
          <h4 className='text-2xl font-bold text-primary3'>Social Media</h4>
          <div className='flex flex-row gap-10 items-center mt-5'>
            <BsInstagram className='w-10 h-auto' />
            <BsTwitter className='w-10 h-auto' />
            <BsFacebook className='w-10 h-auto' />
          </div>
        </div>
      </div>
      <div className='flex w-full bg-white py-10 sm:hidden flex-col justify-between px-4 sm:px-20 gap-5 border-t-2 border-primary3'>
        <div className='flex flex-row gap-4'>
          <img src={logo} alt="logo" className='w-28' />
          <p className='text-lg font-medium text-gray-text'>Kunjungi sosial media kami untuk mendapatkan informasi mengenai TeamLinkup yang terbaru</p>
        </div>
        <div className='flex flex-row items-end justify-between'>
          <div>
            <h4 className='text-xl font-bold text-primary3'>Email</h4>
            <Link to={'/'} className='font-medium text-gray-text text-lg'>teamlinkup@gmail.com</Link>
          </div>
          <div>
            <h4 className='text-xl font-bold text-primary3'>Social Media</h4>
            <div className='flex flex-row gap-4 items-center mt-2'>
              <BsInstagram className='w-8 h-auto' />
              <BsTwitter className='w-8 h-auto' />
              <BsFacebook className='w-8 h-auto' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer