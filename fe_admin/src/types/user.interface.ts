interface IUser {
  id: number,
  email: string,
  fullName: string,
  status: number,
  createdAt: Date
}

interface IResponseListUser {
  message: string | null | ''
  statusCode: number | null
  result: IUser[] | []
}