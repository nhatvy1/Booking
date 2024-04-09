import Image from 'next/image'
import MainSection from '../Commons/Section'
import { logo1 } from '../../../public/icons'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { LuUserCircle2 } from 'react-icons/lu'
import { Button } from '@nextui-org/react'

const Header = () => {
  return (
    <MainSection>
      <div className='flex justify-between items-start'>
        <div className='h-12 w-[120px]  '>
          <Image
            src={logo1}
            alt='Logo airbnb'
            width={logo1.width}
            height={logo1.height}
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <Button className='h-12 w-[90px] flex items-center justify-center gap-x-2 border rounded-full px-3 cursor-pointer bg-white border-gray-300 !outline-none'>
            <HiBars3BottomLeft size={24}/>
            <LuUserCircle2 size={24}/>
          </Button>
        </div>
      </div>
    </MainSection>
  )
}

export default Header
