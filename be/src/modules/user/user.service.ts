import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { Hash } from 'src/utils/hash'
import { LoginDto } from '../auth/dto/login.dto'
import { RoleService } from '../role/role.service'
import { role } from 'src/utils/role'
import { PermissionService } from '../permission/permission.service'
import { mapPermission } from 'src/utils/permission'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
    private readonly permissionService: PermissionService,
  ) {}

  checkUser(email: string) {
    return this.userRepository.findOneBy({ email })
  }

  async createUser(createUser: CreateUserDto) {
    const foundUser = await this.checkUser(createUser.email)
    if (foundUser) {
      throw new ConflictException('Email đã được đăng ký')
    }

    const hashPassword = Hash.generateHash(createUser.password)
    const findCustomerRole = await this.roleService.getRoleByName(role.CUSTOMER)

    const dataToCreate = {
      ...createUser,
      password: hashPassword,
      role: findCustomerRole,
    }

    const user = this.userRepository.create(dataToCreate)
    await this.userRepository.save(user)
    return user
  }

  async login(signInDto: LoginDto) {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.role', 'role')
        .select(['user', 'role'])
        .where({ email: signInDto.email })
        .addSelect(['user.password'])
        .getOne()

      if (!user) {
        throw new NotFoundException('Người dùng không tồn tại')
      }

      const findPermission = await this.permissionService.getPermissionByRole(
        user.role.id,
      )
      return { ...user, permission: findPermission }
    } catch (e) {
      throw e
    }
  }

  async getUserById(id: number) {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.role', 'role')
        .addSelect(['user.password'])
        .getOne()

      const findPermission = await this.permissionService.getPermissionByRole(
        user.role.id,
      )

      if (!user) {
        throw new NotFoundException('Người dùng không tồn tại')
      }

      return { ...user, permissions: findPermission }
    } catch (e) {
      throw e
    }
  }

  async getListUsers() {
    try {
      const response = await this.userRepository.find({
        order: {
          createdAt: 'DESC',
        },
      })
      return response
    } catch (e) {
      throw e
    }
  }

  async deleteUserById(id: number) {
    try {
      const user = await this.userRepository.findOneBy({ id })
      if (user) {
        await this.userRepository.remove(user)
      }
      return user
    } catch (e) {
      throw e
    }
  }

  async updateUserById(id: number, updateUserDto) {
    try {
      const user = await this.userRepository.findOneBy({ id })
      if (!user) {
        throw new NotFoundException('Người dùng không tồn tại')
      }

      for (const key of Object.keys(updateUserDto)) {
        user[key] = updateUserDto[key]
      }

      await this.userRepository.save(user)
      return user
    } catch (e) {
      throw e
    }
  }
}
