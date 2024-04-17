import http from '@/lib/http'

const authApiRequest = {
  login: (body: ILogin) => http.post<ILoginRes>('auth/login', body),
  auth: (body: { sessionToken: string }) =>
    http.post('api/auth', body, { baseUrl: '' }),
  logoutFromNextServerToServer: (sessionToken: string)=> http.post('/auth/logout', null, {
    headers: {
      Authorization: `Bearer ${sessionToken}`
    }
  }),
  logoutFromNextClientToNextServer: ()=> http.post('/api/auth/logout', {}, {
    baseUrl: ''
  })
}

export default authApiRequest