'use server'

import http from "@/lib/http"

export const loginAction = async(data: ILogin)=> {
  const res = await http.post<ILoginRes>('auth/login', data)
  return res
}