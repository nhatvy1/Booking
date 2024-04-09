import { memo } from 'react'

const Content = ({ count2 }: any) => {
  console.log('content re-render')
  return <div>content {count2}</div>
}

export default memo(Content)
