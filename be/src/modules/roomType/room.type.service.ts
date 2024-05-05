import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { RoomType } from './room.type.entity'
import { ILike, Repository } from 'typeorm'
import { CreateRoomTypeDto } from './dto/create.room.type.dto'
import { FilterRoomTypeDto } from './dto/filter.room.type.dto'
import { SearchService } from '../base/SearchService'
import { ListFilterDto } from '../base/filter.dto'

@Injectable()
export class RoomTypeService extends SearchService<RoomType> {
  constructor(
    @InjectRepository(RoomType)
    private readonly roomTypeRepository: Repository<RoomType>,
  ) {
    super(roomTypeRepository)
  }

  createRoomType(createRoomTypeDto: CreateRoomTypeDto) {
    try {
      const roomType = this.roomTypeRepository.create(createRoomTypeDto)
      return this.roomTypeRepository.save(roomType)
    } catch (e) {
      throw e
    }
  }

  async getRoomType(query: FilterRoomTypeDto) {
    try {
      const { limit, page, search } = query
      const skip = (page - 1) * limit

      const [list, totalResults] = await this.roomTypeRepository.findAndCount({
        order: { createdAt: 'DESC' },
        take: limit,
        skip: skip,
        where: [
          { description: ILike(`%${search}%`) }, // Search within email
        ],
      })
      return {
        result: list,
        totalResults: totalResults,
        limit: limit,
        page: page,
      }
    } catch (e) {
      throw e
    }
  }

  async getRoomTypeDemo(query: ListFilterDto) {
    try {
      console.log(query)
      return this.search(query, ['description'])
    } catch(e) {
      throw e
    }
  }
}
