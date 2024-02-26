import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Permission, actionEnum } from './permission.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Role } from '../role/role.entity'

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) {}

  async addPermission({
    action,
    subject,
    role,
  }: {
    action: actionEnum
    subject: string
    role: Role
  }) {
    try {
      const permission = await this.permissionRepository.findOneBy({
        subject: subject,
        action: action,
        role: { id: role.id },
      })
      if (permission) {
        return permission
      } else {
        const checkExitsPermission = await this.permissionRepository.findOne({
          where: {
            action: action,
            subject: subject,
          },
          relations: { role: true },
        })
        if (checkExitsPermission) {
          checkExitsPermission.role = [
            ...(checkExitsPermission?.role || []),
            role,
          ]
          await this.permissionRepository.save(checkExitsPermission)
          return checkExitsPermission
        } else {
          const newPermission = this.permissionRepository.create({
            action,
            subject: subject,
          })
          newPermission.role = [...(newPermission?.role || []), role]
          await this.permissionRepository.save(newPermission)
          return newPermission
        }
      }
    } catch (error) {
      throw error
    }
  }

  async getPermissionByName(subject: string) {
    try {
      const permissions = await this.permissionRepository.findBy({ subject })

      return permissions
    } catch (e) {
      throw e
    }
  }

  async createPermission() {
    
  }
}
