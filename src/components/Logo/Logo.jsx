import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to={'/'} className='flex items-end'>
      <div className='h-[20px] w-[20px] rounded-full bg-purper' />
      <div className='ml-[9px] h-[35px] w-[20px] rounded-full bg-pink'></div>
    </Link>
  )
}
