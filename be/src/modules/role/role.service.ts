import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from './role.entity'
import { role } from 'src/utils/role'
import { PermissionService } from '../permission/permission.service'
import { actionEnum } from '../permission/permission.entity'
import { CreateRoleDto } from './dto/create.role.dto'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    private readonly permissionService: PermissionService,
  ) {}

  async initRole() {
    try {
      const admin = this.roleRepository.create({
        name: 'Super Admin',
        slug: role.ADMIN,
      })
      await this.roleRepository.save(admin)
      const customer = this.roleRepository.create({
        name: 'Người dùng',
        slug: role.CUSTOMER,
      })
      await this.roleRepository.save(customer)

      return { mesage: 'Success' }
    } catch (e) {
      throw e
    }
  }

  async getRoleByName(slug: string) {
    try {
      const role = await this.roleRepository.findOne({
        where: { slug: slug },
        relations: {  permission: true }
      })
      return role
    } catch (e) {
      throw e
    }
  }

  async getRoleById(id: number) {
    try {
      const role = await this.roleRepository.findOneBy({ id })
      return role
    } catch (e) {
      throw e
    }
  }

  async createRole({ name, slug }: CreateRoleDto) {
    try {
      const result = this.roleRepository.create({ name, slug })
      const role = await this.roleRepository.save(result)

      return role
    } catch (e) {
      throw e
    }
  }

  async updateRole(id: number) {
    try {
      return { msg: 'update role' }
    } catch (e) {
      throw e
    }
  }
}
