'use server'

import { postDataAuth } from "@/services/fetch/fetchApi"

export const loginAction = async(data: ILogin)=> {
  const res = await postDataAuth('auth/login', data)
  return res
}