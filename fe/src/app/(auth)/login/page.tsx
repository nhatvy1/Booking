'use client'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SiApple } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'
import { toast } from 'react-toastify'

const Login = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      setLoading(true)
    } catch (e) {
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='border border-[#B0B0B0] max-w-[568px] my-20 mx-auto rounded-lg'>
      <h1 className='text-center font-medium py-4'>Đăng nhập hoặc đăng ký</h1>
      <hr />
      <div className='p-4'>
        <h3 className='text-[1.375rem] font-semibold'>Chào mừng bạn đến với Airbnb</h3>
        <form className='my-4'>
          <div>
            <div className='relative'>
              <input
                type='text'
                id='filled_success'
                aria-describedby='filled_success_help'
                className='block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border appearance-none dark:text-white focus:outline-none focus:ring-0 peer'
                placeholder=' '
              />
              <label
                htmlFor='filled_success'
                className='absolute text-sm text-black dark:text-green-500 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                Email
              </label>
            </div>
          </div>
          <div className='mt-2'>
            <div className='relative'>
              <input
                type='password'
                id='filled_success'
                aria-describedby='filled_success_help'
                className='block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border appearance-none dark:text-white focus:outline-none focus:ring-0 peer'
                placeholder=' '
              />
              <label
                htmlFor='filled_success'
                className='absolute text-sm text-black dark:text-green-500 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                Mật khẩu
              </label>
            </div>
          </div>
          <button className='bg-gradient-core w-full mt-2 rounded-md p-3 text-white'>
            Tiếp tục
          </button>
        </form>
        <p className='text-xs'>
          Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại. Có áp dụng phí dữ
          liệu và phí tin nhắn tiêu chuẩn.{' '}
          <Link href='/' className='underline'>
            Chính sách về quyền riêng tư
          </Link>
        </p>
        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
          <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900'>
            Hoặc
          </span>
        </div>
        <div>
          <div className='flex items-center border border-primary p-3 rounded-md'>
            <FaFacebookSquare size={24} color='#1877f2' />
            <p className='flex-1 text-center text-sm font-semibold'>Tiếp tục với Facebook</p>
          </div>
          <div className='flex items-center border border-primary p-3 rounded-md mt-2'>
            <FcGoogle size={24} />
            <p className='flex-1 text-center text-sm font-semibold'>Tiếp tục với Google</p>
          </div>
          <div className='flex items-center border border-primary p-3 rounded-md mt-2'>
            <SiApple size={24} />
            <p className='flex-1 text-center text-sm font-semibold'>Tiếp tục với Apple</p>
          </div>
          <div className='flex items-center border border-primary p-3 rounded-md mt-2'>
            <TfiEmail size={24} />
            <p className='flex-1 text-center text-sm font-semibold'>Tiếp tục với Email</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
