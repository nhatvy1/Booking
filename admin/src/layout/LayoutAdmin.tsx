import { useState } from 'react'
import Header from '../components/Header/index'
import Sidebar from '../components/Sidebar/index'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='dark:bg-boxdark-2 dark:text-bodydark'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className='px-6 mt-5'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin
