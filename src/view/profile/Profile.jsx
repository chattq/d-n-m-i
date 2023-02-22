import React from 'react'
import InforProfile from '../../components/InforProfile/InforProfile'
import SideBar from '../../components/SideBar/SideBar'

export default function Profile() {
  return (
    <>
      <div className='flex'>
        <div className='w-[320px] bg-[#D9D9D9]'>
          <SideBar />
        </div>
        <div className='pt-[121px] pl-[120px]'>
          <InforProfile />
        </div>
      </div>
    </>
  )
}
