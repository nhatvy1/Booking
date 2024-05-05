import { Module } from '@nestjs/common'
import { RoomTypeController } from './room.type.controller'
import { RoomTypeService } from './room.type.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RoomType } from './room.type.entity'

@Module({
  imports: [TypeOrmModule.forFeature([RoomType])],
  controllers: [RoomTypeController],
  providers: [RoomTypeService],
})
export class RoomTypeModule {}
