import { Module } from '@nestjs/common'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { Role } from './role.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PermissionModule } from '../permission/permission.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Role]), 
    PermissionModule
  ],
  controllers: [RoleController],
  providers: [RoleService],
  exports: [RoleService]
})
export class RoleModule {}
