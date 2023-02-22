import React from 'react'
import Logo from '../Logo/Logo'

export default function Footer() {
  return (
    <div className='my-0 mx-auto max-w-[1600px]'>
      <div className='h-[2px] w-full bg-purper opacity-20' />
      <div className='mx-auto mt-[96px] flex max-w-[1120px] justify-around pb-[228px]'>
        <div>
          <div className='flex items-center'>
            <Logo />
            <span className='ml-4 text-[20px] font-black text-title'>DataWarehouse</span>
          </div>
          <h3 className='mt-[67px] leading-10'>Warehouse Society, 234</h3>
          <h3 className=' text-[16px] leading-8'>Bahagia Ave Street PRBW 29281</h3>
          <h4 className='mt-[18px] w-[350px] text-[16px] leading-10'>info@warehouse.project 1-232-3434 (Main)</h4>
          <p className='mt-[118px] w-[300px] text-[12px] leading-8'>
            © Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.
          </p>
        </div>
        <div className='pt-3'>
          <h3 className='text-[16px] font-black leading-[25.6px]'>About</h3>
          <ul className='mt-[30px] list-none text-[16px] font-normal leading-[40px] '>
            <li>Profile</li>
            <li>Features</li>
            <li>Careers</li>
            <li>DW News</li>
          </ul>
        </div>
        <div className='pt-3'>
          <h3 className='text-[16px] font-black leading-[25.6px]'>Help</h3>
          <ul className='mt-[30px] list-none text-[16px] font-normal leading-[40px] '>
            <li>Support</li>
            <li>Sign up</li>
            <li>Guide</li>
            <li>Reports</li>
            <li>Q&A</li>
          </ul>
        </div>
        <div className='pt-3'>
          <h3 className='text-[16px] font-black leading-[25.6px]'>Socical Media</h3>
          <div className='mt-[30px] flex items-center'>
            <div className='mr-[14px] h-[50px] w-[50px] rounded-full bg-[#212353]'></div>
            <div className='mr-[14px] h-[50px] w-[50px] rounded-full bg-[#212353]'></div>
            <div className='h-[50px] w-[50px] rounded-full bg-[#212353]'></div>
          </div>
          <div className='mt-[228px] flex justify-end'>
            <img src='./Image/messenger.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
