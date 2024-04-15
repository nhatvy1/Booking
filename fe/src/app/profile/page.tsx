import Test from "@/components/test/Test"
import { backend_url } from "@/lib/constant"
import { cookies } from "next/headers"

async function getDataProfile() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  const res = await fetch(`${backend_url}/user/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionToken?.value}`
    }
  })
  if(res.ok) { 
    let data = await res.json()
    return data
  }
  return 1
}

const ProfilePage = async()=> {
  const res = await getDataProfile()
  return (
    <div>
      <h1>Profile</h1>
      <div>{res?.result?.fullName}</div>
      <Test />
    </div>
  )
}

export default ProfilePage