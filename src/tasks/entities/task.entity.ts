import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
//import { Table, Model } from 'sequelize-typescript';

@Entity('tasks')
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  description: string;

  @Column({ default: true })
  done: boolean;
}