import { ConflictException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { Hash } from 'src/utils/hash'
import { LoginDto } from '../auth/dto/login.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  checkUser(email: string) {
    return this.userRepository.findOneBy({ email })
  }

  async createUser(createUser: CreateUserDto) {
    const foundUser = await this.checkUser(createUser.email)
    if(foundUser) {
      throw new ConflictException('Email đã được đăng ký')
    }

    const hashPassword = Hash.generateHash(createUser.password)
    const user = this.userRepository.create({
      fullName: createUser.fullName,
      password: hashPassword,
      email: createUser.email
    })
    await this.userRepository.save(user)
    return user
  }

  login(signInDto: LoginDto): Promise<User> {
    return this.userRepository
      .createQueryBuilder()
      .addSelect('password')
      .where({ email: signInDto.email })
      .getOne()
  }
}
