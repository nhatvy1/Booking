import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { flexCenter } from '../../../theme/common.style'

const HomeIntroduce = () => {
  return (
    <Box>
      <Box sx={flexCenter}>
        <img src='/robot.gif' alt='Loi anh' />
      </Box>
      <Typography component='p' variant='h4' sx={flexCenter}>
        Chào mừng đến với&nbsp;
        <Typography component='span' variant='h4' sx={{ color: '#ff385c' }}>
           Airbnb Dashboard
        </Typography>
      </Typography>
    </Box>
  )
}

export default HomeIntroduce
