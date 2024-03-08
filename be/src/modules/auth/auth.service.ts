import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { LoginDto } from './dto/login.dto'
import { Hash } from 'src/utils/hash'
import { TokenVerify, Tokens } from './interfaces/token.interface'
import { JwtService } from '@nestjs/jwt'
import { JWT_EXPIRES, JWT_SECRET, REFRESH_JWT_EXPIRES, REFRESH_JWT_SECRET } from 'src/utils/constant'
import { JwtPayload } from './interfaces/jwt.payload.interface'
import { mapPermission } from 'src/utils/permission'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async generateToken(userId: number, fullName: string): Promise<Tokens> {
    const payload: JwtPayload = { userId, fullName }
    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: JWT_SECRET,
        expiresIn: JWT_EXPIRES,
      }),
      this.jwtService.signAsync(payload, {
        secret: REFRESH_JWT_SECRET,
        expiresIn: REFRESH_JWT_EXPIRES,
      }),
    ])

    return { access_token: access_token, refresh_token: refresh_token }
  }

  async refreshToken(tokenVerify: TokenVerify) {
    const { access_token, refresh_token } = await this.generateToken(
      tokenVerify.userId,
      tokenVerify.fullName,
    )
    return { access_token, refresh_token }
  }

  async register(createUser: CreateUserDto) {
    const user = await this.userService.createUser(createUser)
    delete user.password
    return user
  }

  async login(login: LoginDto) {
    const user = await this.userService.login(login)

    console.log(user)
    const isValidPassword = Hash.compare(login.password, user.password)

    if (!isValidPassword) {
      throw new UnauthorizedException('Tài khoản hoặc mật khẩu không đúng')
    }

    const { access_token, refresh_token }: Tokens = await this.generateToken(
      user.id,
      user.fullName,
    )
    delete user.password
    return { user, access_token, refresh_token }
  }
}
