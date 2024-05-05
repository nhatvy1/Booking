import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Permission } from "src/modules/permission/permission.entity";
import { Role } from "src/modules/role/role.entity";
import { RoomType } from "src/modules/roomType/room.type.entity";
import { User } from "src/modules/user/user.entity";

export default (): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Role, Permission, RoomType],
  autoLoadEntities: true,
  synchronize: process.env.DB_SYNC === 'true',
});