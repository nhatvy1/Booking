import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { CreateRoomTypeDto } from './dto/create.room.type.dto'
import { RoomTypeService } from './room.type.service'
import { Response } from 'src/utils/response.type'
import { ListFilterDto } from '../base/filter.dto'

@Controller('room-type')
export class RoomTypeController {
  constructor(private readonly roomTypeService: RoomTypeService) {}

  @Get()
  async getRoomType(@Query() query: ListFilterDto) {
    try {
      const result = await this.roomTypeService.getRoomType(query)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result,
      })
    } catch (e) {
      throw e
    }
  }

  @Post()
  async createRoomType(@Body() createRomTypeDto: CreateRoomTypeDto) {
    try {
      const result = await this.roomTypeService.createRoomType(createRomTypeDto)
      return Response({
        message: 'success',
        statusCode: HttpStatus.OK,
        result,
      })
    } catch (e) {
      throw e
    }
  }

  @Put()
  updateRoomType() {
    return { msg: 'Update success' }
  }

  @Delete()
  deleteRoomType() {
    return { msg: 'Delete room type' }
  }
}
