interface IUser {
  id: number | null,
  email: string,
  fullName: string,
  status: number | null,
  createdAt: Date | null
}

interface IResponseListUser {
  message: string | null | ''
  statusCode: number | null
  result: IUser[] | []
}