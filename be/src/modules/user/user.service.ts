import { ConflictException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { Hash } from 'src/utils/hash'
import { LoginDto } from '../auth/dto/login.dto'
import { RoleService } from '../role/role.service'
import { role } from 'src/utils/role'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService
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
    const findCustomerRole = await this.roleService.getRoleByName(
      role.CUSTOMER,
    )

    const dataToCreate = {
      ...createUser,
      password: hashPassword,
      role: findCustomerRole,
    };

    const user = this.userRepository.create(dataToCreate)
    await this.userRepository.save(user)
    return user
  }

  login(signInDto: LoginDto): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where({ email: signInDto.email })
      .addSelect('user.password')
      .getOne()
  }

  async getListUsers() {
    try {
      const response = await this.userRepository.find({
        order: {
          createdAt: 'DESC'
        }
      })
      return response
    } catch(e) {
      throw e
    }
  }

  async deleteUserById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id })
      if(user) {
        await this.userRepository.remove(user)
      }
      return user
    } catch(e) {
      throw e
    }
  }
}
