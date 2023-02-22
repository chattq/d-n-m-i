import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation, Thumbs } from 'swiper'
import '../../chat.css'
import { useQuery } from '@tanstack/react-query'
import { testimon } from '../../apis/testimonSlider'

export default function TestimonlSilder() {
  const { data } = useQuery({
    queryKey: ['/galleries'],
    queryFn: testimon.inforUser
  })
  const dataUser = data?.data
  return (
    <div style={{ width: '80%', margin: '0 auto', height: 'auto' }}>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Navigation, Pagination]}
        className='mySwiper swiper-wrapper'
      >
        {dataUser?.map((item, index) => {
          return (
            <SwiperSlide
              key={item.id}
              className=' flex max-h-[330px] items-start gap-x-[30px] rounded-[20px] border bg-white px-[35px] pb-[50px]'
            >
              <div>
                <img src={item.imageUrl} alt='' />
              </div>
              <div>
                <p className='max-w-[240px]'>{item.desctiption}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
