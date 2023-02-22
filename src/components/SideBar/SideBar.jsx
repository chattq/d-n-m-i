import React from 'react'
import { toast } from 'react-toastify'
import { auth } from '../../apis/auth'
import Logo from '../Logo/Logo'

export default function SideBar() {
  const handleLogout = () => {
    auth
      .getLogout()
      .then((res) => {
        toast.success('Đăng xuất thành công')
        localStorage.removeItem('accessToken')
        window.location.assign('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <div className='pt-[30px] pl-[100px]'>
        <Logo />
      </div>
      <div className='flex flex-col pl-[34px] pt-[40px]'>
        <span className='text-5 cursor-pointer font-normal leading-8'>Post</span>
        <span className='text-5 cursor-pointer font-normal leading-8' onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  )
}
