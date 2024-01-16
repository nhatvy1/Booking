import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import typeormConfig from './database/typeorm.config'

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   useFactory: typeormConfig
    // })
  ],
  controllers: [AppController],
  providers: [AppService, { provide: 'PORT', useValue: 5000 }],
})
export class AppModule {}
