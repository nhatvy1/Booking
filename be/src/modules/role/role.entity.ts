import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "../permission/permission.entity";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false })
  slug: string

  @ManyToMany(()=> Permission, (permission)=> permission.role, {
    onDelete: 'CASCADE'
  })
  @JoinTable({ name: 'role_permission' })
  permission: Permission[]
}