import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'

export default function Header() {
  const checkToken = Boolean(localStorage.getItem('accessToken'))
  return (
    <div className='my-0 mx-auto max-w-[1120px] pt-[48px]'>
      <div className='flex justify-between'>
        <Logo />
        {checkToken ? (
          <div className='flex items-center'>
            <Link to={'/profile'} className='mr-[31px]'>
              <button className=' h-[60px] rounded-[50px] bg-purper px-[60px] text-[16px] font-bold text-white'>
                Profile
              </button>
            </Link>
            <Link to={'/sign-in'}>
              <button className='h-[60px] rounded-[50px] bg-purper px-[60px] text-[16px] font-bold text-white'>
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <Link to={'/sign-in'}>
            <button className='h-[60px] rounded-[50px] bg-purper px-[60px] text-[16px] font-bold text-white'>
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
