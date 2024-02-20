interface IRole {
  id: number | null
  name: string | null
  slug: string | null
}

interface IResponseRole {
  message: string | null | ''
  statusCode: number | null
  result: IRole[] | []
}

interface IPayloadRole {
  name: string | null
  slug: string | null
}