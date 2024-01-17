import Content from './components/Content/Content'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Box from '@mui/material/Box'

function App() {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Content />
      </Box>
    </>
  )
}

export default App
