import React from 'react'
import Logo from '../Logo/Logo'

export default function SideBar() {
  return (
    <div>
      <div className='pt-[30px] pl-[100px]'>
        <Logo />
      </div>
      <div className='flex flex-col pl-[34px] pt-[40px]'>
        <span className='text-5 font-normal leading-8'>Post</span>
        <span className='text-5 font-normal leading-8'>Logout</span>
      </div>
    </div>
  )
}
