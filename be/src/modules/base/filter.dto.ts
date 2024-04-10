import { Transform } from "class-transformer";
import { IsEnum, IsNumber, IsOptional } from "class-validator";

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export class ListFilterDto {
  @Transform(({ value }) => Math.max(Number(value), 1))
  @IsNumber()
  @IsOptional()
  page = 1;

  @Transform(({ value }) => Math.max(Number(value), 1))
  @IsNumber()
  @IsOptional()
  limit = 10;

  @IsOptional()
  orderBy?: string;

  @IsOptional()
  search?: string;

  @IsEnum(SortOrder)
  @IsOptional()
  public sortOrder?: SortOrder = SortOrder.DESC;
}

