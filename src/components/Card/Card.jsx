import React from 'react'

export default function Card({ title, bio, image, Rectangle }) {
  return (
    <div className='relative h-[382px] w-[523px]'>
      <div className='absolute top-[101.5px] z-10'>
        <img src={image} className='object-cover' alt='' />
      </div>
      <div className='relative left-[88px] h-[352px] w-[435px]'>
        <div className='absolute right-0 top-[30px]'>
          <img src={Rectangle} className='object-cover' alt='' />
        </div>
        <div className='relative'>
          <div className='absolute'>
            <img src='./Image/Vector1.png' className='object-cover' alt='' />
          </div>
          <div className='absolute left-[169px] top-[78px]'>
            <h4 className='flex h-[49px] items-center text-[24px] font-normal leading-[31px] tracking-[0.3px] text-title'>
              {title}
            </h4>
            <p className='mt-[20px] w-[217px] text-[16px] font-normal leading-[25.6px] text-bio '>{bio}</p>
          </div>
          <div className='absolute left-[169px] top-[324px] flex items-center'>
            <span className='text-[16px] font-extrabold leading-[25.6px] text-title'>Learn more</span>
            <span className='ml-5 h-[14px]'>
              <img src='./Image/arrow1.png' className='object-cover' alt='' />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
