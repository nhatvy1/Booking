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

  async getPermissionByName(subject: string) {
    try {
      const permissions = await this.permissionRepository.findBy({ subject })

      return permissions
    } catch (e) {
      throw e
    }
  }

  async createPermission({
    action,
    subject,
    role,
  }: {
    action: actionEnum
    subject: string
    role: Role
  }) {
    try {
      const permission = await this.permissionRepository.findOne({
        where: {
          action: action,
          subject: subject,
          role: { id: role.id },
        },
      })
      if (permission) {
        return permission
      } else {
        const checkExistPermission = await this.permissionRepository.findOne({
          where: {
            action: action,
            subject: subject,
          },
          relations: { role: true },
        })
        if (checkExistPermission) {
          checkExistPermission.role = [
            ...(checkExistPermission?.role || []),
            role,
          ]
          return this.permissionRepository.save(checkExistPermission)
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
    } catch (e) {
      throw e
    }
  }
}
