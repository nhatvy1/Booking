import { Injectable } from '@nestjs/common'
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
        name: 'NGười dùng',
        slug: role.CUSTOMER,
      })
      await this.roleRepository.save(customer)

      await this.permissionService.addPermission({
        subject: 'all',
        action: actionEnum.MANAGE,
        role: admin,
      })

      return { mesage: 'Success' }
    } catch (e) {
      throw e
    }
  }

  async getRoleByName(slug: string) {
    try {
      const role = await this.roleRepository.findOneBy({ slug })
      return role
    } catch (e) {
      throw e
    }
  }

  async createRole({ name, slug, permissions }: CreateRoleDto) {
    try {
      console.log('Check permssions: ', permissions)
      const result = this.roleRepository.create({ name, slug })
      const role = await this.roleRepository.save(result)

      for (const key of Object.keys(permissions)) {
        permissions[key].forEach(async (action: actionEnum) => {
          this.permissionService.addPermission({ action, subject: key, role });
        });
      }

      return 1
    } catch(e) {
      throw e 
    }
  }
}
