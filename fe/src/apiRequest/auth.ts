import http from '@/lib/http'

const authApiRequest = {
  login: (body: ILogin) => http.post<ILoginRes>('auth/login', body),
  auth: (body: { sessionToken: string }) =>
    http.post('api/auth', body, { baseUrl: '' }),
}

export default authApiRequest