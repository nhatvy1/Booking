import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class RoomType {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: String })
  description: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date
}
