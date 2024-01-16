import { flexJustifyBetween } from '../../theme/common.style'
import Box from '@mui/material/Box'
import Logo from './Logo'
import Setting from './Setting'


const Header = () => {
  return (
    <Box
      p={2}
      sx={{ ...flexJustifyBetween, borderBottom: '1px solid lightgray' }}
    >
      <Logo />
      <Setting />
    </Box>
  )
}

export default Header
