'use client'
import Image from 'next/image'
import MainSection from '../Commons/Section'
import { logo1 } from '../../../public/icons'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { LuUserCircle2 } from 'react-icons/lu'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import Link from 'next/link'
import { GrLanguage } from 'react-icons/gr'

const Header = () => {
  return (
    <MainSection className='shadow-border sticky top-0 bg-white z-50'>
      <div className='container py-4 flex justify-between items-start'>
        <Link href='/' className='h-12 w-[120px]  '>
          <Image
            src={logo1}
            alt='Logo airbnb'
            width={logo1.width}
            height={logo1.height}
            className='w-full h-full object-cover'
          />
        </Link>
        <div className='flex items-center gap-x-2'>
          <div className='h-12 hover:bg-gray-100 flex items-center justify-center px-3 rounded-full duration-400 text-sm font-semibold'>Cho thuê chỗ ở qua Airbnb</div>
          <div className='h-12 w-12 flex items-center justify-center hover:bg-gray-100 rounded-full duration-400 cursor-pointer'>
            <GrLanguage />
          </div>
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Button className='border border-disabled bg-white rounded-full h-12'>
                  <HiBars3BottomLeft size={24} />
                  <LuUserCircle2 size={24} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Action event example'>
                <DropdownItem key='register'>Đăng ký</DropdownItem>
                <DropdownItem key='login' as={Link} href='/login' showDivider>
                  Đăng nhập
                </DropdownItem>
                <DropdownItem key='thue'>Cho thuê chỗ ở qua Airbnb</DropdownItem>
                <DropdownItem key='support'>Trung tâm trợ giúp</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </MainSection>
  )
}

export default Header
