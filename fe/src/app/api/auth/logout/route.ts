import authApiRequest from '@/apiRequest/auth'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')

  if (!sessionToken) {
    return Response.json(
      { message: 'Không nhận được token' },
      {
        status: 400,
      },
    )
  }

  try {
    const result = await authApiRequest.logoutFromNextServerToServer(sessionToken.value)

    return Response.json(result.payload, {
      status: 200,
      headers: {
        // Xóa cookie sessionToken
        'Set-Cookie': `sessionToken=; Path=/; HttpOnly; Max-Age=0`,
      },
    })
  } catch (e) {
    return Response.json(
      { message: 'Lỗi không xác định' },
      {
        status: 500,
      },
    )
  }
}
