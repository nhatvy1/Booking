import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { flexJustifyBetween } from '../../theme/common.style'
import { Link } from 'react-router-dom'
import logo from '/airbnb.png'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
  
const Logo = () => {
  return (
    <Box sx={{ ...flexJustifyBetween, width: '300px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Link to='/admin' style={{ display: 'flex' }}>
          <Box sx={{ width: '30px', height: '30px' }}>
            <img src={logo} alt='Loi anh' className='img-full' />
          </Box>
          <Typography
            component='span'
            fontSize={24}
            fontWeight={700}
            color='secondary'
          >
            Airbnb
          </Typography>
        </Link>
      </Box>
      <Box>
        <HiOutlineMenuAlt3
          size={35}
          style={{ cursor: 'pointer' }}
        />
      </Box>
    </Box>
  )
}

export default Logo
