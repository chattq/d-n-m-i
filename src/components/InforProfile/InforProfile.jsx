import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { profile } from '../../apis/profile'
import Select, { components } from 'react-select'
import makeAnimated from 'react-select/animated'
import '../../chat.css'
import { toast } from 'react-toastify'

const formState = {
  title: '',
  tags: [],
  description: 'description'
}
export default function InforProfile() {
  const queryClient = useQueryClient()
  const [form, setForm] = useState(formState)
  const [checkEdit, setCheckEdit] = useState(true)
  const { data: tags } = useQuery({
    queryKey: ['/posts/tags'],
    queryFn: profile.tags
  })
  const tagsData = tags?.data
  // api post
  const { data: posts } = useQuery({
    queryKey: ['/posts'],
    queryFn: profile.post
  })
  const postsData = posts?.data.posts

  //select
  const animatedComponents = makeAnimated()
  const CaretDownIcon = () => {
    return (
      <div className='h-[17px] w-[20px]'>
        <img src='./Image/iconsArrow.png' alt='' className='h-full w-full object-cover' />
      </div>
    )
  }

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    )
  }
  const colourStyles = {
    control: (base) => ({
      ...base,
      border: '2px solid #000000',
      fontSize: '15px',
      fontWeight: '400',
      '&:hover': {
        borderColor: 'red',
        border: '2px solid #2265e2'
      }
    })
  }

  // tạo mới
  const createPostsMutation = useMutation({
    mutationFn: (form) => profile.createPost(form),
    onSuccess: (data) => {
      toast.success('Thêm thành công')
      queryClient.invalidateQueries({ queryKey: ['/posts'], exact: true })
    }
  })

  const onSubmit = (event) => {
    event.preventDefault()
    checkEdit ? createPostsMutation.mutate(form) : editPostMutation.mutate(form)
  }
  // xóa
  const deletePostMutation = useMutation({
    mutationFn: (id) => profile.deletePost(id),
    onSuccess: (data) => {
      toast.success(`Xóa thành công`)
      queryClient.invalidateQueries({ queryKey: ['/posts'], exact: true })
    }
  })
  const handleDelete = (id) => {
    deletePostMutation.mutate(id)
  }
  //thêm
  const editPostMutation = useMutation({
    mutationFn: (id) => profile.editPost(id),
    onSuccess: (data) => {
      setCheckEdit(true)
      toast.success(`Sửa thành công`)
      queryClient.invalidateQueries({ queryKey: ['/posts'], exact: true })
    }
  })
  const handleEdit = (value) => {
    setCheckEdit(false)
    setForm(value)
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='mb-[35px] flex items-center justify-between'>
          {checkEdit ? (
            <button className='rounded-[50px] border-[2px] border-transparent bg-purper px-[88px] py-[18px] text-[16px] font-bold leading-[25.6px] text-white hover:border-[2px] hover:border-[#2c4cdd]'>
              Add new
            </button>
          ) : (
            <button className='rounded-[50px] border-[2px] border-transparent bg-purper px-[88px] py-[18px] text-[16px] font-bold leading-[25.6px] text-white hover:border-[2px] hover:border-[#2c4cdd]'>
              Add new
            </button>
          )}

          <div className='flex items-center'>
            <input
              value={form.title}
              name='title'
              onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
              type='text'
              placeholder='Title'
              className='mr-[43px] h-[49px] w-[368px] rounded-[6px] border-[2px] border-[#000000] pl-[30px] text-[15px] font-normal outline-none hover:border-[2px] hover:border-[#2265e2] focus:border-[2px] focus:border-[#2265e2]'
            />
            <Select
              placeholder={'Tags'}
              onChange={(selected) =>
                setForm((prev) => ({
                  ...prev,
                  tags: selected
                }))
              }
              styles={colourStyles}
              classNames={{
                control: (state) =>
                  'h-[49px] w-[368px] rounded-[6px] border-[2px] border-[#000000] pl-[10px] pt-10px text-[15px] font-normal outline-none hover:border-[2px] hover:border-[#2265e2] focus:border-[2px] focus:border-[#2265e2]'
              }}
              components={{ animatedComponents, DropdownIndicator }}
              isMulti
              options={tagsData?.map((item, index) => ({ value: item, label: item }))}
            />
          </div>
        </div>
      </form>
      <table className='mb-[10px] w-[1356px] border-collapse bg-[#D9D9D9] text-[20px] font-normal leading-[24px]'>
        <thead>
          <tr className='h-[49px] '>
            <th className='min-w-[127px] border-r border-[#000000] pl-[44px] text-start text-[20px] font-normal leading-[24px]'>
              ID
            </th>
            <th className='min-w-[358px] border-r border-[#000000] text-center text-[20px] font-normal leading-[24px]'>
              Title
            </th>
            <th className='min-w-[358px] border-r border-[#000000] text-center text-[20px] font-normal leading-[24px]'>
              Description
            </th>
            <th className='min-w-[358px] border-r border-[#000000] text-center text-[20px] font-normal leading-[24px]'>
              Tags
            </th>
            <th className='min-w-[237px] text-center text-[20px] font-normal leading-[24px]'>Actions</th>
          </tr>
        </thead>
      </table>
      <table className='w-[1356px] border-collapse border-[#000000] bg-[#D9D9D9] text-[20px] font-normal leading-[24px]'>
        <tbody>
          {postsData &&
            postsData.map((value, index) => (
              <tr className='h-[49px]' key={value.id}>
                <td className='min-w-[127px] border border-[#000000] p-3 pl-[44px]'>{index + 1}</td>
                <td className='min-w-[358px] border border-[#000000] p-3 text-center'>{value.title}</td>
                <td className='min-w-[358px] overflow-hidden border border-[#000000] p-3 text-center'>
                  {value.description}
                </td>
                <td className='min-w-[358px] border border-[#000000] p-3 text-center'>
                  {value.tags}
                  {/* {value.tags && value.tags.length === 1 ? value.tags.map((item) => <span>{item} </span>) : value.tags} */}
                </td>
                <td className='min-w-[237px] border border-[#000000] text-center'>
                  <div className='flex items-center justify-center'>
                    <div className='mr-[49px] h-[23px] w-[29px]' onClick={() => handleEdit(value)}>
                      <img src='./Image/edit.png' alt='' className='h-full w-full object-cover' />
                    </div>
                    <div className='h-[23px] w-[29px]' onClick={() => handleDelete(value.id)}>
                      <img src='./Image/delete.png' alt='' className='h-full w-full object-cover' />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
