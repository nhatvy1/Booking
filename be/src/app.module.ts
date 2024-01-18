import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './database/typeorm.config'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: typeormConfig,
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [{ provide: 'PORT', useValue: 5000 }],
})
export class AppModule {}
