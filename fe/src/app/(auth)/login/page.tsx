'use client'
import { loginAction } from '@/actions/login'
import authApiRequest from '@/apiRequest/auth'
import { clientSessionToken } from '@/lib/http'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaFacebookSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SiApple } from 'react-icons/si'
import { TfiEmail } from 'react-icons/tfi'
import { toast } from 'react-toastify'

const Login = () => {
  const router  = useRouter()
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>()

  const onSubmit: SubmitHandler<ILogin> = async (data: ILogin) => {
    try {
      setLoading(true)
      const { payload } = await loginAction(data)
      if(payload.statusCode === 200) {
        toast.success('Đăng nhập thành công')
        clientSessionToken.value = payload.result.access_token
        await authApiRequest.auth({
          sessionToken: payload.result.access_token,
        })
        router.push('/profile')
      } else {
        toast.error(payload?.message || 'Đăng nhập thất bại')
      }
    } catch (e) {
      console.log(e)
      toast.error('That bai')
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
        <form className='my-4' onSubmit={handleSubmit(onSubmit)} method='POST'>
          <div>
            <div className='relative'>
              <input
                type='text'
                id='email'
                aria-describedby='email_help'
                className='block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border appearance-none dark:text-white focus:outline-none focus:ring-0 peer'
                placeholder=''
                {...register('email', {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Địa chỉ email không hợp lệ',
                  },
                  required: {
                    value: true,
                    message: 'Vui lòng nhập email',
                  },
                  validate: {
                    notAdmin: (fieldValue) => {
                      return fieldValue !== 'chatapp@gmail.com' || 'Hãy thử địa chỉ email khác'
                    },
                    notBlacklisted: (fieldValue) => {
                      return !fieldValue.endsWith('.xyz') || 'Email này không được phép'
                    },
                  },
                })}
              />
              <label
                htmlFor='email'
                className='absolute text-sm text-black dark:text-green-500 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                Email
              </label>
            </div>
            <p className='text-core text-sm mt-1 ml-1'>{errors.email?.message}</p>
          </div>
          <div className='mt-2'>
            <div className='relative'>
              <input
                type='password'
                id='password'
                autoComplete='off'
                aria-describedby='password_help'
                className='block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border appearance-none dark:text-white focus:outline-none focus:ring-0 peer'
                placeholder=''
                {...register('password', {
                  required: {
                    value: true,
                    message: 'Vui lòng nhập mật khẩu',
                  },
                })}
              />
              <label
                htmlFor='password'
                className='absolute text-sm text-black dark:text-green-500 duration-300 transform -translate-y-4 scale-90 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
              >
                Mật khẩu
              </label>
            </div>
            <p className='text-core text-sm mt-1 ml-1'>{errors.password?.message}</p>
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
