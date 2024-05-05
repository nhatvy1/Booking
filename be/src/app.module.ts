import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './database/typeorm.config'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { RoleModule } from './modules/role/role.module'
import { PermissionModule } from './modules/permission/permission.module'
import { RoomTypeModule } from './modules/roomType/room.type.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig,
    }),
    UserModule,
    AuthModule,
    RoleModule,
    PermissionModule,
    RoomTypeModule
  ],
  controllers: [],
  providers: [{ provide: 'PORT', useValue: 5000 }],
})
export class AppModule {}
