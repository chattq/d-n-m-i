import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { auth } from '../../apis/auth'
import { rules } from '../../Rule/Rule'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import HeaderLogin from '../headerLogin/headerLogin'

export default function SignIn() {
  const nav = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const loginAccountMutation = useMutation({
    mutationFn: (body) => auth.login(body)
  })
  const onSubmit = handleSubmit(async (data) => {
    await loginAccountMutation.mutateAsync(data, {
      onSuccess: (data) => {
        localStorage.setItem('accessToken', data.data.accessToken)
        toast.success('Đăng nhập thành công')
        setTimeout(() => {
          window.location.assign('/')
        }, 1000)
      },
      onError: () => {
        console.log(errors)
      }
    })
  })

  return (
    <>
      <HeaderLogin />
      <div className='m-auto mt-[209px] max-w-[413px]'>
        <h3 className='translate-x-[65px] text-[64px] font-normal leading-[102px] text-[#000000]'>Sign In</h3>
        <form onSubmit={onSubmit}>
          <p className='mb-[12px] text-[16px] font-normal leading-[25.6px] text-[#000000]'>Username</p>
          <div className='m-auto w-[407px]'>
            <input
              type='text'
              {...register('username', rules.username)}
              className={`focus::border-[2px] h-[57px] w-[407px] rounded-[6px] border-[2px] pl-3 outline-none hover:border-[2px] hover:border-[#33bfe6d5]  ${
                errors.username?.message
                  ? 'border-[#e91111] focus:border-[#e91111]'
                  : 'border-[#000000] focus:border-[#7bb0dbd7]'
              }`}
            />
            <div className='mt-2 h-[20px] text-[16px] text-[red]'>{errors.username?.message}</div>
          </div>
          <button
            className='mt-[18px] h-[53px] w-[413px] rounded-[50px] bg-purper text-[16px] font-normal text-white'
            type='submit'
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  )
}
