import { normalizePath } from "./utils"

type CustomOptions = Omit<RequestInit, 'method'> & {
  baseUrl?: string | undefined
}

export class HttpError extends Error {
  status: number
  payload: {
    message: ''
    [key: string]: any
  }

  constructor({ status, payload }: { status: number; payload: any }) {
    super('Http Error')
    this.status = status
    this.payload = payload
  }
}

class SessionToken {
  private token = ''

  get value() {
    return this.token
  }

  set value(token: string) {
    //  Nếu gọi method này gọi ở server thì sẽ bị lỗi
    if(typeof window === 'undefined') {
      throw new Error('Cannot set token on server side')
    }
    this.token = token
  }
}

// object chỉ được truy cập ở client 
export const clientSessionToken = new SessionToken()

const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options?: CustomOptions | undefined,
) => {
  const body = options?.body ? JSON.stringify(options.body) : undefined
  const baseHeaders = {
    'Content-Type': 'application/json',
    Authorization: clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : ''
  }
  const baseUrl = options?.baseUrl === undefined ? 'http://localhost:5000/api/v1' : options.baseUrl
  const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

  const res = await fetch(fullUrl, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers
    },
    body,
    method
  })

  const payload: Response = await res.json()
  const data = {
    status: res.status,
    payload
  }

  // if(!res.ok) {
  //   throw new HttpError({ status: 401, payload: 'msg'})
  // }

  // Logic running client (browser)
  if (typeof window !== 'undefined') {
    if (['auth/login'].some(item => item === normalizePath(url))) {
      clientSessionToken.value = (payload as ILoginRes).result.access_token
    } else if('auth/logout' === normalizePath(url)) {
      clientSessionToken.value = ''
    }
  }
  return data
}

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('GET', url, options)
  },
  post<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('POST', url, {...options, body})
  },
  put<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('PUT', url, {...options, body})
  },
  delete<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('DELETE', url, {...options, body})
  }
}

export default http