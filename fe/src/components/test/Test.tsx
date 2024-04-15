'use client'

import { useAppContext } from "@/context/AppProvider"
import { backend_url } from "@/lib/constant"
import { useEffect } from "react"

const Test = ()=> {
  const { sessionToken } = useAppContext()
  
  const fetchData: any = async ()=> {
    const res = await fetch(`${backend_url}/user/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionToken}`
      }
    })
    const data = await res.json()
    console.log(data)
  }

  useEffect(()=> {
    fetchData()
  }, [])

  return (
    <div>dsda</div>
  )
}

export default Test