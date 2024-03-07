import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from './role.entity'
import { role } from 'src/utils/role'
import { PermissionService } from '../permission/permission.service'
import { actionEnum } from '../permission/permission.entity'
import { CreateRoleDto } from './dto/create.role.dto'
import { throwError } from 'rxjs'
import { UpdateRoleDto } from './dto/update.role.dto'

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
    private readonly permissionService: PermissionService,
  ) {}

  async initRole() {
    try {
      const customer = this.roleRepository.create({
        name: 'Người dùng',
        slug: role.CUSTOMER,
      })
      await this.roleRepository.save(customer)

      const admin = this.roleRepository.create({
        name: 'Super Admin',
        slug: role.ADMIN,
      })
      await this.roleRepository.save(admin)
      await this.permissionService.createPermission({
        subject: 'all',
        action: actionEnum.MANAGE,
        role: admin,
      })

      return { mesage: 'Success' }
    } catch (e) {
      throw e
    }
  }

  async getAllRole() {
    try {
      const allRole = await this.roleRepository.find({
        relations: { permission: true },
      })
      return allRole
    } catch (e) {
      throw e
    }
  }

  async getRoleByName(slug: string) {
    try {
      const role = await this.roleRepository.findOne({
        where: { slug: slug },
        relations: { permission: true },
      })
      return role
    } catch (e) {
      throw e
    }
  }

  async getRoleById(id: number) {
    try {
      const role = await this.roleRepository.findOne({
        where: { id },
        relations: { permission: true },
      })
      if (!role) {
        throw new NotFoundException('Role không tồn tại')
      }
      return role
    } catch (e) {
      throw e
    }
  }

  async createRole({ name, slug, permissions }: CreateRoleDto) {
    try {
      const checkExistRole = await this.roleRepository.findOne({
        where: {
          slug: slug,
        },
      })
      if (checkExistRole) {
        throw new ConflictException('Role existed')
      }

      const result = this.roleRepository.create({ name, slug })
      const role = await this.roleRepository.save(result)

      for (const subject of Object.keys(permissions)) {
        permissions[subject].forEach((action: actionEnum) => {
          this.permissionService.createPermission({ action, subject, role })
        })
      }

      return role
    } catch (e) {
      throw e
    }
  }

  async updateRole(id: number, { name, slug, permissions }: UpdateRoleDto) {
    const result = await this.roleRepository.findOne({
      where: { id },
      relations: { permission: true },
    })

    if (!result) {
      throw new NotFoundException('Role không tồn tại')
    }

    let permissionCurrent = [...result.permission]

    for (const subject of Object.keys(permissions)) {
      permissions[subject].forEach((action: actionEnum) => {
        this.permissionService.createPermission({
          action,
          subject,
          role: result,
        })
        permissionCurrent = permissionCurrent.filter(
          (p) => !(p.action === action && p.subject === subject),
        )
      })
    }

    permissionCurrent.forEach(async (permission)=> {
      result.permission = result.permission.filter(p => p.id !== permission.id)
      await this.roleRepository.save(result)
    })


    return role
  }

  async deleteRoleId(id: number) {
    try {
      const role = await this.roleRepository.findOneBy({ id })
      if (!role) {
        throw new NotFoundException('Không tìm thấy tên vai trò')
      }
      await this.roleRepository.remove(role)
      return role
    } catch (e) {
      throw e
    }
  }
}
