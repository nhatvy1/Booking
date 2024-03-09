export interface JwtPayload {
  userId: number
  fullName: string
  permissions: { [key: string]: string[] }
}
