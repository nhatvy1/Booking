interface IUser {
  id: number
  email: string
  fullName: string
  avatar: string
  createdAt: Date
  status: number
}

interface ILogin {
  email: string
  password: string
}

interface ILoginRes extends IResponse {
  result: {
    result: {
      id: number
      email: string
      fullName: string
      avatar: string
      createdAt: Date
      status: number
    }
    access_token: string
    refresh_token: string
  }
}

interface IRegister {
  email: string
  password: string
  fullName: string
  avatar: File
}


interface IProfileRes extends IResponse {
  result: IUser
}