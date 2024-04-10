import {
  FindOptionsWhere,
  ILike,
  Repository,
} from 'typeorm'
import { ListFilterDto } from './filter.dto'

export abstract class SearchService<T> {
  constructor(protected readonly repository: Repository<T>) {}

  async search(
    filter: ListFilterDto,
    searchFields: Extract<keyof T, string>[],
  ): Promise<{
    result: T[]
    totalResults: number
    limit: number
    page: number
  }> {
    const skip = (filter.page - 1) * filter.limit
    const take = filter.limit

    const queryBuilder = this.repository.createQueryBuilder('aliasEntity')
    const whereSearch: FindOptionsWhere<T> = {}
    if (filter.search) {
      const arr = []
      for (const key of Object.keys(whereSearch)) {
        arr.push({ [key]: whereSearch[key] })
      }
      queryBuilder.orWhere(arr)
    }
    searchFields.forEach(
      (field) =>
        (whereSearch[`${field}` as string] = ILike(`%${filter.search}%`)),
    )
    queryBuilder.skip(skip)
    queryBuilder.take(take)
    queryBuilder.orderBy('aliasEntity.createdAt', 'DESC')
    const [list, totalResults] = await queryBuilder.getManyAndCount()

    return {
      result: list,
      totalResults: totalResults,
      limit: filter.limit,
      page: filter.page,
    }
  }
}
