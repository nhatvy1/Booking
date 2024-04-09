import { useState } from 'react'
import Content from './Content'

const Demo = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  console.log('re-render demo')

  return (
    <div>
      <Content count2={count2}/>

      <div className='mt-2'>{count1}</div>
      <button onClick={() => setCount1(count1 + 1)}>Increase 1</button>

      <button onClick={() => setCount2(count2 + 1)}>Increase 2</button>
    </div>
  )
}

export default Demo
