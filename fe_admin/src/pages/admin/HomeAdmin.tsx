import Box from '@mui/material/Box'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const HomeAdmin = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', zIndex: 1 }}>
        <Sidebar />
        <Box sx={{ borderRadius: '5px', flex: '1 1 0%', padding: '10px' }}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default HomeAdmin
