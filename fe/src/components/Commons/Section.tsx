import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className: string 
}

const MainSection = ({
  children,
  className = '',
}: Props) => {
  return <div className={`${className}`}>{children}</div>
}

export default MainSection
