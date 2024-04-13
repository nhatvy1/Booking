'use client'
import Image from 'next/image'
import MainSection from '../Commons/Section'
import { logo1 } from '../../../public/icons'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { LuUserCircle2 } from 'react-icons/lu'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react'
import Link from 'next/link'

const Header = () => {
  return (
    <MainSection className='shadow-border'>
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
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button className='border border-disabled bg-white rounded-full h-12'>
                <HiBars3BottomLeft size={24} />
                <LuUserCircle2 size={24} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key='copy'>Đăng ký</DropdownItem>
              <DropdownItem key='new' showDivider>
                <Link href='/login'>Đăng nhập</Link>
              </DropdownItem>
              <DropdownItem key='edit'>Cho thuê chỗ ở qua Airbnb</DropdownItem>
              <DropdownItem key='edit'>Trung tâm trợ giúp</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </MainSection>
  )
}

export default Header
