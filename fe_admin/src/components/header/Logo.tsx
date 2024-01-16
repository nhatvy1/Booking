import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { flexCenter, flexJustifyBetween } from '../../theme/common.style'
import { Link } from '@mui/material'
import logo from '/airbnb.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { memo } from 'react'

const Logo = () => {
  console.log('Logo')

  return (
    <Box sx={{ ...flexJustifyBetween, width: '300px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link href='/' sx={{ ...flexCenter, width: '50px', height: '50px' }}>
          <img src={logo} alt='Loi anh' className='img-full' />
        </Link>
        <Typography
          component='span'
          fontSize={24}
          fontWeight={700}
          color='secondary'
        >
          Airbnb
        </Typography>
      </Box>
      <Box>
        <HiOutlineMenuAlt3
          size={35}
          style={{ cursor: 'pointer' }}
          // onClick={() => dispatch(showSidebar())}
        />
      </Box>
    </Box>
  )
}

export default memo(Logo) 
