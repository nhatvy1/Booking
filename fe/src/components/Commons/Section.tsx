import { ReactNode } from 'react'

const MainSection = ({ children }: { children: ReactNode }) => {
  return <div className='container py-2'>{children}</div>
}

export default MainSection