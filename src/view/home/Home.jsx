import React from 'react'
import Card from '../../components/Card/Card'
import Testimonials from '../../components/Testimonials/Testimonials'

export default function Home() {
  return (
    <div className='my-0 mx-auto max-w-[1120px] pt-[142px]'>
      <div className='relative'>
        <div>
          <div className='h-[183px] w-[641px] text-[80px] font-bold text-title'>Save your data storage here.</div>
          <div className='mt-[50px] h-[119px] w-[378px] text-[18px] font-medium leading-7 tracking-[0.3px] text-bio'>
            Data Warehouse is a data storage area that has been tested for security, so you can store your data here
            safely but not be afraid of being stolen by others.
          </div>
          <button className='mt-[50px] h-[60px] rounded-[50px] bg-purper px-[37px] text-[16px] font-bold text-white'>
            Learn more
          </button>
        </div>
        <div className='absolute top-[95.4px] left-[360.75px] h-[401px] w-[760px]'>
          <img src='./Image/image1.png' alt='' className='h-full w-full object-cover' />
        </div>
      </div>
      <div className='pt-[164px]'>
        <h3 className='text-center text-[40px] font-bold text-title'>Features</h3>
        <p className='m-auto w-[578px] pt-[49.24px] text-center text-[18px] font-medium leading-7 tracking-[0.3px] text-bio'>
          Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
        </p>
        <div className='mt-[69px] flex flex-shrink flex-wrap justify-between'>
          <Card
            title={'Search Data'}
            bio={
              'Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.'
            }
            image={'./Image/image1.1.png'}
            Rectangle={'./Image/Rectangle4.png'}
          />
          <Card
            title={'24 Hours Access'}
            bio={`Print out service gives you convenience if someday
            you need print data, just edit it all and just print it.`}
            image={'./Image/image2.png'}
            Rectangle={'./Image/Rectangle2.jpg'}
          />
          <Card
            title={'Print Out'}
            bio={`Access is given 24 hours a full morning to night and
              meet again in the morning, giving you comfort when
              you need data when urgent.`}
            image={'./Image/image3.png'}
            Rectangle={'./Image/Rectangle3.png'}
          />
          <Card
            title={'Security Code'}
            bio={`Data Security is one of our best facilities. Allows for your files
            to be safer. The file can be secured with a code or password that 
            you created, so only you can open the file.`}
            image={'./Image/image4.png'}
            Rectangle={'./Image/Rectangle1.png'}
          />
        </div>
        <Testimonials />
      </div>
    </div>
  )
}
