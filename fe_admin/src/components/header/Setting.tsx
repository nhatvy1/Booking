import Box from '@mui/material/Box'
import { flexCenter, flexJustifyBetween } from '../../theme/common.style'
import { CiSettings } from 'react-icons/ci'
import { BsArrowsFullscreen } from 'react-icons/bs'
import Avatar from '@mui/material/Avatar'
import { memo } from 'react'

const Setting = ()=> {

  return (
    <Box sx={{ ...flexCenter }}>
        <Box
          sx={{
            ...flexCenter,
            marginRight: '10px',
            background: 'rgb(227, 242, 253)',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          <BsArrowsFullscreen size={23} color='#1e88e5' cursor='pointer' />
        </Box>
        <Box
          sx={{
            ...flexJustifyBetween,
            background: 'rgb(227, 242, 253)',
            ':hover': { background: '#1e88e5', color: 'white' },
            borderRadius: '30px',
            width: '100px',
            padding: '8px',
            cursor: 'pointer',
            transition: '500ms',
          }}
        >
          <Avatar
            alt='Remy Sharp'
            src='/static/images/avatar/1.jpg'
            sx={{ width: 30, height: 30 }}
          />
          <CiSettings size={30} className='settings-btn' />
        </Box>
      </Box>
  )
}

export default memo(Setting) 