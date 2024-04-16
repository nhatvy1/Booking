import accountApiRequest from '@/apiRequest/account'
import { cookies } from 'next/headers'

async function getDataProfile() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  const { payload } = await accountApiRequest.getProfile(sessionToken?.value ?? '')
  return payload
}

const ProfilePage = async () => {
  const res = await getDataProfile()
  return (
    <div>
      <h1>Profile</h1>
      <div>{res?.result?.id}</div>
      <div>{res?.result?.fullName}</div>
      <div>{res?.result?.email}</div>
      <div>{res?.result?.createdAt.toString()}</div>
      <div>{res?.result?.status}</div>
    </div>
  )
}

export default ProfilePage
